import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardWidgets } from "@/components/layout/dashboard-widgets";
import { OwnerPortalCard } from "@/components/sections/owner-portal-card";

export function OwnerDashboard({
  metrics,
  widgets,
  profitSummary,
}: {
  metrics: Array<{ label: string; value: string; change: string }>;
  widgets: Array<{ label: string; value: string | number; helper: string }>;
  profitSummary: Array<{
    property: string;
    income: number;
    expenses: number;
    net: number;
  }>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Owner Dashboard</h2>
        <p className="text-sm text-muted-foreground">
          Monitor property performance without daily operational tasks.
        </p>
      </div>
      <DashboardWidgets metrics={widgets} />
      <OwnerPortalCard metrics={metrics} profitSummary={profitSummary} />
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Capital Planning</CardTitle>
          <CardDescription>Upcoming investments and projections.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Roof replacement</p>
            <p className="text-lg font-semibold">$42,000</p>
            <p className="text-xs text-muted-foreground">Planned Q3</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Elevator modernization</p>
            <p className="text-lg font-semibold">$18,600</p>
            <p className="text-xs text-muted-foreground">Planned Q2</p>
          </div>
          <div className="rounded-xl border p-3">
            <p className="text-xs text-muted-foreground">Unit refresh</p>
            <p className="text-lg font-semibold">$7,900</p>
            <p className="text-xs text-muted-foreground">Rolling</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
