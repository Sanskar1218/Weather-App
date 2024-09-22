const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    getWeather(city);
});

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    if (response.ok) {
        const data = await response.json();
        displayWeather(data);
    } else {
        document.getElementById('weatherResult').innerText = 'City not found. Please try again.';
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const weatherResult = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherResult;
}
