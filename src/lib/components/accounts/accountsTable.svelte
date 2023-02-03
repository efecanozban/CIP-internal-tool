<script>
    import { DdMmYyyy } from "$lib/utils/stringModifiers";
    export let accounts;

    let tableHeadings = ["Context", "Username", "Password", "URL"];
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
                    <td>{account.tags}</td>
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
