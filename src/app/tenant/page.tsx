import { tenantSnapshot } from "@/lib/mock-data";
import { TenantShell } from "@/components/layout/tenant-shell";
import { TenantDashboard } from "@/components/sections/tenant-dashboard";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { TenantDashboardTour } from "@/components/interactive/tenant-dashboard-tour";

export default function TenantPage() {
  return (
    <TenantShell activeSection="Overview">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Tenant", href: "/tenant" },
            { label: "Overview" },
          ]}
        />
        <TenantDashboardTour />
      </div>
      <TenantDashboard tenant={tenantSnapshot} />
    </TenantShell>
  );
}
