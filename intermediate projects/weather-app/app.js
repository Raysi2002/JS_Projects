const apiKey = `8a66ceb846ec064f73cf62fa240272c3`;
const searchBtn = document.getElementById(`search`);
const cityName = document.getElementById('city-display');
const keyCity = document.getElementById(`city`);

const weatherTemp = document.getElementById(`temp`);
const weatherHumidity = document.getElementById(`humidity`);
const weatherWindSpeed = document.getElementById(`wind`);

async function getWeather(){
    const city = document.getElementById(`city`).value;
    if(!city)
        alert(`${city} isn't a valid city`);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const weatherDetails = await response.json();

    cityName.textContent = city;
    weatherTemp.textContent = weatherDetails.main.temp;
    weatherHumidity.textContent = weatherDetails.main.humidity;
    weatherWindSpeed.textContent = weatherDetails.wind.speed;
}

searchBtn.addEventListener(`click`, getWeather);
keyCity.addEventListener(`keypress`, (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        getWeather();
    }
})