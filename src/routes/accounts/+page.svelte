<script>
    import AccountsTable from "$lib/components/accounts/accountsTable.svelte";
    import NewAccountMoodle from "$lib/components/accounts/newAccountMoodle.svelte";

    import { PlusCircle } from "svelte-heros-v2";

    export let data;
    let { accounts, allTags, accountTags } = data;

    let showFormMoodle = false;
    function toggleMoodle() {
        showFormMoodle = !showFormMoodle;
    }
</script>

<div class="centered-div">
    <button on:click={toggleMoodle} id="newAccountButton">
        <PlusCircle color="#ffffff" size="2vh" />

        &ensp Submit New Account
    </button>
</div>

<NewAccountMoodle {allTags} {showFormMoodle} />
<AccountsTable {accounts} {accountTags} {allTags} />

<style>
    #newAccountButton {
        margin-bottom: 2vh;
        display: flex;
        justify-content: center;
        width: 20vw;
        height: 3vh;
        border-radius: 4vh;
        background-color: rgb(0, 0, 0);
        font-size: large;
        font-weight: 600;
        color: rgb(255, 255, 255);
    }
</style>
