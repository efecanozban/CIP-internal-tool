import { getAssets, insertAsset, getTags, getAssetTags, getUserFromSession, getLatestAsset, insertAssetTag } from "$lib/server/db.js";
import { assetFilter, tagsFilter, assetTagsFilter } from "$lib/utils/filters";

export async function load({ cookies }) {
    let user = await getUserFromSession(cookies.get("sessionid"))
    let allAssets = await getAssets();
    let allTags = await getTags();
    let assetTags = await getAssetTags();
    let filtederAssets = assetFilter(allAssets, user[0].read_privileges, allTags)

    return {
        assets: assetFilter(allAssets, user[0].read_privileges),
        allTags: tagsFilter(allTags, "Assets"),
        assetTags: assetTagsFilter(filtederAssets, assetTags)
    }
}

/** @type {import('./$types').Actions} */
export const actions = {
    uploadNewAsset: async ({ request }) => {
        const data = await request.formData();

        await insertAsset(data.get("title"), data.get("fileContent"), data.get("content"))
        let lastAsset = await getLatestAsset();
        await insertAssetTag(lastAsset[0].id, data.getAll("tag"))
    }
}
