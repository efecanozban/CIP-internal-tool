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
        let expirationDate = "9999-12-31";
        if (data.get("expiration_date") != "") { expirationDate = data.get("expiration_date") }
        await insertAccount(data.get("context"), data.get("username"), data.get("password"), data.get("url"), expirationDate)
        let lastAccount = await getLatestAccount()
        await insertAccountTag(lastAccount[0].id, data.getAll("tag"))
    }
}