"use client";

import { useState } from "react";
import scan from "../api/scanning";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

import { Button } from "@/components/ui/button";
import Loading from "@/app/components/loading";
import NmapResults from "@/app/components/nmapResults";
import { useToast } from "@/app/components/ui/use-toast";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Page() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const { toast } = useToast();

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
      document.getElementById("modal-trigger")?.click();
      const fetchedData = await scan(url, "nmap");
      console.log(fetchedData);
      if (fetchedData.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: fetchedData.error,
        });
        document.getElementById("modal-trigger")?.click();
        return;
      }

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

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" id="modal-trigger" className="hidden">
                  Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="flex flex-col gap-8">
                  {data ? (
                    data.error ? (
                      <>
                        <DialogHeader className="mt-1 flex justify-center">
                          <DialogTitle className="text-2xl">
                            Are sure about the target you entered try agine
                            plase?
                          </DialogTitle>
                        </DialogHeader>
                      </>
                    ) : (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-white">
                            Nmap Scan Results
                          </DialogTitle>
                        </DialogHeader>
                        <NmapResults data={data} />
                      </>
                    )
                  ) : (
                    <Loading process="nmap scan" />
                  )}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </main>
      </div>
    </>
  );
}
