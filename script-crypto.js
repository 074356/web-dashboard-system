// script-crypto.js
async function loadCryptoData() {
  const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7");
  const data = await res.json();
  const prices = data.prices.map(item => item[1]);
  const labels = data.prices.map(item => new Date(item[0]).toLocaleDateString());

  const ctx = document.getElementById("cryptoChart").getContext("2d");
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'BTC Price (USD)',
        data: prices,
        borderColor: 'green',
        fill: false
      }]
    }
  });
}
loadCryptoData();
