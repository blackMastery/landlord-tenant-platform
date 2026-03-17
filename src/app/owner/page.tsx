import { ownerMetrics, profitSummary, managerMetrics } from "@/lib/mock-data";
import { OwnerShell } from "@/components/layout/owner-shell";
import { OwnerDashboard } from "@/components/sections/owner-dashboard";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { OwnerDashboardTour } from "@/components/interactive/owner-dashboard-tour";

export default function OwnerPage() {
  return (
    <OwnerShell activeSection="Overview">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Owner", href: "/owner" },
            { label: "Overview" },
          ]}
        />
        <OwnerDashboardTour />
      </div>
      <OwnerDashboard
        metrics={ownerMetrics}
        widgets={managerMetrics.slice(0, 4)}
        profitSummary={profitSummary}
      />
    </OwnerShell>
  );
}
