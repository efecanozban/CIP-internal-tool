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
    <button on:click={toggleMoodle}>Submit New Account</button>
</div>

<TakenTodosTable {takenTodos} {watchingTodos} />
<GivenTodosTable {givenTodos} />
<NewTodoMoodle {personnels} {projects} {priorities} {showFormMoodle} />
