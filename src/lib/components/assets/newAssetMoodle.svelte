<script>
    import { onMount } from "svelte";
    export let allTags;

    function tagDivClicked() {
        this.childNodes[2].click();
    }

    function closeMoodle() {
        document.getElementById("assetMoodle").classList.add("notDisplay");
    }

    let fileContent = "";

    onMount(async () => {
        const fileInput = document.getElementById("fileInput");

        fileInput.addEventListener("change", function (e) {
            let file = fileInput.files[0];
            const imageType = /image.*/;

            if (file.type.match(imageType)) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    fileContent = reader.result;
                };
                reader.readAsDataURL(file);
            }
        });
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backDrop notDisplay" on:click|self={closeMoodle} id="assetMoodle">
    <div class="centered-div" id="formDiv">
        <form method="POST" action="/assets?/uploadNewAsset">
            <h2>Submit New Asset</h2>

            <label for="image">Image</label>
            <input
                type="file"
                id="fileInput"
                name="image"
                class="neomorphic-normal-light"
            />

            <label for="title">Title</label>
            <input type="text" name="title" class="neomorphic-normal-light" />

            <label for="content">Content</label>
            <input type="text" name="content" class="neomorphic-normal-light" />

            <input
                type="text"
                name="fileContent"
                id="fileContent"
                class="notDisplay"
                bind:value={fileContent}
            />

            <p>Tags</p>
            <div>
                {#each allTags as tag}
                    <div
                        class="neomorphic-normal-light tagSpan"
                        on:click|self={tagDivClicked}
                    >
                        <label for="tag">{tag.name}</label>
                        <input
                            type="checkbox"
                            name="tag"
                            value={tag.id}
                            class="neomorphic-normal-light"
                        />
                    </div>
                    <br />
                {/each}
            </div>

            <button class="neomorphic-normal-light">Submit Asset</button>
        </form>
    </div>
</div>

<style>
    #formDiv {
        position: relative;
        transform: translate(-50%, -30%);
        left: 50%;
        top: 30%;

        width: 30vw;
        height: 60vh;

        background-color: var(--color-light);
        border-radius: 4vh;

        color: rgb(70, 70, 70);
    }

    form {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 4fr 1fr 1fr;
        grid-gap: 3%;
    }

    input:not([type="checkbox"]) {
        height: 3vh;
        width: 15vw;
        border: none;
        padding-left: 0.5vw;
        border-radius: 4vh;
        background-color: var(--color-light);
    }

    input[type="file"] {
        padding: 0.5vh 0 0.1vh 1vw;
    }

    label,
    p {
        padding-left: 1vw;
    }

    h2 {
        grid-column-start: 1;
        grid-column-end: 3;
        text-align: center;
    }

    button {
        position: absolute;
        bottom: 3vh;
        left: 50%;
        transform: translate(-50%, 0);

        width: 20vw;
        height: 3vh;

        border-radius: 4vh;
        border: none;
        background-color: var(--color-light);
    }
</style>
