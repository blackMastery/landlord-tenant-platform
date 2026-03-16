import { ManagerShell } from "@/components/layout/manager-shell";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { UnitTable } from "@/components/interactive/unit-table";
import { units } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function UnitsPage() {
  return (
    <ManagerShell activeSection="Units">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Units" },
        ]}
      />
      <section className="space-y-6">
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
    </ManagerShell>
  );
}
