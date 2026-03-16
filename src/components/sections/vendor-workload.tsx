import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function VendorWorkload({
  vendors,
}: {
  vendors: Array<{
    vendor: string;
    specialty: string;
    active: number;
    responseTime: string;
  }>;
}) {
  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle>Vendor Workload</CardTitle>
        <CardDescription>Active jobs and response times.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {vendors.map((vendor) => (
          <div key={vendor.vendor} className="rounded-xl border p-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">{vendor.vendor}</p>
                <p className="text-xs text-muted-foreground">
                  {vendor.specialty}
                </p>
              </div>
              <Badge variant="secondary">{vendor.active} Active</Badge>
            </div>
            <p className="text-xs text-muted-foreground">
              Avg response {vendor.responseTime}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
