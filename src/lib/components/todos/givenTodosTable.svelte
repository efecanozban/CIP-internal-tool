<script>
    export let todos;

    let tableHeadings = [
        "Task Title",
        "Project",
        "Task Master",
        "Associates",
        "Task Content",
        "Expected Deadline",
        "Informed Associates",
        "Priroity",
    ];
</script>

<table>
    <thead>
        {#each tableHeadings as heading}
            <th>{heading}</th>
        {/each}
    </thead>

    <tbody>
        {#each todos as todo}
            <tr>
                <td>{todo.title}</td>
                <td>{todo.taskmaster_id}</td>
                <td>{todo.associate_ids}</td>
                <td>{todo.project_id}</td>
                <td>{todo.task_content}</td>
                <td>{todo.expected_deadline}</td>
                <td>{todo.informed_associate_ids}</td>
                <td>{todo.priority}</td>
            </tr>
        {/each}
    </tbody>
</table>
