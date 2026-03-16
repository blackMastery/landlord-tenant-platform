import { ownerMetrics, profitSummary, managerMetrics } from "@/lib/mock-data";
import { OwnerShell } from "@/components/layout/owner-shell";
import { OwnerDashboard } from "@/components/sections/owner-dashboard";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function OwnerPage() {
  return (
    <OwnerShell activeSection="Overview">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Owner", href: "/owner" },
          { label: "Overview" },
        ]}
      />
      <OwnerDashboard
        metrics={ownerMetrics}
        widgets={managerMetrics.slice(0, 4)}
        profitSummary={profitSummary}
      />
    </OwnerShell>
  );
}
