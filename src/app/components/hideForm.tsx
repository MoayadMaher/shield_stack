import { useState, ChangeEvent, FormEvent } from "react";
import useUploadImage from "@/hooks/useUploadImage";
import hideTextInImage from "@/utils/steganographyApi";

export default function HideForm() {
  const { uploadImage, url, isLoading, error } = useUploadImage();
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!url) {
      alert("Please wait for the image to upload or check for errors.");
      return;
    }
    if (!text) {
      alert("Please enter some text to hide.");
      return;
    }
    try {
      const stegoImageUrl = await hideTextInImage(url, text);
      setResult(stegoImageUrl);
    } catch (error) {
      alert("Failed to process the image. Please try again.");
    }
  };

  return (
    <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
      <div>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
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
            Only PNG and TIFF files are supported.
          </p>
          <label
            className="mt-4 block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="text_input"
          >
            Text to hide
          </label>
          <textarea
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
            id="text_input"
            value={text}
            onChange={handleTextChange}
            required
          />
          <button
            type="submit"
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            disabled={isLoading}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="mt-4">
        <h2>Results</h2>
        {result ? (
          <div>
            <img src={result} alt="Steganographic Result" />
          </div>
        ) : (
          "No result yet."
        )}
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  );
}
