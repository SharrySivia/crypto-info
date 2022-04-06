const COIN_API_URL = "https://api.coingecko.com/api/v3/coins";

async function getAllCoindata() {
  const result = await fetch(
    `${COIN_API_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false`
  );

  const data = await result.json();

  return data;
}

async function getCoinData(coin) {
  const result = await fetch(
    `${COIN_API_URL}/${coin}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
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

export { getAllCoindata, searchCoindata, subscribeToWSCoinData, getCoinData };
