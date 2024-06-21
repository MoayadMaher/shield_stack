import { useState, ChangeEvent, FormEvent, useRef } from "react";
import useUploadImage from "@/hooks/useUploadImage";
import hideTextInImage from "@/utils/steganographyApi";
import { saveAs } from "file-saver";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MultiStepLoader } from "./ui/multi-step-loader";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { useToast } from "./ui/use-toast";

export default function HideForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loadingState, setLoadingState] = useState(false);
  const [result, setResult] = useState<string>("");
  const { uploadImage, url, isLoading, error } = useUploadImage();
  const formRef = useRef<HTMLFormElement>(null);

  const { toast } = useToast();

  const loadingStates = [
    { text: "Starting to hide the text in your image ..." },
    { text: "Your image is ready" },
  ];

  const downloadImage = () => {
    if (!result) return;
    saveAs(result, "image.png");
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file || !url) {
      toast({
        variant: "destructive",
        title: "complete the form",
        description: "Please upload an image and type a message.",
      });
      return;
    }
    const text = (e.target as HTMLFormElement)["text-to-hide"].value;
    setLoadingState(true);
    try {
      const stegoImageUrl = await hideTextInImage(url, text);
      setResult(stegoImageUrl);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to process the image. Please try again.",
        description: "Please try again.",
      });
      console.error("Error during file processing", error);
    } finally {
      setLoadingState(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "image/png") {
      setFile(file);
      uploadImage(file);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file format",
        description: "Please upload a PNG file.",
      });
    }
  };

  const handleDeleteImage = () => {
    setFile(null);
  };

  return (
    <Card className="dark:bg-black dark:text-white">
      <CardHeader>
        <CardTitle>Hide a text</CardTitle>
        <CardDescription>
          Hide your text in an image and download it
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {loadingState ? (
          <MultiStepLoader
            loading={loadingState || !isLoading}
            loadingStates={loadingStates}
            loop={false}
          />
        ) : result ? (
          <div className="relative flex h-auto items-center justify-center">
            <DirectionAwareHover imageUrl={result}>
              <Button onClick={downloadImage}>Download Image</Button>
            </DirectionAwareHover>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} ref={formRef}>
            <div className="space-y-1">
              <div>
                <label
                  htmlFor="file"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  File
                </label>
                {file ? (
                  <div className="relative mx-auto mt-2 flex w-full max-w-lg justify-center">
                    <img src={URL.createObjectURL(file)} alt="uploaded file" />
                    <button
                      type="button"
                      onClick={handleDeleteImage}
                      className="absolute right-2 top-2 rounded-bl-sm bg-gray-600 p-2 text-white"
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <label
                    htmlFor="dropzone-file"
                    className="mx-auto mt-2 flex w-full max-w-lg cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-5 text-center dark:border-gray-700 dark:bg-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-8 w-8 text-gray-500 dark:text-gray-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                    <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">
                      Image File
                    </h2>
                    <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">
                      Upload or drag & drop your file. Only PNG.
                    </p>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <Label htmlFor="text-to-hide">Text to be hidden</Label>
              <Textarea
                id="text-to-hide"
                placeholder="Type your message here."
                required
              />
            </div>
            <div className="flex w-full justify-end">
              <Button
                className="mt-3 dark:bg-white dark:text-black dark:hover:bg-slate-500"
                disabled={isLoading}
              >
                {" "}
                {isLoading ? "Image is uploading..." : "Start the magic"}
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}
