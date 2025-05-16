async function fetchCryptoData() {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  const data = await response.json();
  displayCrypto(data);
}

function displayCrypto(coins) {
  const table = document.getElementById("cryptoTable");
  table.innerHTML = "";

  const search = document.getElementById("searchInput").value.toLowerCase();

  coins
    .filter(coin => coin.name.toLowerCase().includes(search))
    .forEach(coin => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${coin.name}</td>
        <td>${coin.symbol.toUpperCase()}</td>
        <td>$${coin.current_price}</td>
        <td style="color:${coin.price_change_percentage_24h >= 0 ? 'green' : 'red'};">
          ${coin.price_change_percentage_24h.toFixed(2)}%
        </td>
      `;
      table.appendChild(row);
    });
}

document.getElementById("searchInput").addEventListener("input", fetchCryptoData);
window.onload = fetchCryptoData;
