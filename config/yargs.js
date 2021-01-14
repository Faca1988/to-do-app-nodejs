let common_opts = {
    description: {
        alias: 'd',
        demand: true,
    },
    completed: {
        // default: false,
        alias: 'cp'
    }
};
const argv = require('yargs')
    .command('create', 'Crea una tarea por hacer', common_opts)
    .command('list', 'Lista las tareas por hacer', {})
    .command('update', 'Actualiza el estado de una tarea (por defecto la establece como completada)', common_opts)
    .command('delete', 'Borra una tarea por hacer', common_opts)
    .help()
    .argv;


module.exports = {
    argv
};