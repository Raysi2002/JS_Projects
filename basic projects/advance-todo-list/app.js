const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-todo");
const taskList = document.getElementById("task-list");

function addTask(){
    const taskText = taskInput.value.trim();
    if (taskText === ""){
        alert("Please add task");
    }

    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete"
    const span = document.createElement("span");
    span.textContent = taskText;
    li.appendChild(span);
    li.appendChild(deleteBtn)
    taskList.appendChild(li);
    taskInput.value = "";
    deleteBtn.addEventListener("click", (e) => {
        taskList.removeChild(li);
    })
}

addTaskBtn.addEventListener("click", e => {
    addTask();
})