const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

setInterval(time, 1000);

function time(){
    const now = new Date();
    let currentHours = now.getHours() % 12 || 12;
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();
    currentHours = String(currentHours).padStart(2, "0");
    currentMinutes = String(currentMinutes).padStart(2, "0");
    currentSeconds = String(currentSeconds).padStart(2, "0");
    hours.innerHTML = `${currentHours}
            <span class="ap">hours</span>`;
    minutes.innerHTML = `${currentMinutes}
            <span class="ap">mintues</span>`;
    seconds.innerHTML = `${currentSeconds}
            <span class="ap">seconds</span>`;
    if(now.getHours > "12"){
        ampm.textContent = "PM";
    }else{
        ampm.textContent = "AM";
    }
}