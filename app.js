const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to_do');
// console.log(argv);

let command = argv._[0];

switch (command) {
    case 'create':
        let task = toDo.createTask(argv.description, argv.completed = false);
        console.log(task);
        break;
    case 'list':
        // toDo.loadDB()
        //     .then(tasks => console.log(tasks.toString()))
        //     .catch(err => console.log(err));
        let taskList = toDo.loadDB();
        for (let task of taskList) {
            console.log('======== To Do ========='.green);
            console.log(task.description);
            console.log('Estado: ', task.completed);
            console.log('========================'.green);
        }
        break;
    case 'update':
        let state = toDo.updateTask(argv.description, argv.completed = true);
        console.log(state);
        break;
    case 'delete':
        let deletedTask = toDo.deleteTask(argv.description);
        console.log(deletedTask);
        break;
    default:
        console.log('Comando no reconocido');
}