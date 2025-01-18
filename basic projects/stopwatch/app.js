const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function startTimex(){
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 1);
        isRunning = true;
    }
}

function stopTime(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function resetTime(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = `00h : 00m : 00s : 0000ms`
}

function updateDisplay(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    let ms = Math.floor(elapsedTime % 1000);
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    ms = String(ms).padStart(4, '0');
    display.textContent = `${hours}h : ${minutes}m : ${seconds}s : ${ms}ms`
}

start.addEventListener('click', (e) => {
    startTimex();
})
stop.addEventListener('click', (e) => {
    stopTime();
})
reset.addEventListener('click', (e) => {
    resetTime();
})