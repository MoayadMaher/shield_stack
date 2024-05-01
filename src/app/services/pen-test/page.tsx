"use client";

import { useState } from "react";
import scan from "./api/scanning";

export default function Page() {
  const [data, setData] = useState(null);
  const [target, setTarget] = useState<string>("");
  const [scanType, setScanType] = useState<string>("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const fetchedData = await scan(target, scanType);
      setData(fetchedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white ">
            Penetration testing Services
          </h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                className="m-1 rounded-md border border-gray-300 bg-white p-1 text-black"
                name="target"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
              <button className="rounded-md bg-blue-500 p-1.5 text-white hover:bg-blue-600">
                Submit
              </button>
            </div>

            <div className="">
              <input
                type="radio"
                name="scanType"
                value="nmap"
                id="nmap"
                onChange={(e) => setScanType(e.target.value)}
                checked={scanType === "nmap"}
                required
              />
              <label htmlFor="nmap" className="m-1.5 p-3">
                NMAP
              </label>
              <input
                type="radio"
                name="scanType"
                value="whois"
                id="whois"
                onChange={(e) => setScanType(e.target.value)}
                checked={scanType === "whois"}
              />
              <label htmlFor="whois" className="m-1.5 p-3">
                WhoIs
              </label>
              <input
                type="radio"
                name="scanType"
                value="dirserch"
                id="dirserch"
                onChange={(e) => setScanType(e.target.value)}
                checked={scanType === "dirserch"}
              />
              <label htmlFor="dirserch" className="m-1.5 p-3">
                Dirserch
              </label>
            </div>
          </form>

          <div className="container flex flex-col items-center justify-center  ">
            <h2>Results</h2>
            <p>
              {data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : (
                "No data fetched yet."
              )}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
