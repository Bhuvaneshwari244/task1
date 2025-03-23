async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "OpenWeatherMap"; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weatherResult").innerHTML = `
            <p>City: ${data.name}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "<p>City not found</p>";
    }
}
