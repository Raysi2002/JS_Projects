const textInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

function addTask(){
    const text = textInput.value.trim();
    if(text === ""){
        alert("Please add tast");
        return;
    }
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    const span = document.createElement("span");
    span.textContent = text;
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    textInput.value = "";
    deleteBtn.addEventListener('click', e => {
        taskList.removeChild(li);
    })

}

addBtn.addEventListener("click", (e) => {
    addTask();
})