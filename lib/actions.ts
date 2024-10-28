interface SpotifyClientCredentials {
  clientID: string;
  clientSecret: string;
}

export const getSpotifyBearerToken = ({
  clientID,
  clientSecret,
}: SpotifyClientCredentials): string => {
  console.log(clientID);
  console.log(clientSecret);

  return "";
};

export const getAuthToken = async () => {
  const details = {
    grant_type: "client_credentials",
    client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
    client_secret: process.env.SPOTIFY_CLIENT_SECRET ?? "",
  };

  const formBody = new URLSearchParams(details);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
    },
    body: formBody,
  }).then((resp) => {
    if (resp.status != 200) {
      throw new Error("Couldn't authenticate with spotify");
    }
    return resp;
  });

  return response.json();
};

const API_ENDPOINT = process.env.API_URL!;

export default async function handleSendEmail(data: {
  username: string;
  email: string;
  message: string;
}): Promise<{ data?: unknown; message?: string; error?: string }> {
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
