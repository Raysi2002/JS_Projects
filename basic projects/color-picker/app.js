const greenButton = document.getElementById("green");
const redButton = document.getElementById("red");
const whiteButton = document.getElementById("white");
const blackButton = document.getElementById("black");
const orangeButton = document.getElementById("orange");

greenButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "green";
})
redButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "red";
})
whiteButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
})
blackButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
})
orangeButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "orange";
})