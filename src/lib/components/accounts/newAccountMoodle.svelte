<script>
    export let allTags;
    export let showFormMoodle;

    function closeMoodle() {
        showFormMoodle = false;
    }
</script>

{#if showFormMoodle}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backDrop" on:click|self={closeMoodle}>
        <div class="centered-div" id="formDiv">
            <form method="POST" action="accounts?/uploadNewAccount">
                <label for="context">Context</label>
                <input type="text" name="context" />

                <label for="username">Username</label>
                <input type="text" name="username" />

                <label for="password">Password</label>
                <input type="text" name="password" />

                <label for="url">URL</label>
                <input type="text" name="url" />

                <p>Tags</p>

                {#each allTags as tag}
                    <label for="tag">{tag.name}</label>
                    <input type="checkbox" name="tag" value={tag.id} />
                {/each}

                <label for="expiration_date">Expiration Date</label>
                <input type="date" name="expiration_date" />

                <button>Submit</button>
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
