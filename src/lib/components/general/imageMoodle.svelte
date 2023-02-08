<script>
    export let src;

    function closeMoodle() {
        document.getElementById("imageMoodle").classList.add("notDisplay");
    }

    function downloadImage() {
        document.getElementById("downloadAnchor").click();
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backDrop notDisplay" on:click|self={closeMoodle} id="imageMoodle">
    <a href={src} download="img.png" id="downloadAnchor" style="display:none"
        >Download</a
    >
    <button on:click={downloadImage}>Download Image</button>
    <img {src} alt="" id="image" />
</div>

<style>
    img {
        max-width: 90vw;
        height: auto;
        position: absolute;
        transform: translate(-50%, -30%);
        left: 50%;
        top: 30%;
    }

    button {
        position: absolute;
        transform: translate(-50%, -20%);
        left: 50%;
        top: 20%;
        border: none;
        border-radius: 4vh;
        height: 2vh;
        padding: 0 0.5vw;
    }
</style>
