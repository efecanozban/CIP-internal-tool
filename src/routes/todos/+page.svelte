<script>
    import GivenTodosTable from "$lib/components/todos/givenTodosTable.svelte";
    import NewTodoMoodle from "$lib/components/todos/newTodoMoodle.svelte";
    import TakenTodosTable from "$lib/components/todos/takenTodosTable.svelte";
    import UpdateTodoMoodle from "$lib/components/todos/updateTodoMoodle.svelte";
    import { onMount } from "svelte";

    onMount(() => {
        document.querySelectorAll(".todoRow").forEach(function (row) {
            row.addEventListener("click", function () {
                if (row.classList.contains("selected")) {
                    row.classList.remove("selected");
                    selectedTodo = null;
                } else {
                    document
                        .querySelectorAll(".selected")
                        .forEach(function (row) {
                            row.classList.remove("selected");
                        });
                    row.classList.add("selected");
                    selectedTodo = row;
                }
            });
        });
    });

    export let data;
    let {
        personnels,
        projects,
        priorities,
        takenTodos,
        watchingTodos,
        givenTodos,
    } = data;

    let selectedTodo;

    function toggleMoodle(e) {
        if (e.srcElement.id == "newTodoButton") {
            document
                .getElementById("newTodoMoodle")
                .classList.remove("notDisplay");
        } else if (e.srcElement.id == "updateTodoButton") {
            document
                .getElementById("updateTodoMoodle")
                .classList.remove("notDisplay");
        }
    }
</script>

<div class="centered-div">
    <button
        on:click={toggleMoodle}
        id="updateTodoButton"
        class="neomorphic-normal-light">Update Todo</button
    >
    <button
        on:click={toggleMoodle}
        id="newTodoButton"
        class="neomorphic-normal-light">Submit New Todo</button
    >
</div>

<TakenTodosTable {takenTodos} {watchingTodos} {selectedTodo} />
<GivenTodosTable {givenTodos} {selectedTodo} />
<NewTodoMoodle {personnels} {projects} {priorities} />
<UpdateTodoMoodle {selectedTodo} {personnels} {projects} {priorities} />

<style>
    #newTodoButton,
    #updateTodoButton {
        margin-bottom: 2vh;
        margin-right: 2vw;
        width: 20vw;
        height: 4vh;
        border-radius: 1vh;
        font-size: large;
        font-weight: 600;
        background-color: var(--color-light);
        border: none;
        color: var(--text-color);
    }
</style>
