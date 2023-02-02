<script>
    export let src;
    export let showImageMoodle;

    function closeMoodle() {
        showImageMoodle = !showImageMoodle;
    }
</script>

{#if showImageMoodle}
    <div class="backDrop" on:click|self={closeMoodle}>
        <img {src} alt="" />
    </div>
{/if}

<style>
    img {
        max-width: 90vw;
        height: auto;
        position: absolute;
        transform: translate(-50%, -30%);
        left: 50%;
        top: 30%;
    }
</style>
