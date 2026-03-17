import { OwnerShell } from "@/components/layout/owner-shell";
import { FinancialCharts } from "@/components/sections/financial-charts";
import { monthlyFinancials } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

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
          <h2 className="text-2xl font-semibold">Financial Reports</h2>
          <p className="text-sm text-muted-foreground">
            Revenue, expenses, NOI, and occupancy performance.
          </p>
        </div>

        <FinancialCharts data={monthlyFinancials} />

        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Download Center</CardTitle>
            <CardDescription>Statements and tax-ready exports.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Monthly income statement", updated: "Updated Mar 12" },
              { label: "Maintenance expense ledger", updated: "Updated Mar 12" },
              { label: "Occupancy trend report", updated: "Updated Mar 12" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border p-3 flex flex-col gap-1 hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <p className="text-sm font-semibold">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.updated}</p>
                <p className="text-xs text-blue-600 mt-1">↓ Download PDF</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </OwnerShell>
  );
}
