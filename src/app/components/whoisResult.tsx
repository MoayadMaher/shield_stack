import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function WhoisResults({ data }: { data: any }) {
  return (
    <div className="max-h-96 overflow-auto p-4 text-lg text-white">
      <h4 className="mb-4 text-2xl font-medium leading-none">
        Domain information
      </h4>
      {Object.entries(data).map(([key, value]: any) => (
        <>
          <div key={key}>
            {key}: {value}
          </div>
          <Separator className="my-2" />
        </>
      ))}
    </div>
  );
}
