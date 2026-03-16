import { OwnerShell } from "@/components/layout/owner-shell";
import { OwnerPortalCard } from "@/components/sections/owner-portal-card";
import { ownerMetrics, profitSummary } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function OwnerReportsPage() {
  return (
    <OwnerShell activeSection="Reports">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Owner", href: "/owner" },
          { label: "Reports" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Owner Reports</h2>
          <p className="text-sm text-muted-foreground">
            Profit summaries, income statements, and occupancy performance.
          </p>
        </div>
        <Input placeholder="Search reports" className="w-full sm:w-64" />
        <OwnerPortalCard metrics={ownerMetrics} profitSummary={profitSummary} />
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Download Center</CardTitle>
            <CardDescription>Statements and tax-ready exports.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {[
              "Monthly income statement",
              "Maintenance expense ledger",
              "Occupancy trend report",
            ].map((label) => (
              <div key={label} className="rounded-xl border p-3">
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground">
                  Updated March 12
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </OwnerShell>
  );
}
