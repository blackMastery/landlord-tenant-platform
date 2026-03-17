import {
  heroMetrics,
  managerMetrics,
  maintenanceTickets,
  messagePreview,
  messageThreads,
  notifications,
  leaseExpirations,
  properties,
  rentRoll,
  units,
  vacancies,
  vendorWorkload,
} from "@/lib/mock-data";
import { ManagerShell } from "@/components/layout/manager-shell";
import { ManagerDashboard } from "@/components/sections/manager-dashboard";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ManagerDashboardTour } from "@/components/interactive/manager-dashboard-tour";

export default function ManagerPage() {
  return (
    <ManagerShell activeSection="Overview">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Manager", href: "/manager" },
            { label: "Overview" },
          ]}
        />
        <ManagerDashboardTour />
      </div>
      <ManagerDashboard
        heroMetrics={heroMetrics}
        managerMetrics={managerMetrics}
        notifications={notifications}
        leaseExpirations={leaseExpirations}
        properties={properties}
        units={units}
        rentRoll={rentRoll}
        maintenanceTickets={maintenanceTickets}
        vendorWorkload={vendorWorkload}
        vacancies={vacancies}
        messageThreads={messageThreads}
        messagePreview={messagePreview}
      />
    </ManagerShell>
  );
}
