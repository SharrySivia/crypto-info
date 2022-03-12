async function getAllCoindata() {
  const result = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false"
  );

  const data = await result.json();

  return data;
}

async function searchCoindata(text) {
  const result = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${text}`
  );

  const data = await result.json();

  return data;
}

function subscribeToWSCoinData(assets) {
  const conn = new WebSocket(`wss://ws.coincap.io/prices?assets=${assets}`);
  return conn;
}

export { getAllCoindata, searchCoindata, subscribeToWSCoinData };
