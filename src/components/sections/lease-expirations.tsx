import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function LeaseExpirations({
  leases,
}: {
  leases: Array<{ tenant: string; unit: string; property: string; leaseEnd: string }>;
}) {
  return (
    <Card className="bg-white/90">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Upcoming Lease Expirations</CardTitle>
          <CardDescription>Renewals within 90 days.</CardDescription>
        </div>
        <Button variant="ghost" size="sm">
          Manage Leases
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Lease End</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leases.map((lease) => (
              <TableRow key={`${lease.unit}-${lease.tenant}`}>
                <TableCell className="font-medium">{lease.tenant}</TableCell>
                <TableCell>{lease.unit}</TableCell>
                <TableCell>{lease.property}</TableCell>
                <TableCell>{lease.leaseEnd}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
