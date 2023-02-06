<script>
    import { msToDate, DdMmYyyy } from "$lib/utils/stringModifiers";
    export let givenTodos;

    let tableHeadings = [
        "Task Title",
        "Project",
        "Task Master",
        "Associates",
        "Supervisors",
        "Task Content",
        "Expected Deadline",
        "Informed Associates",
        "Priroity",
        "Remaining Time",
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
            {#each givenTodos as todo}
                <tr>
                    <td>{todo.title}</td>
                    <td>{todo.project}</td>
                    <td>{todo.taskmaster}</td>
                    <td>{todo.associates}</td>
                    <td>{todo.supervisors}</td>
                    <td>{todo.task_context}</td>
                    <td>{DdMmYyyy(todo.expected_deadline)}</td>
                    <td>{todo.informed_associates}</td>
                    <td>{todo.priority}</td>
                    <td>{msToDate(todo.expected_deadline - new Date())}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    table {
        width: 90vw;
    }

    th {
        font-weight: 200;
    }

    td {
        font-weight: 600;
    }
</style>
