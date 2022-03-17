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

export { login };
