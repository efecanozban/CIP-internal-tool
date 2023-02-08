import { SECRET_POSTGRES_URL } from '$env/static/private';
import pkg from 'pg';
const { Client } = pkg;
import { v4 as uuidv4 } from 'uuid';

const staticQueries = {
    "selectUsers": "select * from users",
    "selectAccounts": "select * from accounts",
    "selectAssets": "select * from assets",
    "selectPersonnels": "select * from personnels order by name asc",
    "selectProjects": "select * from projects",
    "selectPriorities": "select * from priorities",
    "selectTodos": "select * from todos",
    "selectAssociates": "select * from associate_ids",
    "selectSupervisors": "select * from supervisor_ids",
    "selectInformedAssociates": "select * from informed_associate_ids",
    "selectTags": "select * from tags",
    "selectAssetTags": "select * from asset_tags",
    "selectAccountTags": "select * from account_tags",
    "selectLatestTodo": "select id from todos order by id desc limit 1",
    "selectLatestAsset": "select id from assets order by id desc limit 1",
    "selectLatestAccount": "select id from accounts order by id desc limit 1",
}

async function getQuery(query) {
    const client = new Client(SECRET_POSTGRES_URL);
    await client.connect();
    let res = await client.query(query);
    await client.end();
    return res.rows
}


export async function insertAsset(title, fileContent, content) {
    return getQuery(`insert into assets 
    (title, image, content) 
    values(
        '${title}', 
        '${fileContent}', 
        '${content}')`)
}

export async function insertAccount(context, username, password, url, expiration_date) {
    return getQuery(`insert into accounts 
    (context, username, password, url, expiration_date) 
    values(
        '${context}', 
        '${username}', 
        '${password}',
        '${url}',
        '${expiration_date}')`)
}

export async function insertAssetTag(asset_id, tag_ids) {
    let query = "insert into asset_tags (asset_id, tag_id) values ";

    for (let i = 0; i < tag_ids.length; i++) {
        if (i != tag_ids.length - 1) { query += `(${asset_id}, ${tag_ids[i]}),` }
        else { query += `(${asset_id}, ${tag_ids[i]})` }
    }

    return getQuery(query)
}

export async function insertAccountTag(account_id, tag_ids) {
    let query = "insert into account_tags (account_id, tag_id) values ";

    for (let i = 0; i < tag_ids.length; i++) {
        if (i != tag_ids.length - 1) { query += `(${account_id}, ${tag_ids[i]}), ` }
        else { query += `(${account_id}, ${tag_ids[i]})` }
    }

    return getQuery(query)
}

export async function insertTodo(title, taskmaster_id, project_id, task_context, expected_deadline, priority_id) {
    return getQuery(`insert into todos 
    (title, taskmaster_id, project_id, task_context, expected_deadline, priority_id) 
    values(
        '${title}', 
        ${taskmaster_id}, 
        ${project_id},
        '${task_context}',
        '${expected_deadline}',
        ${priority_id})`)
}

export async function insertAssociates(todoId, associate_ids) {
    if (associate_ids.length > 0) {

        let query = `insert into associate_ids (todo_id, associate_id) values `

        for (let i = 0; i < associate_ids.length; i++) {
            if (i == associate_ids.length - 1) { query += `(${todoId}, ${associate_ids[i]}); ` }
            else { query += `(${todoId}, ${associate_ids[i]}), ` }
        }

        return getQuery(query)
    }

}

export async function insertSupervisors(todoId, supervisor_ids) {
    if (supervisor_ids.length > 0) {
        let query = `insert into supervisor_ids (todo_id, supervisor_id) values `

        for (let i = 0; i < supervisor_ids.length; i++) {
            if (i == supervisor_ids.length - 1) { query += `(${todoId}, ${supervisor_ids[i]}); ` }
            else { query += `(${todoId}, ${supervisor_ids[i]}), ` }
        }

        return getQuery(query)
    }
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
    await getQuery(`insert into sessions (id, user_id) values ('${sessionID}', ${user.id})`)
    return sessionID
}

export async function getUserFromSession(sessionId) {
    return getQuery(`select * from users where id = (select user_id from sessions where id = '${sessionId}') `)
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

export async function getTodos(sessionId) {
    return getQuery(staticQueries["selectTodos"]);
}

export async function getAssociates(todoId) {
    return getQuery(staticQueries["selectAssociates"]);
}

export async function getSupervisors(todoId) {
    return getQuery(staticQueries["selectSupervisors"]);
}

export async function getInformedAssociates(todoId) {
    return getQuery(staticQueries["selectInformedAssociates"]);
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

export async function getTags() {
    return getQuery(staticQueries["selectTags"]);
}

export async function getAssetTags() {
    return getQuery(staticQueries["selectAssetTags"]);
}

export async function getAccountTags() {
    return getQuery(staticQueries["selectAccountTags"]);
}

export async function getLatestTodo() {
    return getQuery(staticQueries["selectLatestTodo"])
}

export async function getLatestAccount() {
    return getQuery(staticQueries["selectLatestAccount"])
}

export async function getLatestAsset() {
    return getQuery(staticQueries["selectLatestAsset"])
}

export async function deleteTodo(todoId) {
    return getQuery(`delete from todos where id = ${todoId}`)
}

export async function deleteAssociateIds(todoId) {
    return getQuery(`delete from associate_ids where todo_id = ${todoId}`)
}

export async function deleteSupervisorIds(todoId) {
    return getQuery(`delete from supervisor_ids where todo_id = ${todoId}`)
}

export async function confirmTodo(todoId, associateId) {
    return getQuery(`insert into informed_associate_ids (todo_id, associate_id) values(${todoId}, ${associateId})`)
}