<script>
    import GivenTodosTable from "$lib/components/todos/givenTodosTable.svelte";
    import NewTodoForm from "$lib/components/todos/newTodoForm.svelte";
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
</script>

<NewTodoForm {personnels} {projects} {priorities} />
<TakenTodosTable {takenTodos} {watchingTodos} />
<GivenTodosTable {givenTodos} />
