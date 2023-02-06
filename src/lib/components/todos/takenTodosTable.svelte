<script>
    import { msToDate, DdMmYyyy } from "$lib/utils/stringModifiers.js";
    export let takenTodos;
    export let watchingTodos;

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
            {#each takenTodos as todo}
                <tr class="taken">
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

            {#each watchingTodos as todo}
                <tr class="watching">
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
    .taken {
        background-color: rgba(132, 132, 193, 0.7);
    }

    .watching {
        background-color: rgba(252, 105, 105, 0.7);
    }

    table {
        width: 90vw;
    }

    th {
        font-weight: 200;
    }

    td {
        font-weight: 600;
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
