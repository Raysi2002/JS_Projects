const apiKey = "8a66ceb846ec064f73cf62fa240272c3";
const searchBtn = document.getElementById("search");
const cityDisplay = document.getElementById("city-display");

const temp = document.getElementById('temp');
const wind = document.getElementById('wind-flow');
const humidity = document.getElementById("humidity");

async function cityWeather() {
    const city = document.getElementById("city").value;
    if(!city){
        alert("Invalid city");
    }
    const tempLine = await `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try{
        const response = await fetch(tempLine);
        if(!response.ok){
            alert("No response returned");
        }
        const weatherDetails = await response.json();
        cityDisplay.textContent = city;
        temp.textContent = weatherDetails.main.temp;
        wind.textContent = weatherDetails.wind.speed;
        humidity.textContent = weatherDetails.main.humidity;
    }catch(error){
        console.error(error);
    }
}

searchBtn.addEventListener('click', cityWeather);
