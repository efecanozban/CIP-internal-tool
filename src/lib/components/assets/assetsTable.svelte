<script>
    import ImageMoodle from "$lib/components/general/imageMoodle.svelte";
    import { onMount } from "svelte";
    export let assets;

    let showImageMoodle = false;
    let selectedAssetSrc;

    onMount(() => {
        document.querySelectorAll("#assetDiv").forEach(function (asset) {
            asset.addEventListener("click", function () {
                selectedAssetSrc = asset.getElementsByTagName("img")[0].src;
                showImageMoodle = !showImageMoodle;
            });
        });
    });
</script>

<div id="assetsTable">
    {#each assets as asset}
        <div id="assetDiv">
            <img src={asset.image} alt="" />

            <h4>{asset.title}</h4>

            <p>{asset.content}</p>
        </div>
    {/each}
</div>

<ImageMoodle src={selectedAssetSrc} {showImageMoodle} />

<style>
    #assetsTable {
        position: relative;
        left: 10vw;
        top: 3vh;
        width: 85vw;
        display: grid;
        grid-template-columns: repeat(6, 10vw);
        grid-template-rows: 30vh;
        grid-gap: 4vw;
    }

    img {
        width: 10vw;
        height: 20vh;
    }
</style>
