import { ManagerShell } from "@/components/layout/manager-shell";
import { SectionHeader, SectionActions } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { RentTable } from "@/components/interactive/rent-table";
import { rentRoll } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function PaymentsPage() {
  return (
    <ManagerShell activeSection="Payments">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Payments" },
        ]}
      />
      <section className="space-y-6">
        <SectionHeader
          title="Rent Management"
          description="Centralized rent tracking across tenants."
          actions={
            <>
              <Input placeholder="Search tenant" className="w-full sm:w-56" />
              <SectionActions primary="Record Payment" secondary="Send Reminders" />
            </>
          }
        />
        <Card className="bg-white/90">
          <CardContent className="p-6">
            <RentTable rentRoll={rentRoll} />
          </CardContent>
        </Card>
      </section>
    </ManagerShell>
  );
}
