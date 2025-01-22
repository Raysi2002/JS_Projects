// Get references to the DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim(); // Get the input value and remove whitespace

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item
  const li = document.createElement("li");

  // Add the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  // Add a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Append the text and button to the list item
  li.appendChild(taskSpan);
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";

  // Add event listener to delete button
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(li);
  });
}

// Event listener for the Add Task button
addTaskBtn.addEventListener("click", addTask);

// Optional: Add task on pressing "Enter" key
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});