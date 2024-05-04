"use client";

import { useState } from "react";
import analyzer from "./api/analyzer";

export default function AnalyzePage() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const fetchedData = await analyzer(url);
      setData(fetchedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          Penetration testing Services
        </h1>
        <div className="p-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="m-1 rounded-md border border-gray-300 bg-white p-1 text-black"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-md bg-blue-500 p-1.5 text-white hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <div>
            {data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : (
              "No data fetched yet."
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
