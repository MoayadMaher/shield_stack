import { useState } from "react";

const useUploadImage = () => {
  const [url, setUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const uploadImage = async (file: File) => {
    setIsLoading(true);
    setError("");
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: reader.result }),
        });

        const responseJson = await res.json();
        if (responseJson.url) {
          setUrl(responseJson.url);
        } else {
          throw new Error("Failed to upload image.");
        }
      } catch (error) {
        console.error("Upload failed:", error);
        setError("Upload failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
  };

  return { uploadImage, url, isLoading, error };
};

export default useUploadImage;
