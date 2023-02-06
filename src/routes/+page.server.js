import { getUser, createSession, getUserFromSession } from '$lib/server/db'

/** @type {import('./$types').Actions} */
export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const username = data.get('username');
        const password = data.get('password');

        const res = await getUser(username, password)

        if (res.success) {
            cookies.set('sessionid', await createSession(res.user), {
                httpOnly: true,
                secure: false,
                path: '/',
                sameSite: 'lax',
            });
            return { success: true };
        }
        else {
            return { success: false, message: "no such user exists" }
        }
    },

    logout: async ({ cookies }) => {
        cookies.delete('sessionid')
    }
}