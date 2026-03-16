import { ManagerShell } from "@/components/layout/manager-shell";
import { SectionHeader, SectionActions } from "@/components/layout/section-header";
import { MaintenancePanel } from "@/components/sections/maintenance-panel";
import { VendorWorkload } from "@/components/sections/vendor-workload";
import { maintenanceTickets, vendorWorkload } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function MaintenancePage() {
  return (
    <ManagerShell activeSection="Maintenance">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Maintenance" },
        ]}
      />
      <section className="space-y-6">
        <SectionHeader
          title="Maintenance Management"
          description="Ticket routing, vendor assignment, and status tracking."
          actions={
            <>
              <Input placeholder="Search tickets" className="w-56" />
              <SectionActions primary="New Work Order" secondary="Assign Vendor" />
            </>
          }
        />
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <MaintenancePanel tickets={maintenanceTickets} />
          <VendorWorkload vendors={vendorWorkload} />
        </div>
      </section>
    </ManagerShell>
  );
}
