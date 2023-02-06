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

    let showFormMoodle = false;
    function toggleMoodle() {
        showFormMoodle = !showFormMoodle;
    }
</script>

<div class="centered-div">
    <button on:click={toggleMoodle} id="newTodoButton">Submit New Todo</button>
</div>

<TakenTodosTable {takenTodos} {watchingTodos} />
<GivenTodosTable {givenTodos} />
<NewTodoMoodle {personnels} {projects} {priorities} {showFormMoodle} />

<style>
    #newTodoButton {
        margin-bottom: 2vh;

        width: 20vw;
        height: 4vh;
        border-radius: 4vh;
        background-color: rgb(0, 0, 0);
        font-size: large;
        font-weight: 600;
        color: rgb(255, 255, 255);
    }
</style>
