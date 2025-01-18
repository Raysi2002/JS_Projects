const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

setInterval(time, 1000);

function time(){
    const now = new Date();
    const currentHours = now.getHours() % 12 || 12;
    const currentMinutes = now.getMinutes();
    const currentSeconds = now.getSeconds();
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