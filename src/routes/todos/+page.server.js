import { getTodos, getAssociates, getSupervisors, getPersonnels, getPriorities, getProjects, insertTodo, insertAssociates, insertSupervisors, getLatestTodo, getUserFromSession } from "$lib/server/db.js";
import { todoFilter } from "$lib/utils/filters";
import { todoIdToName } from "$lib/utils/idToName";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let allProjects = await getProjects()
    let allPersonnels = await getPersonnels()
    let allPriorities = await getPriorities()
    let allTodos = await getTodos();
    let allAssociates = await getAssociates();
    let allSupervisors = await getSupervisors();
    let user = await getUserFromSession(cookies.get("sessionid"))
    let filteredTodos = todoFilter(allTodos, allAssociates, allSupervisors, user[0].personnel_id)


    return {
        takenTodos: todoIdToName(filteredTodos["takenTodos"], allProjects, allPersonnels, allPriorities),
        watchingTodos: todoIdToName(filteredTodos["watchingTodos"], allProjects, allPersonnels, allPriorities),
        givenTodos: todoIdToName(filteredTodos["givenTodos"], allProjects, allPersonnels, allPriorities),
        personnels: allPersonnels,
        projects: allProjects,
        priorities: allPriorities
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    uploadNewTodo: async ({ request }) => {
        const data = await request.formData();
        let todo_id;
        await insertTodo(data.get("title"), data.get("taskMaster"), data.get("project"), data.get("taskcontent"), data.get("deadline"), data.get("priority"));
        todo_id = await getLatestTodo()
        await insertAssociates(todo_id[0].id, data.getAll("associate"))
        await insertSupervisors(todo_id[0].id, data.getAll("supervisor"))
    }
}
