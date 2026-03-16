import { OwnerShell } from "@/components/layout/owner-shell";
import { MaintenancePanel } from "@/components/sections/maintenance-panel";
import { maintenanceTickets } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function OwnerMaintenancePage() {
  return (
    <OwnerShell activeSection="Maintenance">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Owner", href: "/owner" },
          { label: "Maintenance" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Maintenance Oversight</h2>
          <p className="text-sm text-muted-foreground">
            Monitor open tickets, costs, and SLA compliance.
          </p>
        </div>
        <Input placeholder="Search tickets" className="w-64" />
        <MaintenancePanel tickets={maintenanceTickets} />
      </section>
    </OwnerShell>
  );
}
