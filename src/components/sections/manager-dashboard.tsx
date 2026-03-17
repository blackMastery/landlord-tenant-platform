import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/layout/hero";
import { DashboardWidgets } from "@/components/layout/dashboard-widgets";
import { SectionHeader, SectionActions } from "@/components/layout/section-header";
import { NotificationsPanel } from "@/components/sections/notifications-panel";
import { LeaseExpirations } from "@/components/sections/lease-expirations";
import { PropertyCards } from "@/components/sections/property-cards";
import { PropertyTabs } from "@/components/interactive/property-tabs";
import { UnitTable } from "@/components/interactive/unit-table";
import { RentTable } from "@/components/interactive/rent-table";
import { MaintenancePanel } from "@/components/sections/maintenance-panel";
import { VendorWorkload } from "@/components/sections/vendor-workload";
import { VacancyTable } from "@/components/sections/vacancy-table";
import { MessageHub } from "@/components/sections/message-hub";

export function ManagerDashboard({
  heroMetrics,
  managerMetrics,
  notifications,
  leaseExpirations,
  properties,
  units,
  rentRoll,
  maintenanceTickets,
  vendorWorkload,
  vacancies,
  messageThreads,
  messagePreview,
}: {
  heroMetrics: Array<{ label: string; value: string; detail: string }>;
  managerMetrics: Array<{ label: string; value: string | number; helper: string }>;
  notifications: Array<{ label: string; detail: string; time: string }>;
  leaseExpirations: Array<{ tenant: string; unit: string; property: string; leaseEnd: string }>;
  properties: Array<{
    id: string;
    name: string;
    location: string;
    owner: string;
    totalUnits: number;
    occupiedUnits: number;
    notes: string;
  }>;
  units: Array<{
    id: string;
    unit: string;
    property: string;
    status: string;
    tenant: string;
    rent: number;
    deposit: number;
    leaseStart: string;
    leaseEnd: string;
  }>;
  rentRoll: Array<{
    id: string;
    tenant: string;
    unit: string;
    property: string;
    amount: number;
    status: "Paid" | "Due" | "Late";
    dueDate: string;
  }>;
  maintenanceTickets: Array<{
    id: string;
    unit: string;
    property: string;
    tenant: string;
    issue: string;
    priority: string;
    status: "Pending" | "In Progress" | "Completed";
    vendor: string;
  }>;
  vendorWorkload: Array<{
    vendor: string;
    specialty: string;
    active: number;
    responseTime: string;
  }>;
  vacancies: Array<{
    id: string;
    unit: string;
    property: string;
    rent: number;
    status: string;
    availability: string;
  }>;
  messageThreads: Array<{ id: string; title: string; participants: string; updated: string }>;
  messagePreview: Array<{ id: string; sender: string; body: string; time: string }>;
}) {
  return (
    <div className="space-y-8">
      <section id="tour-hero">
      <HeroSection
        title="Centralize property management, rent tracking, maintenance, and tenant communication in one place."
        description="Manage multi-property portfolios with real-time occupancy, cash flow, and maintenance health. Built for property managers and owners who need clarity without complexity."
        metrics={heroMetrics}
      />
      </section>

      <section id="tour-kpis" className="space-y-6">
        <SectionHeader
          title="Property Manager Dashboard"
          description="Portfolio KPIs and active alerts."
          actions={<SectionActions primary="Add Tenant" secondary="Export Report" />}
        />
        <DashboardWidgets metrics={managerMetrics} />
        <div className="grid gap-4 lg:grid-cols-2">
          <NotificationsPanel notifications={notifications} />
          <LeaseExpirations leases={leaseExpirations} />
        </div>
      </section>

      <section id="tour-property-mgmt" className="space-y-6">
        <SectionHeader
          title="Property Management"
          description="Manage properties and drill into units, tenants, payments, and maintenance."
          actions={<SectionActions primary="New Property" secondary="Bulk Import" />}
        />
        <PropertyCards properties={properties} />
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Property Detail Tabs</CardTitle>
            <CardDescription>
              Switch between units, tenants, payments, and maintenance for a
              selected property.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PropertyTabs
              properties={properties}
              units={units}
              rentRoll={rentRoll}
              maintenanceTickets={maintenanceTickets}
            />
          </CardContent>
        </Card>
      </section>

      <section id="tour-units" className="space-y-6">
        <SectionHeader
          title="Unit Management"
          description="All units with tenant, rent, and lease details."
        />
        <Card className="bg-white/90">
          <CardContent className="p-6">
            <UnitTable units={units} />
          </CardContent>
        </Card>
      </section>

      <section id="tour-rent" className="space-y-6">
        <SectionHeader
          title="Rent Management"
          description="Centralized rent tracking across tenants."
          actions={<SectionActions primary="Record Payment" secondary="Send Reminders" />}
        />
        <Card className="bg-white/90">
          <CardContent className="p-6">
            <RentTable rentRoll={rentRoll} />
          </CardContent>
        </Card>
      </section>

      <section id="tour-maintenance" className="space-y-6">
        <SectionHeader
          title="Maintenance Management"
          description="Ticket routing, vendor assignment, and status tracking."
          actions={<SectionActions primary="New Work Order" secondary="Assign Vendor" />}
        />
        <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
          <MaintenancePanel tickets={maintenanceTickets} />
          <VendorWorkload vendors={vendorWorkload} />
        </div>
      </section>

      <section id="tour-vacancies" className="space-y-6">
        <SectionHeader
          title="Vacancy Management"
          description="Listings, viewings, and application pipeline."
          actions={<SectionActions primary="Publish Listing" secondary="Schedule Viewing" />}
        />
        <VacancyTable vacancies={vacancies} />
      </section>

      <section id="tour-messages" className="space-y-6">
        <SectionHeader
          title="Messaging Hub"
          description="Active conversations and alerts."
          actions={<SectionActions primary="Compose" secondary="New Group" />}
        />
        <MessageHub threads={messageThreads} messages={messagePreview} />
      </section>

      <section className="space-y-6">
        <SectionHeader
          title="Maintenance Quick Actions"
          description="Shortcuts for high-priority work orders."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {["Assign emergency vendor", "Escalate open tickets", "Schedule inspections"].map(
            (item) => (
              <Card key={item} className="bg-white/90">
                <CardContent className="space-y-3 p-6">
                  <p className="text-sm font-semibold">{item}</p>
                  <p className="text-xs text-muted-foreground">
                    Auto-create tasks and notify the team.
                  </p>
                  <Button variant="outline" size="sm">
                    Launch
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>
    </div>
  );
}
