const timeBox = document.querySelector(".container");
let timeStatus = null;

setInterval(currentTime, 1);

function currentTime(){
    const now = new Date();
    const time = now.toLocaleTimeString();
    let hours = now.getHours();
    if(hours >= 12){
        timeStatus = "PM";
    }else{
        time = 'AM';
    }
    timeBox.textContent = `${time}${timeStatus}`;
}