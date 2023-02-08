<script>
    import GivenTodosTable from "$lib/components/todos/givenTodosTable.svelte";
    import NewTodoMoodle from "$lib/components/todos/newTodoMoodle.svelte";
    import TakenTodosTable from "$lib/components/todos/takenTodosTable.svelte";

    export let data;
    let {
        personnels,
        projects,
        priorities,
        takenTodos,
        watchingTodos,
        givenTodos,
    } = data;

    function toggleMoodle() {
        document.getElementById("todoMoodle").classList.remove("notDisplay");
    }
</script>

<div class="centered-div">
    <button
        on:click={toggleMoodle}
        id="newTodoButton"
        class="neomorphic-normal-light">Submit New Todo</button
    >
</div>

<TakenTodosTable {takenTodos} {watchingTodos} />
<GivenTodosTable {givenTodos} />
<NewTodoMoodle {personnels} {projects} {priorities} />

<style>
    #newTodoButton {
        margin-bottom: 2vh;

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
