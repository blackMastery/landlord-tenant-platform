import { TenantShell } from "@/components/layout/tenant-shell";
import { tenantSnapshot } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function TenantPaymentsPage() {
  return (
    <TenantShell activeSection="Payments">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tenant", href: "/tenant" },
          { label: "Payments" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Payments</h2>
          <p className="text-sm text-muted-foreground">
            View rent status and payment history.
          </p>
        </div>
        <Input placeholder="Search payments" className="w-64" />
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Current Balance</CardTitle>
            <CardDescription>Next due {tenantSnapshot.nextDue}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-xl border p-3">
              <p className="text-xs text-muted-foreground">Amount due</p>
              <p className="text-lg font-semibold">
                ${tenantSnapshot.rent.toLocaleString()}
              </p>
            </div>
            <Button>Make Payment</Button>
          </CardContent>
        </Card>
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
      </section>
    </TenantShell>
  );
}
