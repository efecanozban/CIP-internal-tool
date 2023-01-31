<script>
    import { onMount } from "svelte";
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

<div class="centered-div">
    <form
        method="POST"
        action="/assets?/uploadNewAsset"
        class="ribbon-form-long"
    >
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

        <button>Submit Asset</button>
    </form>
</div>

<style>
    label {
        color: white;
        margin: 0 1vw;
    }

    input[type="file"] {
        color: white;
        width: 10vw;
        border-radius: 2vh;
    }

    input[type="text"] {
        padding: 0 0 0 0.5vw;
        width: 8vw;
        border-radius: 2vh;
    }

    button {
        margin-left: 2vw;
        padding: 0 1vw;
        border-radius: 2vh;
    }
</style>
