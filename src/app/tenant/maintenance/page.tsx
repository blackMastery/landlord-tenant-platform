import { TenantShell } from "@/components/layout/tenant-shell";
import { TenantPortalCard } from "@/components/sections/tenant-portal-card";
import { tenantSnapshot } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

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
            Submit new requests and track progress.
          </p>
        </div>
        <Input placeholder="Search requests" className="w-full sm:w-64" />
        <TenantPortalCard tenant={tenantSnapshot} />
      </section>
    </TenantShell>
  );
}
