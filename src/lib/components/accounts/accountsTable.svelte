<script>
    import { DdMmYyyy } from "$lib/utils/stringModifiers";
    import { tagIdToName } from "$lib/utils/idToName";
    export let accounts;
    export let accountTags;
    export let allTags;

    let tableHeadings = [
        "Context",
        "Username",
        "Password",
        "URL",
        "Expiration Date",
        "Tags",
    ];
</script>

<div class="centered-div">
    <table>
        <thead>
            {#each tableHeadings as heading}
                <th>{heading}</th>
            {/each}
        </thead>

        <tbody>
            {#each accounts as account}
                <tr>
                    <td>{account.context}</td>
                    <td>{account.username}</td>
                    <td>{account.password}</td>
                    <td>{account.url}</td>
                    <td>{DdMmYyyy(account.expiration_date)}</td>
                    <td>
                        {#each accountTags.filter((tag) => tag.account_id == account.id) as accountTag}
                            {tagIdToName(accountTag.tag_id, allTags)},
                        {/each}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        width: 50vw;
    }

    th {
        font-weight: 200;
    }

    td {
        font-weight: 600;
    }
</style>
