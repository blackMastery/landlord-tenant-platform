import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { VendorPortalCard } from "@/components/sections/vendor-portal-card";

export function VendorDashboard({
  jobs,
  notes,
}: {
  jobs: Array<{
    id: string;
    property: string;
    unit: string;
    tenant: string;
    issue: string;
    status: string;
  }>;
  notes: Array<{ note: string; time: string }>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Vendor Dashboard</h2>
        <p className="text-sm text-muted-foreground">
          Manage work orders, update progress, and share completion notes.
        </p>
      </div>
      <VendorPortalCard jobs={jobs} notes={notes} />
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Service Level Targets</CardTitle>
          <CardDescription>Response time commitments.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Emergency</p>
            <p className="text-lg font-semibold">2 hours</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">High priority</p>
            <p className="text-lg font-semibold">6 hours</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Standard</p>
            <p className="text-lg font-semibold">24 hours</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
