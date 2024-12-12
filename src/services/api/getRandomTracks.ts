import { getToken } from "./getToken";

export const getRandomTracks = async (
  offset: number,
  limit: number,
  query: string
) => {
  const token = await getToken();
  const url = `https://api.spotify.com/v1/search?offset=${offset}&limit=${limit}&query=${query}&type=track`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching tracks:", error);
    throw error;
  }
};
