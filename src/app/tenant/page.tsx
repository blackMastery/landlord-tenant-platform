import { tenantSnapshot } from "@/lib/mock-data";
import { TenantShell } from "@/components/layout/tenant-shell";
import { TenantDashboard } from "@/components/sections/tenant-dashboard";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function TenantPage() {
  return (
    <TenantShell activeSection="Overview">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tenant", href: "/tenant" },
          { label: "Overview" },
        ]}
      />
      <TenantDashboard tenant={tenantSnapshot} />
    </TenantShell>
  );
}
