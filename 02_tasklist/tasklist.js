/*Object in allTasks
* {
*   id: number,
*   desc: string,
*   dueDate: Date
*   done: boolean
* }*/

let allTask = [];

function addTask() {
    const taskDesc = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value
    let formattedDate;
    if(dueDate) {
        const selectedDate = new Date(dueDate);
        formattedDate = selectedDate.getDate() + '.' + (selectedDate.getMonth() + 1) + '.' + selectedDate.getFullYear();
    }

    if (taskDesc === "") {
        showError("Input cannot be empty");
    } else {
        removeErrorElement();
        allTask.push({
            id: allTask.length + 1,
            desc: taskDesc,
            dueDate: formattedDate || "anytime",
            done: false
        });
    }
    document.getElementById("taskName").value = "";
    document.getElementById("dueDate").value = "";
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
            taskItem.className = "doneTask";
        }
        if (taskItem.children.length > 0) {
            taskList.appendChild(taskItem);
        }
    });
    if (allTask.length > 0) document.getElementById("clearList").style.display = "block";
    else document.getElementById("clearList").style.display = "none";
}

function createTaskItem(task) {
    return `
        <ul>
            <li>
                <div>
                    <b>${task.desc}</b> - Duedate: <b>${task.dueDate}</b>
                </div>
                <div>
                    <button onclick="markTaskDone(${task.id})" class="imgBtn"><img src="img/done.png"></button>
                    <button onclick="deleteTask(${task.id})" class="imgBtn"><img src="img/delete.png"></button>
                </div>
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
    document.getElementById('dueDate').min = new Date().toISOString().split('T')[0];
}