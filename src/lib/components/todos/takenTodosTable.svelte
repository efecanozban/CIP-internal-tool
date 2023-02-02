<script>
    import { msToDate, DdMmYyyy } from "$lib/utils/stringModifiers.js";
    export let takenTodos;
    export let watchingTodos;

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
        {#each takenTodos as todo}
            <tr class="taken">
                <td>{todo.title}</td>
                <td>{todo.taskmaster_id}</td>
                <td>{todo.associate_ids}</td>
                <td>{todo.project_id}</td>
                <td>{todo.task_content}</td>
                <td>{DdMmYyyy(todo.expected_deadline)}</td>
                <td>{todo.informed_associate_ids}</td>
                <td>{todo.priority}</td>
                <td>{msToDate(todo.expected_deadline - new Date())}</td>
            </tr>
        {/each}

        {#each watchingTodos as todo}
            <tr class="watching">
                <td>{todo.title}</td>
                <td>{todo.taskmaster_id}</td>
                <td>{todo.associate_ids}</td>
                <td>{todo.project_id}</td>
                <td>{todo.task_content}</td>
                <td>{DdMmYyyy(todo.expected_deadline)}</td>
                <td>{todo.informed_associate_ids}</td>
                <td>{todo.priority}</td>
                <td>{msToDate(todo.expected_deadline - new Date())}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    .taken {
        background-color: red;
    }

    .watching {
        background-color: green;
    }
</style>
