<script>
    export let personnels;
    export let projects;
    export let priorities;
</script>

<form>
    <label for="title">Title</label>
    <input type="text" name="title" />

    <label for="taskMaster">Task Master</label>
    <select name="taskMaster">
        {#each personnels as personnel}
            <option value={personnel.name}>{personnel.name}</option>
        {/each}
    </select>

    <label for="associates">Associates</label>
    <select name="associates">
        {#each personnels as personnel}
            <option value={personnel.name}>{personnel.name}</option>
        {/each}
    </select>

    <label for="project">Project</label>
    <select name="project">
        {#each projects as project}
            <option value={project.name}>{project.title}</option>
        {/each}
    </select>

    <label for="taskcontent">Content</label>
    <input type="text" name="taskcontent" />

    <label for="deadline">Deadline</label>
    <input type="date" name="deadline" />

    <label for="priority">Priority</label>
    <select name="priority">
        {#each priorities as priority}
            <option value={priority.name}>{priority.name}</option>
        {/each}
    </select>
</form>