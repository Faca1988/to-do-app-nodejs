const fs = require('fs');
const colors = require('colors');

const dbFile = 'db/data.json';

let taskList = [];

const dbSave = () => {
    let data = JSON.stringify(taskList);
    return new Promise((resolve, reject) => {
        fs.writeFile(dbFile, data, (err) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
};


const createTask = (description, completed = false) => {
    loadDB();

    let task = {
        description,
        completed
    };

    taskList.push(task);

    dbSave()
        .catch(e => console.log(e));

    return task;
};

const deleteTask = (description) => {
    loadDB();

    let idx = taskList.findIndex(task => task.description === description);

    if (idx >= 0) {
        taskList.pop(taskList[idx].description = description);
        dbSave()
            .catch(e => console.log(e));
        return true;
    } else {
        return false;
    }
};

const loadDB = () => {
    // let tasks = '';
    // let data = JSON.stringify(taskList);
    // return new Promise((resolve, reject) => {
    //     fs.readFile(dbFile, JSON, (err, dbData) => {
    //         if (err) reject(err);
    //         tasks = dbData + data;
    //         resolve(tasks);
    //     });
    // });
    try {
        taskList = require(`../${dbFile}`);
    } catch {
        taskList = [];
    }
    return taskList;
};

const updateTask = (description, completed = true) => {

    loadDB();

    let idx = taskList.findIndex(task => task.description === description);

    if (idx >= 0) {
        taskList[idx].completed = completed;
        dbSave()
            .catch(e => console.log(e));
        return true;
    } else {
        return false;
    }
};

module.exports = {
    createTask,
    dbSave,
    loadDB,
    updateTask,
    deleteTask
};