const LOGIN_API_URL = "/api/login";

export async function loginPostRequest(username: string, password: string) {
  const response = await fetch(LOGIN_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  return response.status;
}
