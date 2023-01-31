<script>
    let filterText = "";

    function Filter() {
        document.querySelectorAll("#assetDiv").forEach((div) => {
            div.classList.remove("notDisplay");
            if (
                !div
                    .getElementsByTagName("h4")[0]
                    .innerHTML.includes(filterText)
            ) {
                div.classList.add("notDisplay");
            }
        });
    }
</script>

<div class="centered-div">
    <form on:submit|preventDefault={Filter} class="ribbon-form-short">
        <input type="text" placeholder="Asset Title" bind:value={filterText} />
        <button>Find Asset</button>
    </form>
</div>

<style>
    input {
        border-radius: 2vh;
        padding: 0 0 0 0.5vw;
    }

    button {
        border: none;
        border-radius: 2vh;
        margin-left: 2vw;
        width: 6vw;
    }
</style>
