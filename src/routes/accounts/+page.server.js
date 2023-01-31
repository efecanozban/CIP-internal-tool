import { getAccounts } from "$lib/server/db.js";

export async function load() {
    return {
        accounts: await getAccounts()
    }
}