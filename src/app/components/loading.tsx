import { Vortex } from "./ui/vortex";

import React from "react";

interface LoadingProps {
  process: string;
}

export default function Loading({ process }: LoadingProps) {
  return (
    <div className="mx-auto h-[40rem] w-[calc(100%-4rem)] overflow-hidden rounded-md">
      <Vortex
        backgroundColor="black"
        className="flex h-full w-full flex-col items-center justify-center px-2 py-4 md:px-10"
      >
        <h2 className="text-center text-2xl font-bold text-white md:text-6xl">
          Your {process} is in progress
        </h2>
        <p className="mt-6 max-w-xl text-center text-sm text-white md:text-2xl">
          This may take a few seconds
        </p>
      </Vortex>
    </div>
  );
}
