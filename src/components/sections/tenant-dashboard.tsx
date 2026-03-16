import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TenantPortalCard } from "@/components/sections/tenant-portal-card";

export function TenantDashboard({
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
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Tenant Dashboard</h2>
        <p className="text-sm text-muted-foreground">
          View rent status, submit maintenance, and reach your manager.
        </p>
      </div>
      <TenantPortalCard tenant={tenant} />
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Last three payments.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Mar 1 - $2,150", "Feb 1 - $2,150", "Jan 1 - $2,150"].map(
              (row) => (
                <div key={row} className="rounded-xl border p-3">
                  <p className="text-sm font-medium">{row}</p>
                </div>
              )
            )}
          </CardContent>
        </Card>
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Messages</CardTitle>
            <CardDescription>Recent conversation with your manager.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-xl border p-3">
              <p className="text-sm font-semibold">Ariana Hale</p>
              <p className="text-xs text-muted-foreground">
                Maintenance tech scheduled for today 2-4 PM.
              </p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="text-sm font-semibold">You</p>
              <p className="text-xs text-muted-foreground">
                Thank you! I will be available.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
