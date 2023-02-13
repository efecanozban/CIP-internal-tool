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
                    <td class="neomorphic-normal-light">{account.context}</td>
                    <td class="neomorphic-normal-light">{account.username}</td>
                    <td class="neomorphic-normal-light">{account.password}</td>
                    <td class="neomorphic-normal-light">{account.url}</td>
                    <td class="neomorphic-normal-light">
                        {#if DdMmYyyy(account.expiration_date) == "31/12/9999"}
                            -
                        {:else}
                            {DdMmYyyy(account.expiration_date)}
                        {/if}
                    </td>
                    <td class="neomorphic-normal-light">
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
        color: var(--text-color);
    }

    th {
        font-weight: 200;
    }

    td {
        font-weight: 600;
        padding-left: 0.5vw;
    }

    tr {
        line-height: 1.6rem;
    }

    tr td:first-child {
        border-top-left-radius: 4vh;
        border-bottom-left-radius: 4vh;
    }

    tr td:last-child {
        border-top-right-radius: 4vh;
        border-bottom-right-radius: 4vh;
    }
</style>
