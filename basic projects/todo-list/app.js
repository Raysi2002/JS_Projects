const addTodo = document.getElementById("addTodo");
const text = "";
addTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoText = document.getElementById("todoText").value;
    text = todoText;
})

console.log(text);
console.log("Connetected");