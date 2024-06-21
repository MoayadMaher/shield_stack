import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function NmapResults({ data }: { data: any }) {
  return (
    <div className=" p-3 text-black dark:text-white ">
      <h2 className="text-2xl font-semibold">Host Information</h2>
      <p className="ml-4 mt-4 text-xl">
        <strong>Address:</strong> {data.hostInfo.address}
      </p>
      <p className="ml-4 mt-1 text-xl">
        <strong>Hostnames:</strong> {data.hostInfo.hostnames.join(", ")}
      </p>

      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow className="text-2xl">
              <TableHead>Port</TableHead>
              <TableHead>Protocol</TableHead>
              <TableHead>State</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Version</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-xl">
            {data.openPorts.map((port: any, index: number) => (
              <TableRow key={index}>
                <TableCell>{port.id}</TableCell>
                <TableCell>{port.protocol}</TableCell>
                <TableCell>{port.state}</TableCell>
                <TableCell>{port.service}</TableCell>
                <TableCell>{port.serviceDetails.product}</TableCell>
                <TableCell>{port.serviceDetails.version}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
