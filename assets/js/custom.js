async function getWeather() {
    const apiKey = '10c58211c14655aeb0c5f1f100763d92'; // Replace with your actual OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            document.getElementById('weatherInfo').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
    }
}

function displayWeather(data) {
    document.getElementById('weatherInfo').innerHTML = `
<h2>Weather in ${data.name}, ${data.sys.country}</h2>
<p>Temperature: ${data.main.temp}°C</p>
<p>Feels like: ${data.main.feels_like}°C</p>
<p>Weather: ${data.weather[0].description}</p>
<p>Humidity: ${data.main.humidity}%</p>
<p>Wind speed: ${data.wind.speed} m/s</p>
`;
}
