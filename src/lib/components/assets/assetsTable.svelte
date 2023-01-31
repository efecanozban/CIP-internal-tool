<script>
    export let assets;
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

<style>
    #assetsTable {
        position: relative;
        left: 12.5vw;
        top: 3vh;
        width: 75vw;
        display: grid;
        grid-template-columns: 15vw 15vw 15vw 15vw;
        grid-template-rows: 45vh;
        grid-gap: 5vw;
    }

    img {
        width: 15vw;
        height: 30vh;
    }
</style>
