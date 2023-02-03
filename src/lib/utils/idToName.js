export function todoIdToName(todos, projects, personnels, priorities) {
    let namedTodos = [];

    todos.forEach(todo => {
        let namedTodo = {};

        namedTodo["title"] = todo.title;
        namedTodo["task_context"] = todo.task_context;
        namedTodo["expected_deadline"] = todo.expected_deadline;
        namedTodo["id"] = todo.id;

        let taskmaster = personnels.filter(personel => personel.id == todo.taskmaster_id)[0]
        namedTodo["taskmaster"] = taskmaster.name + " " + taskmaster.sirname;

        let project = projects.filter(project => project.id == todo.project_id)[0]
        namedTodo["project"] = project.title;

        let priority = priorities.filter(priority => priority.id == todo.priority_id)[0]
        namedTodo["priority"] = priority.name;

        let associates = personnels.filter(personnel => todo.associates.includes(personnel.id))
        let associateNames = []
        associates.forEach(associate => { associateNames.push(" " + associate.name + " " + associate.sirname) })
        namedTodo["associates"] = associateNames;

        let supervisors = personnels.filter(personnel => todo.supervisors.includes(personnel.id))
        let supervisorNames = []
        supervisors.forEach(supervisor => { supervisorNames.push(" " + supervisor.name + " " + supervisor.sirname) })
        namedTodo["supervisors"] = supervisorNames;

        let informedAssociates = personnels.filter(personnel => todo.informed_associates.includes(personnel.id))
        let informedAssociateNames = []
        informedAssociates.forEach(informedAssociate => { informedAssociateNames.push(" " + informedAssociate.name + " " + informedAssociate.sirname) })
        namedTodo["informed_associates"] = informedAssociateNames;

        namedTodos.push(namedTodo)
    });

    return namedTodos
}