import { getAssets, insertAsset } from "$lib/server/db.js";

export async function load() {
    return {
        assets: await getAssets()
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    uploadNewAsset: async ({ request }) => {
        const data = await request.formData();
        insertAsset(data.get("title"), data.get("fileContent"), data.get("content"))
    }
}
