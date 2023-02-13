import { getTodos, getAssociates, getSupervisors, getInformedAssociates, getPersonnels, getPriorities, getProjects, insertTodo, insertAssociates, insertSupervisors, getLatestTodo, getUserFromSession, deleteTodo, deleteAssociateIds, deleteSupervisorIds, confirmTodo } from "$lib/server/db.js";
import { todoFilter } from "$lib/utils/filters";
import { todoIdToName } from "$lib/utils/idToName";

let user;

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    let allProjects = await getProjects()
    let allPersonnels = await getPersonnels()
    let allPriorities = await getPriorities()
    let allTodos = await getTodos();
    let allAssociates = await getAssociates();
    let allSupervisors = await getSupervisors();
    let allInformedAssociates = await getInformedAssociates();
    user = await getUserFromSession(cookies.get("sessionid"))
    let filteredTodos = todoFilter(allTodos, allAssociates, allSupervisors, allInformedAssociates, user[0].personnel_id)


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
        let deadline = new Date(new Date().getTime() + (10 * 24 * 60 * 60 * 1000)).toISOString().substring(0, 10);
        if (data.get("deadline") != "") { deadline = data.get("deadline") }
        await insertTodo(data.get("title"), data.get("taskMaster"), data.get("project"), data.get("taskcontent"), deadline, data.get("priority"));
        todo_id = await getLatestTodo()
        await insertAssociates(todo_id[0].id, data.getAll("associate"))
        await insertSupervisors(todo_id[0].id, data.getAll("supervisor"))
    },
    updateNewTodo: async ({ request }) => {
        const data = await request.formData();
    },
    deleteTodo: async ({ request }) => {
        const data = await request.formData();
        await deleteSupervisorIds(data.get("todoId"))
        await deleteAssociateIds(data.get("todoId"))
        await deleteTodo(data.get("todoId"))
    },
    confirmTodo: async ({ request }) => {
        const data = await request.formData();
        await confirmTodo(data.get("todoId"), user[0].personnel_id)
    },
}
