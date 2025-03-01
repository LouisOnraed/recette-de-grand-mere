const apiKey = "aaa70a90a605a14bf4ff3af2d4d6bc39";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=41.89&lon=12.49&appid=aaa70a90a605a14bf4ff3af2d4d6bc39";

async function weather() {
    const response = await fetch(apiURL);
    if (response.ok == false) {
        console.log('Error Weather');
    }
    else {
        const data = await response.json();
        console.log(Math.round(data.main.temp) + "°C")
        document.getElementById("weatherInfo").innerText = Math.round(data.main.temp) + "°C"
    }
}
weather()