"use client";

import { useState } from "react";
import analyzer from "./api/analyzer";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Loading from "@/app/components/loading";
import { useToast } from "@/app/components/ui/use-toast";

export default function AnalyzePage() {
  const [url, setUrl] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const { toast } = useToast();

  const placeholders = [
    "Enter a URL to analyze",
    "What's the missing headers?",
    "Are you sure you're using the right headers?",
    "How about the security headers?",
    "Do you have SSL enabled?",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setData("");
      document.getElementById("drawer-trigger")?.click();
      const fetchedData = await analyzer(url);
      if (fetchedData.error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: fetchedData.error,
        });
        document.getElementById("drawer-trigger")?.click();
        return;
      }
      setData(fetchedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  return (
    <>
      <div className="container ">
        <h1 className="text-dark flex justify-center p-12 text-6xl font-bold dark:text-white">
          HTTP Header Analyzer
        </h1>
        <div className="w-full">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <Button id="drawer-trigger" className="hidden">
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerContent className="p-2">
          <DrawerHeader>
            <DrawerTitle>
              HTTP Header Analysis Results for{" "}
              <a href={`https://www.${url}`}>{url}</a>
            </DrawerTitle>
            <DrawerClose />
          </DrawerHeader>
          <div className="flex justify-center p-3 text-black dark:text-white">
            {data ? (
              <div>
                <div className="mt-8 grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold ">
                      Missing HTTP Security Headers
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Header</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data["[1. Missing HTTP Security Headers]"].map(
                          (header: string, index: number) => (
                            <TableRow key={index}>
                              <TableCell>{header}</TableCell>
                            </TableRow>
                          ),
                        )}
                      </TableBody>
                    </Table>

                    <h3 className="mb-2 mt-8 text-xl font-semibold ">
                      Empty HTTP Response Headers Values
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Header Value</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            {data["[4. Empty HTTP Response Headers Values]"][0]}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold ">
                      Fingerprint HTTP Response Headers
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Header</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data["[2. Fingerprint HTTP Response Headers]"].map(
                          (header: string, index: number) => (
                            <TableRow key={index}>
                              <TableCell>{header}</TableCell>
                            </TableRow>
                          ),
                        )}
                      </TableBody>
                    </Table>

                    <h3 className="mb-2 mt-8 text-xl font-semibold ">
                      Deprecated HTTP Response Headers/Protocols and Insecure
                      Values
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Header/Protocol</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data[
                          "[3. Deprecated HTTP Response Headers/Protocols and Insecure Values]"
                        ].map((header: string, index: number) => (
                          <TableRow key={index}>
                            <TableCell>{header}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            ) : (
              <Loading process="header analysis" />
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
