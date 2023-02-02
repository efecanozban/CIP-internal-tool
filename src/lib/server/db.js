import { SECRET_POSTGRES_URL } from '$env/static/private';
import pkg from 'pg';
const { Client } = pkg;
import { v4 as uuidv4 } from 'uuid';

const staticQueries = {
    "selectUsers": "select * from users",
    "selectAccounts": "select * from accounts",
    "selectAssets": "select * from assets",
    "selectPersonnels": "select * from personnels",
    "selectProjects": "select * from projects",
    "selectPriorities": "select * from priorities"
}

async function getQuery(query) {
    const client = new Client(SECRET_POSTGRES_URL);
    await client.connect();
    let res = await client.query(query);
    await client.end();
    return res.rows
}

export async function getUsers() {
    return getQuery(staticQueries["selectUsers"]);
}

export async function getAccounts() {
    return getQuery(staticQueries["selectAccounts"]);
}

export async function getAssets() {
    return getQuery(staticQueries["selectAssets"]);
}

export async function getTakenTodos(sessionId) {
    let user = await getUserFromSession(sessionId)
    return getQuery(`select * from todos where id in (select todo_id from associate_ids where associate_id = ${user[0].id})`);
}

export async function getWatchingTodos(sessionId) {
    let user = await getUserFromSession(sessionId)
    return getQuery(`select * from todos where id in (select todo_id from supervisor_ids where supervisor_id = ${user[0].id})`);
}

export async function getGivenTodos(sessionId) {
    let user = await getUserFromSession(sessionId)
    return getQuery(`select * from todos where taskmaster_id = ${user[0].id}`);
}

export async function getPersonnels() {
    return getQuery(staticQueries["selectPersonnels"]);
}

export async function getProjects() {
    return getQuery(staticQueries["selectProjects"]);
}

export async function getPriorities() {
    return getQuery(staticQueries["selectPriorities"]);
}

export async function insertAsset(title, fileContent, content) {
    getQuery(`insert into assets 
    (title, image, content) 
    values(
        '${title}', 
        '${fileContent}', 
        '${content}')`)
}

export async function getUser(username, password) {
    const users = await getUsers();

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username && users[i].password == password) {
            return { success: true, user: users[i] }
        }
        return { success: false, user: null }
    }
}

export async function createSession(user) {
    const sessionID = uuidv4()
    getQuery(`insert into sessions (id, user_id) values ('${sessionID}', ${user.id})`)
    return sessionID
}

export async function getUserFromSession(sessionId) {
    return getQuery(`select * from users where id = (select user_id from sessions where id = '${sessionId}') `)
}