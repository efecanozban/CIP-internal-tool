import { getTakenTodos, getGivenTodos, getPersonnels, getPriorities, getProjects, getUserFromSession } from "$lib/server/db.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    return {
        takenTodos: await getTakenTodos(cookies.get('sessionid')),
        givenTodos: await getGivenTodos(cookies.get('sessionid')),
        personnels: await getPersonnels(),
        projects: await getPriorities(),
        priorities: await getProjects()
    }
}