// script-weather.js
async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "06bba629fa20cb6ecda05a946534f60a"; // Replace with your key
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  const temps = data.list.slice(0, 6).map(item => item.main.temp);
  const labels = data.list.slice(0, 6).map(item => item.dt_txt);

  const ctx = document.getElementById("weatherChart").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Temperature (°C)',
        data: temps,
        backgroundColor: 'rgba(0, 123, 255, 0.5)'
      }]
    }
  });
}
