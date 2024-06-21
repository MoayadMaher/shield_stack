import { error } from "console";

export default async function analyzer(url: string) {
  const apiBaseURL =
    "https://humble-headers-analyzer-production.up.railway.app/";

  try {
    const response = await fetch(`${apiBaseURL}?url=${url}`);

    if (!response.ok) {
      console.error(`API request failed with status ${response.status}`);
      return {
        error: `API request failed with status ${response.status}`,
      };
    }

    try {
      const data = await response.json();
      return data;
    } catch (jsonError) {
      console.error("Error parsing JSON:", jsonError);
      return {
        error: "failed to parse JSON",
      };
    }
  } catch (err) {
    console.error(err);
    return {
      error: "failed to fetch data",
    };
  }
}
