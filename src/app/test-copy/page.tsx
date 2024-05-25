"use client";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import analyzer from "../services/header-analyzer/api/analyzer";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

export default function DrawerDemo() {
  const [data, setData] = useState(null);
  async function init() {
    const fetchedData = await analyzer("google.com");
    setData(fetchedData || "no data");

    console.log("fetchedData", fetchedData);
  }

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter dark:text-white">
                    test here
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground dark:text-white">
                    your response is {data}
                  </div>
                </div>
              </div>
              <div className="mt-3 h-[120px]"></div>
            </div>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// "use client";

// export default function Page() {
//   return (
//     <>

//     </>
//   );
// }
