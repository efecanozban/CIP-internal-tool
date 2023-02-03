<script>
    export let personnels;
    export let projects;
    export let priorities;
</script>

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
        <input type="checkbox" name="associate" value={personnel.id} />
    {/each}

    <p>Supervisors</p>
    {#each personnels as personnel}
        <label for="supervisor">{personnel.name}</label>
        <input type="checkbox" name="supervisor" value={personnel.id} />
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
