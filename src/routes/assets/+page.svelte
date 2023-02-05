<script>
    import AssetsTable from "$lib/components/assets/assetsTable.svelte";
    import AssetFilter from "$lib/components/assets/assetFilter.svelte";
    import NewAssetMoodle from "$lib/components/assets/newAssetMoodle.svelte";

    export let data;
    let { assets, allTags, assetTags } = data;

    let showFormMoodle = false;
    function toggleMoodle() {
        showFormMoodle = !showFormMoodle;
    }
</script>

<div class="centered-div">
    <button on:click={toggleMoodle}>Submit New Asset</button>
</div>

<AssetFilter />
<AssetsTable {assets} {allTags} {assetTags} />

<NewAssetMoodle {showFormMoodle} {allTags} />
