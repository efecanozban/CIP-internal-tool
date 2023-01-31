import { getTodos, getPersonnels, getPriorities, getProjects } from "$lib/server/db.js";

export async function load() {
    return {
        todos: await getTodos(),
        personnels: await getPersonnels(),
        projects: await getPriorities(),
        priorities: await getProjects()
    }
}