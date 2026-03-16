import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function DashboardWidgets({
  metrics,
}: {
  metrics: Array<{ label: string; value: string | number; helper: string }>;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.label} className="bg-white/90">
          <CardHeader className="space-y-1">
            <CardDescription>{metric.label}</CardDescription>
            <CardTitle className="text-2xl">{metric.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">{metric.helper}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
