<script>
    import { DdMmYyyyToYyyyMmDd } from "$lib/utils/stringModifiers";
    export let selectedTodo;
    export let personnels;
    export let projects;
    export let priorities;

    function tagDivClicked() {
        this.childNodes[2].click();
    }

    function closeMoodle() {
        document.getElementById("updateTodoMoodle").classList.add("notDisplay");
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    class="backDrop notDisplay"
    on:click|self={closeMoodle}
    id="updateTodoMoodle"
>
    <div class="centered-div" id="formDiv">
        <form method="POST" action="/todos?/updateTodo">
            <h2>Update Todo</h2>

            <label for="title">Title</label>
            <input
                value={selectedTodo ? selectedTodo.childNodes[0].innerHTML : ""}
                type="text"
                name="title"
                class="neomorphic-normal-light"
            />

            <label for="taskMaster">Task Master</label>
            <select name="taskMaster" class="neomorphic-normal-light">
                {#each personnels as personnel}
                    {#if selectedTodo?.childNodes[4].innerHTML != personnel.name + " " + personnel.sirname}
                        <option value={personnel.id}
                            >{personnel.name} {personnel.sirname}</option
                        >
                    {:else}
                        <option value={personnel.id} selected
                            >{personnel.name} {personnel.sirname}</option
                        >
                    {/if}
                {/each}
            </select>

            <label for="project">Project</label>
            <select name="project" class="neomorphic-normal-light">
                {#each projects as project}
                    {#if selectedTodo?.childNodes[2].innerHTML != project.title}
                        <option value={project.id}>{project.title}</option>
                    {:else}
                        <option value={project.id} selected
                            >{project.title}</option
                        >
                    {/if}
                {/each}
            </select>

            <label for="taskcontent">Content</label>
            <input
                value={selectedTodo
                    ? selectedTodo.childNodes[10].innerHTML
                    : ""}
                type="text"
                name="taskcontent"
                class="neomorphic-normal-light"
            />

            <label for="deadline">Deadline</label>
            <input
                value={selectedTodo
                    ? DdMmYyyyToYyyyMmDd(selectedTodo.childNodes[12].innerHTML)
                    : ""}
                type="date"
                name="deadline"
                class="neomorphic-normal-light"
            />

            <label for="priority">Priority</label>
            <select name="priority" class="neomorphic-normal-light">
                {#each priorities as priority}
                    {#if selectedTodo?.childNodes[16].innerHTML != priority.name}
                        <option value={priority.id}>{priority.name}</option>
                    {:else}
                        <option value={priority.id} selected
                            >{priority.name}</option
                        >{/if}
                {/each}
            </select>

            <p style="margin: 0">Associates</p>
            <div>
                {#each personnels as personnel}
                    <div
                        class="neomorphic-normal-light tagSpan"
                        on:click|self={tagDivClicked}
                    >
                        <label for="associate"
                            >{personnel.name} {personnel.sirname}</label
                        >
                        {#if selectedTodo?.childNodes[6].innerHTML.includes(personnel.name + " " + personnel.sirname)}
                            <input
                                checked
                                type="checkbox"
                                name="associate"
                                value={personnel.id}
                                class="neomorphic-normal-light"
                            />
                        {:else}
                            <input
                                type="checkbox"
                                name="associate"
                                value={personnel.id}
                                class="neomorphic-normal-light"
                            />
                        {/if}
                    </div>
                {/each}
            </div>

            <p style="margin: 0">Supervisors</p>
            <div>
                {#each personnels as personnel}
                    <div
                        class="neomorphic-normal-light tagSpan"
                        on:click|self={tagDivClicked}
                    >
                        <label for="supervisor"
                            >{personnel.name} {personnel.sirname}</label
                        >
                        {#if selectedTodo?.childNodes[8].innerHTML.includes(personnel.name + " " + personnel.sirname)}
                            <input
                                checked
                                type="checkbox"
                                name="supervisor"
                                value={personnel.id}
                                class="neomorphic-normal-light"
                            />
                        {:else}
                            <input
                                type="checkbox"
                                name="supervisor"
                                value={personnel.id}
                                class="neomorphic-normal-light"
                            />
                        {/if}
                    </div>
                {/each}
            </div>

            <button class="neomorphic-normal-light">Update Todo</button>
        </form>
    </div>
</div>

<style>
    #formDiv {
        position: relative;
        transform: translate(-50%, -30%);
        left: 50%;
        top: 30%;

        width: 80vw;
        height: 70vh;

        background-color: var(--color-light);
        border-radius: 4vh;

        color: rgb(70, 70, 70);
    }

    form {
        width: 70vw;
        height: 60vh;
        display: grid;
        grid-template-columns: 1fr 3fr 1fr 3fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 4fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 3%;
    }

    input:not([type="checkbox"]),
    select {
        height: 3vh;
        border: none;
        padding-left: 0.5vw;
        border-radius: 4vh;
        background-color: var(--color-light);
    }

    .tagSpan {
        margin-bottom: 1vh;
    }

    label,
    p {
        padding-left: 1vw;
    }

    h2 {
        grid-column-start: 1;
        grid-column-end: 5;
        text-align: center;
    }

    button {
        position: absolute;
        bottom: 3vh;
        left: 50%;
        transform: translate(-50%, 0);

        width: 15vw;
        height: 3vh;

        border-radius: 4vh;
        border: none;
        background-color: var(--color-light);
    }
</style>
