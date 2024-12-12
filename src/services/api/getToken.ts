import { config } from "../../utils/getConfig";

export const getToken = async () => {
  const token = localStorage.getItem("token");
  const tokenExpires = localStorage.getItem("token_expires");

  if (token && tokenExpires && Date.now() < Number(tokenExpires)) {
    return token;
  }

  return fetchToken();
};

const fetchToken = async () => {
  const { client_id, client_secret } = config;
  const url = "https://accounts.spotify.com/api/token";
  const data = `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    localStorage.setItem("token", result.access_token);
    localStorage.setItem(
      "token_expires",
      String(Date.now() + result.expires_in * 1000)
    );

    return result.access_token;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};
