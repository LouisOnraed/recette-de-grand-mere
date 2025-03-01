const API_KEY = 'aaa70a90a605a14bf4ff3af2d4d6bc39';
const LAT = 41.9028; // Latitude de Rome
const LON = 12.4964; // Longitude de Rome
const URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${LAT}&lon=${LON}&units=metric&exclude=minutely,hourly,daily,alerts&appid=${API_KEY}`;

async function getWeather() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des données météo");
        }
        const data = await response.json();
        const temperature = data.current.temp;
        console.log(`La température actuelle à Rome est de ${temperature}°C`);
    } catch (error) {
        console.error("Erreur :", error);
    }
}

getWeather();
