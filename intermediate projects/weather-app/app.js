const apiKey = "";
const city = document.getElementById("city");
const tempLine = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`;