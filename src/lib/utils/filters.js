export function accountFilter(accounts, userTags) {
    let res = [];

    if (userTags.includes("ALL") || userTags.includes("ALL ACCOUNTS")) {
        return accounts
    }

    accounts.forEach(account => {
        account.tags.forEach(tag => {
            if (userTags.includes(tag)) {
                res.push(account)
            }
        })
    });

    return res;
}

export function assetFilter(assets, userTags) {
    let res = [];

    if (userTags.includes("ALL") || userTags.includes("ALL ASSETS")) {
        return assets
    }

    assets.forEach(asset => {
        asset.tags.forEach(tag => {
            if (userTags.includes(tag)) {
                res.push(asset)
            }
        })
    });

    return res;
}

export function todoFilter(todos, allAssociates, allSupervisors, personnel_id) {
    let takenTodos = [];
    let givenTodos = [];
    let watchingTodos = [];

    todos.forEach(todo => {
        if (todo.taskmaster_id == personnel_id) { givenTodos.push(extendTodo(todo, allAssociates, allSupervisors)) }

        allAssociates.forEach(associate => {
            if (associate.associate_id == personnel_id && todo.id == associate.todo_id) { takenTodos.push(extendTodo(todo, allAssociates, allSupervisors)) }
        })

        allSupervisors.forEach(supervisor => {
            if (supervisor.supervisor_id == personnel_id && todo.id == supervisor.todo_id) { watchingTodos.push(extendTodo(todo, allAssociates, allSupervisors)) }
        })
    })

    return { "takenTodos": takenTodos, "givenTodos": givenTodos, "watchingTodos": watchingTodos }
}

function extendTodo(todo, allAssociates, allSupervisors) {
    let extendedTodo = todo;
    let associates = []
    let supervisors = []

    allAssociates?.forEach(associate => {
        if (associate.todo_id == todo.id) { associates.push(associate.associate_id) }
    })

    allSupervisors?.forEach(supervisor => {
        if (supervisor.todo_id == todo.id) { supervisors.push(supervisor.supervisor_id) }
    })

    extendedTodo["associates"] = associates;
    extendedTodo["supervisors"] = supervisors;
    extendedTodo["informed_associates"] = [];

    return extendedTodo
}