<script>
    import AssetsTable from "$lib/components/assets/assetsTable.svelte";
    import NewAssetForm from "$lib/components/assets/newAssetForm.svelte";
    import AssetFilter from "$lib/components/assets/assetFilter.svelte";

    export let data;
    let { assets } = data;
</script>

<NewAssetForm />
<AssetFilter />
<AssetsTable {assets} />
