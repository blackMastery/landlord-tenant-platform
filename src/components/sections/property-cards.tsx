import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export function PropertyCards({
  properties,
}: {
  properties: Array<{
    id: string;
    name: string;
    location: string;
    owner: string;
    totalUnits: number;
    occupiedUnits: number;
    notes: string;
  }>;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      {properties.map((property) => {
        const occupancy = Math.round(
          (property.occupiedUnits / property.totalUnits) * 100
        );
        return (
          <Card key={property.id} className="bg-white/90">
            <CardHeader>
              <CardTitle className="text-xl">{property.name}</CardTitle>
              <CardDescription>{property.location}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm">
                <p className="text-muted-foreground">Owner</p>
                <p className="font-medium">{property.owner}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-muted-foreground">Total Units</p>
                  <p className="font-medium">{property.totalUnits}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Occupancy</p>
                  <p className="font-medium">{occupancy}%</p>
                </div>
              </div>
              <Progress value={occupancy} />
              <p className="text-xs text-muted-foreground">{property.notes}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Units",
                  "Tenants",
                  "Payments",
                  "Maintenance",
                ].map((tab) => (
                  <Badge key={tab} variant="secondary">
                    {tab}
                  </Badge>
                ))}
              </div>
              <div>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/manager/properties/${property.id}`}>
                    View Details
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
