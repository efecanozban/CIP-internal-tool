<script>
    import { msToDate, DdMmYyyy } from "$lib/utils/stringModifiers";
    export let givenTodos;

    let tableHeadings = [
        "Task Title",
        "Project",
        "Task Master",
        "Associates",
        "Task Content",
        "Expected Deadline",
        "Informed Associates",
        "Priroity",
        "Remaining Time",
    ];
</script>

<table>
    <thead>
        {#each tableHeadings as heading}
            <th>{heading}</th>
        {/each}
    </thead>

    <tbody>
        {#each givenTodos as todo}
            <tr>
                <td>{todo.title}</td>
                <td>{todo.taskmaster_id}</td>
                <td>{todo.associate_ids}</td>
                <td>{todo.project_id}</td>
                <td>{todo.task_content}</td>
                <td>{DdMmYyyy(todo.expected_deadline)}</td>
                <td>{todo.informed_associate_ids}</td>
                <td>{todo.priority}</td>
                <td>{msToDate(todo.expected_deadline - Date.now())}</td>
            </tr>
        {/each}
    </tbody>
</table>
