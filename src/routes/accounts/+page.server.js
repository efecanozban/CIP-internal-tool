import { getAccounts, insertAccount, getUserFromSession, getTags, insertTag } from "$lib/server/db.js";
import { accountFilter } from "$lib/utils/filters";

export async function load({ cookies }) {
    let allAccounts = await getAccounts();
    let user = await getUserFromSession(cookies.get("sessionid"))
    let tags = await getTags();

    return {
        accounts: accountFilter(allAccounts, user[0].read_privileges, tags),
        tags: tags
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    uploadNewAccount: async ({ request }) => {
        const data = await request.formData();
        await insertAccount(data.get("context"), data.get("username"), data.get("password"), data.get("url"), data.get("expiration_date"), data.get("tags"))
        await insertTags
    }
}