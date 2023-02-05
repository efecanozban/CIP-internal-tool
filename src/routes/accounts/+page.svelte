<script>
    import AccountsTable from "$lib/components/accounts/accountsTable.svelte";
    import NewAccountMoodle from "$lib/components/accounts/newAccountMoodle.svelte";

    export let data;
    let { accounts, allTags, accountTags } = data;

    let showFormMoodle = false;
    function toggleMoodle() {
        showFormMoodle = !showFormMoodle;
    }
</script>

<div class="centered-div">
    <button on:click={toggleMoodle}>Submit New Account</button>
</div>

<NewAccountMoodle {allTags} {showFormMoodle} />
<AccountsTable {accounts} {accountTags} {allTags} />
