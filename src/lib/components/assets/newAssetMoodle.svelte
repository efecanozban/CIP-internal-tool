<script>
    import { onMount } from "svelte";
    export let allTags;
    export let showFormMoodle = false;

    function closeMoodle() {
        showFormMoodle = false;
    }

    var fileContent = "";

    onMount(async () => {
        var fileInput = document.getElementById("fileInput");

        fileInput.addEventListener("change", function (e) {
            var file = fileInput.files[0];
            var imageType = /image.*/;

            if (file.type.match(imageType)) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    fileContent = reader.result;
                };
                reader.readAsDataURL(file);
            }
        });
    });
</script>

{#if showFormMoodle}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backDrop" on:click|self={closeMoodle}>
        <div class="centered-div" id="formDiv">
            <form method="POST" action="/assets?/uploadNewAsset">
                <label for="image">Image</label>
                <input type="file" id="fileInput" name="image" />

                <label for="title">Title</label>
                <input type="text" name="title" />

                <label for="content">Content</label>
                <input type="text" name="content" />

                <input
                    type="text"
                    style="display: none;"
                    name="fileContent"
                    id="fileContent"
                    bind:value={fileContent}
                />

                {#each allTags as tag}
                    <label for="tag">{tag.name}</label>
                    <input type="checkbox" name="tag" value={tag.id} />
                {/each}

                <button>Submit Asset</button>
            </form>
        </div>
    </div>
{/if}

<style>
    #formDiv {
        position: absolute;
        transform: translate(-50%, -30%);
        left: 50%;
        top: 30%;

        width: 20vw;
        height: 60vh;

        background-color: white;
    }

    form {
        display: block;
    }
</style>
