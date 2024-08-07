import { STEGO_API } from "@/config/*";

export default async function hideTextInImage(imageUrl: string, text: string) {
  try {
    const response = await fetch(
      `${STEGO_API}/hide-text/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: imageUrl, text }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result.stego_image_url;
  } catch (error) {
    console.error("Error processing steganography:", error);
    throw error;
  }
}

export async function extractTextFromImage(imageUrl: string) {
  try {
    const response = await fetch(
      `${STEGO_API}/extract-text/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_url: imageUrl }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error processing steganography:", error);
  }
}
