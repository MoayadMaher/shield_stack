"use client";

import { useState } from "react";
import analyzer from "./api/analyzer";

export default function AnalyzePage() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const Data = await analyzer(url);
      setData(Data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          "No data fetched yet."
        )}
      </div>
    </div>
  );
}
