<script>
    import AccountsTable from "$lib/components/accounts/accountsTable.svelte";
    import NewAccountForm from "$lib/components/accounts/newAccountForm.svelte";

    export let data;
    let { accounts } = data;
</script>

<AccountsTable {accounts} />
<NewAccountForm />
