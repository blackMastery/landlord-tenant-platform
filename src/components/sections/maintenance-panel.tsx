import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
import { getStatusClass } from "@/lib/status";

export function MaintenancePanel({
  tickets,
}: {
  tickets: Array<{
    id: string;
    unit: string;
    issue: string;
    priority: string;
    status: string;
    vendor: string;
  }>;
}) {
  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle>Open Tickets</CardTitle>
        <CardDescription>Pending and in-progress requests.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {/* Mobile card view */}
        <div className="sm:hidden divide-y">
          {tickets.map((ticket) => (
            <div key={`${ticket.id}-m`} className="flex flex-col gap-1.5 p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium">{ticket.id.toUpperCase()} · {ticket.unit}</span>
                <Badge className={getStatusClass(ticket.status)}>{ticket.status}</Badge>
              </div>
              <div className="text-muted-foreground">{ticket.issue}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{ticket.priority} · {ticket.vendor}</span>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/manager/maintenance/${ticket.id}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block w-full overflow-x-auto">
          <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ticket</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vendor</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="font-medium">
                  {ticket.id.toUpperCase()}
                </TableCell>
                <TableCell>{ticket.unit}</TableCell>
                <TableCell>{ticket.issue}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>
                  <Badge className={getStatusClass(ticket.status)}>
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell>{ticket.vendor}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/manager/maintenance/${ticket.id}`}>View</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
