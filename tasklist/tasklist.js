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
        allTask.push({
            id: allTask.length + 1,
            desc: taskDesc,
            done: false
        });
    }
    document.getElementById("taskName").value = "";
    showAllTasks();
}

function showAllTasks() {
    let taskList = document.getElementById("tasks");
    taskList.innerHTML = '';
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
    if (allTask.length > 0) document.getElementById("clearList").style.display = "block";
}

function createTaskItem(task) {
    return `
        <ul>
            <li>
                ${task.desc} 
                <button onclick="markTaskDone(${task.id})">Done</button>
                <button onclick="deleteTask(${task.id})">X</button>
            </li>
        </ul>
    `
}

function markTaskDone(taskId) {
    const taskIndex = findTaskIndexInAllTasks(taskId);
    allTask[taskIndex] = {
        ...allTask[taskIndex], done: !allTask[taskIndex].done
    }
    showAllTasks();
}

function deleteTask(taskId) {
    const taskIndex = findTaskIndexInAllTasks(taskId);
    allTask.splice(taskIndex, 1);
    showAllTasks();
}

function clearTodoList() {
    allTask = [];
    showAllTasks();
    document.getElementById("clearList").style.display = "none"
}

const findTaskIndexInAllTasks = (taskId) => allTask.findIndex(t => t.id === taskId);


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