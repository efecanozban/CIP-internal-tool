import { getAccounts, insertAccount, getUserFromSession, getTags, getAccountTags, insertAccountTag, getLatestAccount } from "$lib/server/db.js";
import { accountFilter, tagsFilter, accountTagsFilter } from "$lib/utils/filters";

export async function load({ cookies }) {
    let user = await getUserFromSession(cookies.get("sessionid"))
    let allAccounts = await getAccounts();
    let alltags = await getTags();
    let accountTags = await getAccountTags();
    let filtederAccounts = accountFilter(allAccounts, user[0].read_privileges, alltags)

    return {
        accounts: filtederAccounts,
        allTags: tagsFilter(alltags, "Accounts"),
        accountTags: accountTagsFilter(filtederAccounts, accountTags)
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    uploadNewAccount: async ({ request }) => {
        const data = await request.formData();
        await insertAccount(data.get("context"), data.get("username"), data.get("password"), data.get("url"), data.get("expiration_date"))
        let lastAccount = await getLatestAccount()
        await insertAccountTag(lastAccount[0].id, data.getAll("tag"))
    }
}