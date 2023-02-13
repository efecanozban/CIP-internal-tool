<script>
    export let allTags;

    function tagDivClicked() {
        this.childNodes[2].click();
    }

    function closeMoodle() {
        document.getElementById("accountMoodle").classList.add("notDisplay");
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="backDrop notDisplay" on:click|self={closeMoodle} id="accountMoodle">
    <div class="centered-div" id="formDiv">
        <form
            method="POST"
            action="accounts?/uploadNewAccount"
            id="newAccountForm"
        >
            <h2>Submit New Account</h2>

            <label for="context">Context</label>
            <input type="text" name="context" class="neomorphic-normal-light" />

            <label for="username">Username</label>
            <input
                type="text"
                name="username"
                class="neomorphic-normal-light"
            />

            <label for="password">Password</label>
            <input
                type="text"
                name="password"
                class="neomorphic-normal-light"
            />

            <label for="url">URL</label>
            <input type="text" name="url" class="neomorphic-normal-light" />

            <label for="expiration_date">Expiration Date</label>
            <input
                type="date"
                name="expiration_date"
                class="neomorphic-normal-light"
            />

            <p>Tags</p>
            <div>
                {#each allTags as tag}
                    <div
                        class="neomorphic-normal-light tagSpan"
                        on:click|self={tagDivClicked}
                    >
                        <label for="tag">{tag.name}</label>
                        <input type="checkbox" name="tag" value={tag.id} />
                    </div>
                    <br />
                {/each}
            </div>

            <button class="neomorphic-normal-light">Submit</button>
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
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 4fr 1fr;
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
