import { notFound } from "next/navigation";
import { ManagerShell } from "@/components/layout/manager-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStatusClass } from "@/lib/status";
import { findUnit } from "@/lib/record-helpers";

export default async function UnitDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const unit = findUnit(id);
  if (!unit) return notFound();

  return (
    <ManagerShell activeSection="Units">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Units", href: "/manager/units" },
          { label: unit.unit },
        ]}
      />
      <section className="space-y-6">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Unit {unit.unit}</CardTitle>
            <CardDescription>{unit.property}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <Badge className={getStatusClass(unit.status)}>{unit.status}</Badge>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Tenant</p>
              <p className="text-lg font-semibold">{unit.tenant}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Monthly Rent</p>
              <p className="text-lg font-semibold">${unit.rent.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Security Deposit</p>
              <p className="text-lg font-semibold">${unit.deposit.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Lease Start</p>
              <p className="text-sm">{unit.leaseStart}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Lease End</p>
              <p className="text-sm">{unit.leaseEnd}</p>
            </div>
          </CardContent>
        </Card>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline">View Tenant Profile</Button>
          <Button>Message Tenant</Button>
          <Button variant="outline">View Payment History</Button>
          <Button variant="outline">Maintenance Requests</Button>
        </div>
      </section>
    </ManagerShell>
  );
}
