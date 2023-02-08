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

<div id="todoContainer">
    <table>
        <thead>
            {#each tableHeadings as heading}
                <th>{heading}</th>
            {/each}
        </thead>

        <tbody>
            {#each takenTodos as todo}
                <tr class="taken">
                    <td class="neomorphic-inset-light">{todo.title}</td>
                    <td class="neomorphic-inset-light">{todo.project}</td>
                    <td class="neomorphic-inset-light">{todo.taskmaster}</td>
                    <td class="neomorphic-inset-light">{todo.associates}</td>
                    <td class="neomorphic-inset-light">{todo.supervisors}</td>
                    <td class="neomorphic-inset-light">{todo.task_context}</td>
                    <td class="neomorphic-inset-light"
                        >{DdMmYyyy(todo.expected_deadline)}</td
                    >
                    <td class="neomorphic-inset-light"
                        >{todo.informed_associates}</td
                    >
                    <td class="neomorphic-inset-light">{todo.priority}</td>
                    <td class="neomorphic-inset-light"
                        >{msToDate(todo.expected_deadline - new Date())}</td
                    >
                    <td
                        ><form action="/todos?/confirmTodo" method="POST">
                            <input
                                type="text"
                                name="todoId"
                                style="display:none"
                                value={todo.id}
                            />

                            <button
                                id="confirmTodoButton"
                                class="neomorphic-normal-light"
                                >Confirm Todo</button
                            >
                        </form></td
                    >

                    <td
                        ><form action="/todos?/finishTodo" method="POST">
                            <button
                                id="finishTodoButton"
                                class="neomorphic-normal-light"
                                >Finish Todo</button
                            >
                        </form></td
                    >
                </tr>
            {/each}

            {#each watchingTodos as todo}
                <tr class="watching">
                    <td class="neomorphic-normal-light">{todo.title}</td>
                    <td class="neomorphic-normal-light">{todo.project}</td>
                    <td class="neomorphic-normal-light">{todo.taskmaster}</td>
                    <td class="neomorphic-normal-light">{todo.associates}</td>
                    <td class="neomorphic-normal-light">{todo.supervisors}</td>
                    <td class="neomorphic-normal-light">{todo.task_context}</td>
                    <td class="neomorphic-normal-light"
                        >{DdMmYyyy(todo.expected_deadline)}</td
                    >
                    <td class="neomorphic-normal-light"
                        >{todo.informed_associates}</td
                    >
                    <td class="neomorphic-normal-light">{todo.priority}</td>
                    <td class="neomorphic-normal-light"
                        >{msToDate(todo.expected_deadline - new Date())}</td
                    >

                    <td>
                        <form action="/todos?/deleteTodo" method="POST">
                            <input
                                type="text"
                                name="todoId"
                                style="display:none"
                                value={todo.id}
                            />

                            <button
                                id="deleteTodoButton"
                                class="neomorphic-normal-light"
                                >Delete Todo</button
                            >
                        </form></td
                    >
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    #todoContainer {
        overflow-x: scroll;
        width: 90vw;
        margin: auto;
    }

    table {
        color: var(--text-color);
    }

    th {
        font-weight: 200;
        white-space: nowrap;
    }

    td {
        font-weight: 600;
        padding: 0.8vw;
        white-space: nowrap;
    }

    tr {
        line-height: 1.8rem;
    }

    tr td:first-child {
        border-top-left-radius: 4vh;
        border-bottom-left-radius: 4vh;
    }

    tr td:nth-child(10) {
        border-top-right-radius: 4vh;
        border-bottom-right-radius: 4vh;
    }

    #finishTodoButton {
        width: 5vw;
        background-color: var(--color-light);
        border: none;
        border-radius: 4vh;
        margin-left: 1vw;
    }

    #deleteTodoButton,
    #confirmTodoButton {
        background-color: var(--color-light);
        border: none;
        border-radius: 4vh;
        width: 5vw;
    }
</style>
