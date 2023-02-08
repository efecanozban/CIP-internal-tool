<script>
    let filterText = "";
    $: filterText = filterText.toLocaleLowerCase();

    function Filter() {
        document.querySelectorAll("#assetDiv").forEach((div) => {
            let isTagIncluded = false;

            Array.from(
                div.getElementsByTagName("div")[0].getElementsByTagName("p")
            ).forEach((p) => {
                if (p.innerHTML.toLowerCase().includes(filterText)) {
                    isTagIncluded = true;
                }
            });

            div.classList.remove("notDisplay");

            if (
                !(
                    div
                        .getElementsByTagName("h4")[0]
                        .innerHTML.toLowerCase()
                        .includes(filterText) ||
                    div
                        .getElementsByTagName("p")[0]
                        .innerHTML.toLowerCase()
                        .includes(filterText) ||
                    isTagIncluded
                )
            ) {
                div.classList.add("notDisplay");
            }
        });
    }
</script>

<div class="centered-div">
    <form
        on:submit|preventDefault={Filter}
        class="ribbon-form-short neomorphic-normal-light"
    >
        <input type="text" placeholder="Asset Title" bind:value={filterText} />
        <button id="findAssetButton" class="neomorphic-normal-light"
            >Find Asset</button
        >
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

    #findAssetButton {
        background-color: var(--color-light);
    }
</style>
