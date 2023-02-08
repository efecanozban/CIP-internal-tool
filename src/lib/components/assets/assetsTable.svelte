<script>
    import ImageMoodle from "$lib/components/general/imageMoodle.svelte";
    import { tagIdToName } from "$lib/utils/idToName";
    import { onMount } from "svelte";
    export let assets;
    export let allTags;
    export let assetTags;

    let selectedAssetSrc;

    onMount(() => {
        document.querySelectorAll("#assetDiv").forEach(function (asset) {
            asset.addEventListener("click", function () {
                selectedAssetSrc = asset.getElementsByTagName("img")[0].src;
                document
                    .getElementById("imageMoodle")
                    .classList.remove("notDisplay");
            });
        });
    });
</script>

<div id="assetsTable">
    {#each assets as asset}
        <div id="assetDiv" class="neomorphic-normal-light">
            <img src={asset.image} alt="" class="neomorphic-normal-light" />

            <h4>{asset.title}</h4>

            <p>{asset.content}</p>

            <div id="tagsDiv">
                {#each assetTags.filter((tag) => tag.asset_id == asset.id) as assetTag}
                    <p>{tagIdToName(assetTag.tag_id, allTags)},</p>
                {/each}
            </div>
        </div>
    {/each}
</div>

<ImageMoodle src={selectedAssetSrc} />

<style>
    #assetsTable {
        position: relative;
        left: 10vw;
        top: 3vh;
        width: 85vw;
        display: grid;
        grid-template-columns: repeat(6, 12vw);
        grid-template-rows: 40vh;
        grid-gap: 1.6vw;
    }

    #assetDiv {
        padding: 1vh 1vw;
        border-radius: 3vh;
    }

    #tagsDiv {
        display: flex;
    }

    img {
        width: 10vw;
        height: 20vh;
        border-radius: 3vh;
    }
</style>
