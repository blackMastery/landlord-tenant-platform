import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { getStatusClass } from "@/lib/status";

export function TenantPortalCard({
  tenant,
}: {
  tenant: {
    name: string;
    unit: string;
    property: string;
    rent: number;
    status: string;
    nextDue: string;
    autopay: string;
    leaseEnd: string;
  };
}) {
  return (
    <Card className="bg-white/90">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Tenant Portal</CardTitle>
          <CardDescription>Self-service payments and maintenance.</CardDescription>
        </div>
        <Badge className={getStatusClass(tenant.status)}>{tenant.status}</Badge>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Current Tenant</p>
          <p className="text-lg font-semibold">{tenant.name}</p>
          <p className="text-sm">
            {tenant.property} - {tenant.unit}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Monthly Rent</p>
            <p className="font-semibold">${tenant.rent.toLocaleString()}</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Next Due</p>
            <p className="font-semibold">{tenant.nextDue}</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Lease Ends</p>
            <p className="font-semibold">{tenant.leaseEnd}</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Auto Pay</p>
            <p className="font-semibold">{tenant.autopay}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button>Make Payment</Button>
          <Button variant="outline">Message Manager</Button>
        </div>
        <Separator />
        <div className="space-y-3">
          <p className="text-sm font-semibold">Submit Maintenance Request</p>
          <Input placeholder="Issue title" />
          <Textarea rows={3} placeholder="Describe the issue" />
          <div className="flex flex-wrap gap-2">
            <Button>Submit Request</Button>
            <Button variant="ghost">Upload Photos</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
