<script>
    export let tags;
</script>

<div class="centered-div">
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
        {#each tags as tag}
            <label for="tag">{tag.name}</label>
            <input type="checkbox" name="tag" value={tag.id} />
        {/each}

        <label for="expiration_date">Expiration Date</label>
        <input type="date" name="expiration_date" />

        <button>Submit</button>
    </form>
</div>

<style>
    label {
        color: white;
    }

    input {
        margin: 0 1vw;
    }
</style>
