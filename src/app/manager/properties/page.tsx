import { ManagerShell } from "@/components/layout/manager-shell";
import { SectionHeader, SectionActions } from "@/components/layout/section-header";
import { PropertyCards } from "@/components/sections/property-cards";
import { PropertyTabs } from "@/components/interactive/property-tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { maintenanceTickets, properties, rentRoll, units } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";
import { PropertiesTour } from "@/components/interactive/properties-tour";

export default function PropertiesPage() {
  return (
    <ManagerShell activeSection="Properties">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Properties" },
        ]}
      />
      <section id="tour-prop-header" className="space-y-6">
        <SectionHeader
          title="Property Management"
          description="Manage properties and drill into units, tenants, payments, and maintenance."
          actions={
            <>
              <Input placeholder="Search property" className="w-full sm:w-56" />
              <SectionActions primary="New Property" secondary="Bulk Import" />
              <PropertiesTour />
            </>
          }
        />
        <div id="tour-prop-cards"><PropertyCards properties={properties} /></div>
        <Card id="tour-prop-tabs" className="bg-white/90">
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
    </ManagerShell>
  );
}
