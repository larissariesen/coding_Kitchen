/*Object in allTasks
* {
*   id: number,
*   desc: string,
*   done: boolean
* }*/

let allTask = [];

function addTask() {
    const taskDesc = document.getElementById("taskName").value;

    if (taskDesc === "") {
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
    allTask.forEach((task) => {
        let taskItem = document.createElement("div");
        taskItem.innerHTML = createTaskItem(task);
        if (task.done) {
            taskItem.style.textDecoration = "line-through";
        }
        if (taskItem.children.length > 0) {
            taskList.appendChild(taskItem);
        }
    });
}

function createTaskItem(task) {
    return `
        <ul>
            <li>
                ${task.desc} <button onclick="markTaskDone(${task.id})">Done</button>
            </li>
        </ul>
    `
}

function markTaskDone(taskId) {
    //Fixme creates a new Todo with done = true and does not overwrite..
    const taskIndex = allTask.findIndex(t => t.id === taskId);
    allTask[taskIndex].done = !allTask[taskIndex].done
    showAllTasks();
}

// ErrorHandling
function showError(error) {
    document.getElementById("errors").innerHTML = `<li>${error}</li>`;
}

function removeErrorElement() {
    document.getElementById("errors").innerHTML = "";
}

window.onload = function () {
    showAllTasks();
}