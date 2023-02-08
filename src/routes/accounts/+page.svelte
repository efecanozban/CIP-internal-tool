<script>
    import AccountsTable from "$lib/components/accounts/accountsTable.svelte";
    import NewAccountMoodle from "$lib/components/accounts/newAccountMoodle.svelte";

    import { PlusCircle } from "svelte-heros-v2";

    export let data;
    let { accounts, allTags, accountTags } = data;

    function toggleMoodle() {
        document.getElementById("accountMoodle").classList.remove("notDisplay");
    }
</script>

<div class="centered-div">
    <button
        on:click={toggleMoodle}
        id="newAccountButton"
        class="neomorphic-normal-light"
    >
        &ensp Submit New Account
    </button>
</div>

<NewAccountMoodle {allTags} />
<AccountsTable {accounts} {accountTags} {allTags} />

<style>
    #newAccountButton {
        margin-bottom: 2vh;
        width: 20vw;
        height: 4vh;
        border-radius: 1vh;
        background-color: var(--color-light);
        font-size: large;
        font-weight: 600;
        color: var(--text-color);
        border: none;
    }
</style>
