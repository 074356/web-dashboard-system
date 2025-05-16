async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "06bba629fa20cb6ecda05a946534f60a"; // Replace with your key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weatherResult").innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      `;
    } else {
      document.getElementById("weatherResult").innerText = "City not found.";
    }
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weatherResult").innerText = "Failed to load weather data.";
  }
}
