<script>
    import AssetsTable from "$lib/components/assets/assetsTable.svelte";
    import AssetFilter from "$lib/components/assets/assetFilter.svelte";
    import NewAssetMoodle from "$lib/components/assets/newAssetMoodle.svelte";

    export let data;
    let { assets, allTags, assetTags } = data;

    function toggleMoodle() {
        document.getElementById("assetMoodle").classList.remove("notDisplay");
    }
</script>

<div class="centered-div">
    <button on:click={toggleMoodle} id="newAssetButton">Submit New Asset</button
    >
</div>

<AssetFilter />
<AssetsTable {assets} {allTags} {assetTags} />

<NewAssetMoodle {allTags} />

<style>
    #newAssetButton {
        margin-bottom: 2vh;

        width: 20vw;
        height: 4vh;
        border-radius: 4vh;
        background-color: rgb(0, 0, 0);
        font-size: large;
        font-weight: 600;
        color: rgb(255, 255, 255);
    }
</style>
