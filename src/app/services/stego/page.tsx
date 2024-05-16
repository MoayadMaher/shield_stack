"use client";

import { useState } from "react";
import HideForm from "../../components/hideForm";
import ExtractForm from "@/app/components/extractForm";

export default function Page() {
  const [oppreation, setOperation] = useState<string>("hide");

  const Form = () => {
    if (oppreation === "hide") {
      return <HideForm />;
    } else {
      return <ExtractForm />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white ">
          Steganography Service
        </h1>
        <div className="p-3">
          <label htmlFor="hide">Hide</label>
          <input
            type="radio"
            id="hide"
            name="operation"
            value="hide"
            onChange={(e) => setOperation(e.target.value)}
            className="mL-2"
            defaultChecked
          />
          <label htmlFor="extract">Extract</label>
          <input
            type="radio"
            id="extract"
            name="operation"
            value="extract"
            onChange={(e) => setOperation(e.target.value)}
            className="ml-2"
          />
        </div>
        {Form()}
        <div className="container flex flex-col items-center justify-center  "></div>
      </div>
    </main>
  );
}
