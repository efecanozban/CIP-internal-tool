<script>
    export let accounts;

    let tableHeadings = ["Context", "Username", "Password"];
</script>

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
            </tr>
        {/each}
    </tbody>
</table>
