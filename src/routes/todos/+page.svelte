<script>
    import GivenTodosTable from "$lib/components/todos/givenTodosTable.svelte";
    import NewTodoForm from "$lib/components/todos/newTodoForm.svelte";
    import TakenTodosTable from "$lib/components/todos/takenTodosTable.svelte";

    export let data;
    let {
        takenTodos,
        givenTodos,
        watchingTodos,
        personnels,
        projects,
        priorities,
    } = data;
</script>

<GivenTodosTable {givenTodos} />
<NewTodoForm {personnels} {projects} {priorities} />
<TakenTodosTable {takenTodos} {watchingTodos} />
