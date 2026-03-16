import { notFound } from "next/navigation";
import { ManagerShell } from "@/components/layout/manager-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStatusClass } from "@/lib/status";
import { findTicket } from "@/lib/record-helpers";

export default async function MaintenanceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ticket = findTicket(id);
  if (!ticket) return notFound();

  return (
    <ManagerShell activeSection="Maintenance">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Maintenance", href: "/manager/maintenance" },
          { label: ticket.id.toUpperCase() },
        ]}
      />
      <section className="space-y-6">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Work Order {ticket.id.toUpperCase()}</CardTitle>
            <CardDescription>
              {ticket.property} - {ticket.unit} - {ticket.tenant}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Issue</p>
              <p className="text-sm">{ticket.issue}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Priority</p>
              <p className="text-sm">{ticket.priority}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <Badge className={getStatusClass(ticket.status)}>
                {ticket.status}
              </Badge>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Assigned Vendor</p>
              <p className="text-sm">{ticket.vendor}</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </ManagerShell>
  );
}
