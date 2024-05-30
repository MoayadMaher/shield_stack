"use client";

import { useState } from "react";
import scan from "../api/scanning";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import Loading from "@/app/components/loading";
import NmapResults from "@/app/components/nmapResults";

export default function Page() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const placeholders = [
    "Enter a URL to scan the open ports",
    "Did you miss any open ports?",
    "the fastes way to scan the ports",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setData("");
      document.getElementById("drawer-trigger")?.click();
      const fetchedData = await scan(url, "nmap");
      setData(fetchedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <>
      <div className="flex">
        <main className="flex min-h-screen flex-col items-center justify-center  text-white">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-black dark:text-white">
              Nmap scan{" "}
              <span className="text-3xl">
                (find out the open ports on a server)
              </span>
            </h1>
            <div className="w-full">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
            <Drawer>
              <DrawerTrigger asChild>
                <Button id="drawer-trigger" className="hidden">
                  Open Drawer
                </Button>
              </DrawerTrigger>
              <DrawerContent className="p-3">
                <div className="flex flex-col gap-8">
                  {data ? (
                    data.error ? (
                      <>
                        <DrawerHeader className="flex justify-center p-11">
                          <DrawerTitle className="text-2xl">
                            Are sure about the target you entered try agine
                            plase?
                          </DrawerTitle>
                          <DrawerClose />
                        </DrawerHeader>
                      </>
                    ) : (
                      <>
                        <DrawerHeader>
                          <DrawerTitle className="text-2xl">
                            Nmap Scan Results
                          </DrawerTitle>
                          <DrawerClose />
                        </DrawerHeader>
                        <NmapResults data={data} />
                      </>
                    )
                  ) : (
                    <Loading process="nmap scan" />
                  )}
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </main>
      </div>
    </>
  );
}
