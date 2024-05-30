import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function WhoisResults({ data }: { data: any }) {
  return (
    <ScrollArea className="h-80 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">
          Domain information
        </h4>
        {Object.entries(data).map(([key, value]: any) => (
          <>
            <div key={key} className="text-sm">
              {key}: {value}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
