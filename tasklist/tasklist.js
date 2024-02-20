/*Object in allTasks
* {
*   id: number,
*   desc: string,
*   done: boolean
* }*/

let allTask = [];

function addTask() {
    const taskDesc = document.getElementById("taskName").value;

    if(taskDesc === ""){
        showError("Input cannot be empty");
    } else {
        removeErrorElement();
    }
    allTask.push({
        id: allTask.length + 1,
        desc: taskDesc,
        done: false
    });
    document.getElementById("taskName").value = "";
    showAllTasks();
}

function showAllTasks() {
    let taskList = document.getElementById("tasks");
    taskList.innerHTML = "";
    allTask.forEach((task) => {
        let taskItemL = createTaskItem(task);
        let taskItem = document.createElement("li");
        taskItem.innerHTML = task.desc;
        taskList.appendChild(taskItem);
        if(task.done) {
            taskItem.style.textDecoration = "line-through";
        }
    });
}
function createTaskItem(task) {
    let taskItem = document.createElement("div");
    let listItem = document.createElement("li");
    listItem.innerHTML = task.desc;

    let button = document.createElement("button");
    button.innerHTML = "Mark Done";
    button.onclick = function() {
        task.done = !task.done;
        showAllTasks();
    }

    listItem.appendChild(button);
    taskItem.appendChild(listItem);

    return taskItem;
}

/*function createTaskItem(task) {
    let taskItem = document.createElement("div");
    let listItem = document.createElement("li")
    taskItem.appendChild(listItem);
    let button = document.createElement("button");
    button.innerHTML = "Mark Done";
    button.onclick = function() {
        task.done = !task.done;
        showAllTasks();
    }
    listItem.appendChild(button);
    taskItem.appendChild(document.createElement("li"));
    taskItem.innerHTML = task.desc;
    taskItem.onclick = function() {
        task.done = !task.done;
        showAllTasks();
    }
    return taskItem;
}*/

// ErrorHandling
function showError(error) {
    document.getElementById("errors").innerHTML = `<li>${error}</li>`;
}

function removeErrorElement() {
    document.getElementById("errors").innerHTML = "";
}

window.onload = function() {
    showAllTasks();
}