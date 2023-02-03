import { getUserFromSession } from '$lib/server/db.js'

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
    const user = await getUserFromSession(cookies.get('sessionid'));
    if (user.length > 0) { return { logedIn: true, username: user[0].username } }
    else { return { logedIn: false } }
}