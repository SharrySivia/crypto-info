const API_URL = "http://localhost:5000";

async function login(userInfo) {
  const result = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const data = await result.json();

  if (result.status !== 200) {
    return { user: null, err: data.message };
  } else {
    return { user: data, err: null };
  }
}

async function signup(userInfo) {
  const result = await fetch(`${API_URL}/user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const data = await result.json();

  if (result.status !== 200) {
    return { user: null, err: data.message };
  } else {
    return { user: data, err: null };
  }
}

async function addToWatchlist({ userId, watchlist }) {
  const result = await fetch(`${API_URL}/watchlist`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId, watchlist }),
  });

  const data = await result.json();

  if (result.status !== 200) {
    return { watchlist: null, err: data.message };
  } else {
    return { watchlist: data.watchlist, err: null };
  }
}

async function updateWatchlist({ userId, updatedWatchlist }) {
  const result = await fetch(`${API_URL}/watchlist`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ userId, updatedWatchlist }),
  });

  const data = await result.json();

  if (result.status !== 200) {
    return { watchlist: null, err: data.message };
  } else {
    return { watchlist: data.watchlist, err: null };
  }
}

export { login, signup, addToWatchlist, updateWatchlist };
