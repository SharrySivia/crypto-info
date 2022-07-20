const API_URL = "https://cryptoinfbackend.herokuapp.com";

async function login(userInfo) {
  try {
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
      return { user: data.user, watchlist: data.watchlist, err: null };
    }
  } catch (error) {
    return { user: null, err: "Something went wrong! Sorry." };
  }
}

async function signup(userInfo) {
  try {
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
  } catch (error) {
    return { user: null, err: "Something went wrong! Sorry." };
  }
}

async function updateWatchlist({ userId, watchlist }) {
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

export { login, signup, updateWatchlist };
