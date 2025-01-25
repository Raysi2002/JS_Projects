const taskList = document.getElementById("taskList");
let taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("addTaskBtn");

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText === ""){
        alert("Please add task");
        return;
    }
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    deleteBtn.addEventListener('click', (e) => {
        taskList.removeChild(li);
    })
}

addTaskBtn.addEventListener('click', (e) => {
    addTask();
})
taskInput.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        addTask();
    }
})