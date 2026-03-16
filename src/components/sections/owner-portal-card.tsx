import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function OwnerPortalCard({
  metrics,
  profitSummary,
}: {
  metrics: Array<{ label: string; value: string; change: string }>;
  profitSummary: Array<{
    property: string;
    income: number;
    expenses: number;
    net: number;
  }>;
}) {
  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle>Owner Portal</CardTitle>
        <CardDescription>Performance highlights for owners.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-3 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-xl border p-3">
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className="text-lg font-semibold">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.change}</p>
            </div>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold">Profit Summary</p>
          <div className="w-full overflow-x-auto">
            <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Property</TableHead>
                <TableHead>Income</TableHead>
                <TableHead>Expenses</TableHead>
                <TableHead>Net</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {profitSummary.map((row) => (
                <TableRow key={row.property}>
                  <TableCell className="font-medium">{row.property}</TableCell>
                  <TableCell>${row.income.toLocaleString()}</TableCell>
                  <TableCell>${row.expenses.toLocaleString()}</TableCell>
                  <TableCell>${row.net.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            </Table>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Download Statement</Button>
          <Button>View Reports</Button>
        </div>
      </CardContent>
    </Card>
  );
}
