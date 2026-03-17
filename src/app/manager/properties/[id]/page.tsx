import { notFound } from "next/navigation";
import { ManagerShell } from "@/components/layout/manager-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { findProperty } from "@/lib/record-helpers";
import { PropertyDetailTour } from "@/components/interactive/property-detail-tour";

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = findProperty(id);
  if (!property) return notFound();

  const occupancy = Math.round(
    (property.occupiedUnits / property.totalUnits) * 100
  );

  return (
    <ManagerShell activeSection="Properties">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Manager", href: "/manager" },
            { label: "Properties", href: "/manager/properties" },
            { label: property.name },
          ]}
        />
        <PropertyDetailTour />
      </div>
      <section className="space-y-6">
        <Card id="tour-detail-info" className="bg-white/90">
          <CardHeader>
            <CardTitle>{property.name}</CardTitle>
            <CardDescription>{property.location}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Owner</p>
              <p className="text-lg font-semibold">{property.owner}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Total Units</p>
              <p className="text-lg font-semibold">{property.totalUnits}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Occupied Units</p>
              <p className="text-lg font-semibold">{property.occupiedUnits}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Occupancy</p>
              <p className="text-lg font-semibold">{occupancy}%</p>
            </div>
            <div id="tour-detail-progress" className="md:col-span-2">
              <Progress value={occupancy} />
            </div>
            <div className="md:col-span-2">
              <p className="text-xs text-muted-foreground">Notes</p>
              <p className="text-sm">{property.notes}</p>
            </div>
          </CardContent>
        </Card>
        <div id="tour-detail-links" className="grid gap-4 md:grid-cols-3">
          {["Units", "Tenants", "Payments"].map((label) => (
            <Card key={label} className="bg-white/90">
              <CardHeader>
                <CardTitle className="text-base">{label}</CardTitle>
                <CardDescription>Quick view for {label.toLowerCase()}.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="sm">
                  View {label}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </ManagerShell>
  );
}
