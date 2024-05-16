"use client";
import useUploadImage from "@/hooks/useUploadImage";
import { extractTextFromImage } from "@/utils/steganographyApi";
import { useState, ChangeEvent } from "react";

export default function ExtractForm() {
  const { uploadImage, url, isLoading, error } = useUploadImage();
  const [result, setResult] = useState<string>("");

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        await uploadImage(file);
      } catch (error) {
        console.error("Failed to upload image:", error);
        alert("Failed to upload image. Please try again.");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!url) {
      alert("Please wait for the image to upload or check for errors.");
      return;
    }
    try {
      const extractedText = await extractTextFromImage(url);
      console.log("extractedText", extractedText);
      setResult(extractedText.extract_text);
    } catch (error) {
      console.error("Failed to extract text:", error);
      alert("Failed to extract text. Please try again.");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
      <div>
        Here is were magic happens Upload your image and see the magic hededn
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={handleFileChange}
            disabled={isLoading}
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            only PNG and TIFF files are supported
          </p>
          <button
            className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
            type="submit"
            disabled={isLoading}
          >
            3 2 1 Extract
          </button>
        </form>
        {isLoading && <p>upload is Loading...</p>}
        {result ? (
          <div>
            <h2>Extracted text</h2>
            <p>{result}</p>
          </div>
        ) : (
          "no text extracted"
        )}
      </div>
    </div>
  );
}
