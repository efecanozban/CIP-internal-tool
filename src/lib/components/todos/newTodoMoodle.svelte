<script>
    export let personnels;
    export let projects;
    export let priorities;

    export let showFormMoodle;

    function closeMoodle() {
        showFormMoodle = false;
    }
</script>

{#if showFormMoodle}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="backDrop" on:click|self={closeMoodle}>
        <div class="centered-div" id="formDiv">
            <form method="POST" action="/todos?/uploadNewTodo">
                <label for="title">Title</label>
                <input type="text" name="title" />

                <label for="taskMaster">Task Master</label>
                <select name="taskMaster">
                    {#each personnels as personnel}
                        <option value={personnel.id}>{personnel.name}</option>
                    {/each}
                </select>

                <p>Associates</p>
                {#each personnels as personnel}
                    <label for="associate">{personnel.name}</label>
                    <input
                        type="checkbox"
                        name="associate"
                        value={personnel.id}
                    />
                {/each}

                <p>Supervisors</p>
                {#each personnels as personnel}
                    <label for="supervisor">{personnel.name}</label>
                    <input
                        type="checkbox"
                        name="supervisor"
                        value={personnel.id}
                    />
                {/each}

                <label for="project">Project</label>
                <select name="project">
                    {#each projects as project}
                        <option value={project.id}>{project.title}</option>
                    {/each}
                </select>

                <label for="taskcontent">Content</label>
                <input type="text" name="taskcontent" />

                <label for="deadline">Deadline</label>
                <input type="date" name="deadline" />

                <label for="priority">Priority</label>
                <select name="priority">
                    {#each priorities as priority}
                        <option value={priority.id}>{priority.name}</option>
                    {/each}
                </select>

                <button>Submit Todo</button>
            </form>
        </div>
    </div>
{/if}

<style>
    #formDiv {
        position: absolute;
        transform: translate(-50%, -30%);
        left: 50%;
        top: 30%;

        width: 20vw;
        height: 60vh;

        background-color: white;
    }

    form {
        display: block;
    }
</style>
