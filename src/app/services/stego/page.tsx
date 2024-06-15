"use client";

import HideForm from "@/app/components/hideForm";
import ExtractForm from "@/app/components/extractForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white">
          Steganography Service
        </h1>
        <Tabs defaultValue="Hide" className="w-full">
          <TabsList className="grid w-full grid-cols-2 dark:bg-black">
            <TabsTrigger value="Hide">Hide</TabsTrigger>
            <TabsTrigger value="Extract">Extract</TabsTrigger>
          </TabsList>
          <TabsContent value="Hide">
            <HideForm />
          </TabsContent>
          <TabsContent value="Extract">
            <ExtractForm />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
