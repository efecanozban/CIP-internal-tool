import { getAssets, insertAsset, getTags, getUserFromSession } from "$lib/server/db.js";
import { assetFilter } from "$lib/utils/filters";

export async function load({ cookies }) {
    let allAssets = await getAssets();
    let user = await getUserFromSession(cookies.get("sessionid"))

    return {
        assets: assetFilter(allAssets, user[0].read_privileges),
        tags: await getTags()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    uploadNewAsset: async ({ request }) => {
        const data = await request.formData();
        await insertAsset(data.get("title"), data.get("fileContent"), data.get("content"))
    }
}
