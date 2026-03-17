import { TenantShell } from "@/components/layout/tenant-shell";
import { tenantSnapshot, tenantMaintenanceRequests } from "@/lib/mock-data";
import { MaintenanceRequestForm } from "@/components/interactive/maintenance-request-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function TenantMaintenancePage() {
  return (
    <TenantShell activeSection="Maintenance">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tenant", href: "/tenant" },
          { label: "Maintenance" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Maintenance Requests</h2>
          <p className="text-sm text-muted-foreground">
            Submit new requests and track progress for {tenantSnapshot.unit} at {tenantSnapshot.property}.
          </p>
        </div>

        {/* Quick info */}
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Your Unit</CardTitle>
            <CardDescription>{tenantSnapshot.unit} · {tenantSnapshot.property}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 sm:grid-cols-3 text-sm">
            <div className="rounded-xl border p-3">
              <p className="text-xs text-muted-foreground">Tenant</p>
              <p className="font-medium">{tenantSnapshot.name}</p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="text-xs text-muted-foreground">Avg. Response Time</p>
              <p className="font-medium">3–6 hours</p>
            </div>
            <div className="rounded-xl border p-3">
              <p className="text-xs text-muted-foreground">Emergency Line</p>
              <p className="font-medium">(512) 555-0100</p>
            </div>
          </CardContent>
        </Card>

        <MaintenanceRequestForm initialRequests={tenantMaintenanceRequests} />
      </section>
    </TenantShell>
  );
}
