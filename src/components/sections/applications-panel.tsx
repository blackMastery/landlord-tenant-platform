import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatusClass } from "@/lib/status";
import type { Application } from "@/lib/mock-data";

export function ApplicationsPanel({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <Card className="bg-white/90">
      <CardContent className="p-0">
        {/* Mobile card view */}
        <div className="sm:hidden divide-y">
          {applications.map((app) => (
            <div key={`${app.id}-m`} className="flex flex-col gap-1.5 p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium">{app.fullName}</span>
                <Badge className={getStatusClass(app.status)}>{app.status}</Badge>
              </div>
              <div className="text-muted-foreground">
                {app.unit} · {app.property}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  ${app.monthlyIncome.toLocaleString()}/mo · Move-in {app.moveInDate}
                </span>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/owner/applications/${app.id}`}>Review</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden sm:block w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Applicant</TableHead>
                <TableHead>Property / Unit</TableHead>
                <TableHead>Income</TableHead>
                <TableHead>Move-in</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.fullName}</TableCell>
                  <TableCell>
                    {app.property} · {app.unit}
                  </TableCell>
                  <TableCell>${app.monthlyIncome.toLocaleString()}</TableCell>
                  <TableCell>{app.moveInDate}</TableCell>
                  <TableCell>{app.submittedAt}</TableCell>
                  <TableCell>
                    <Badge className={getStatusClass(app.status)}>
                      {app.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/owner/applications/${app.id}`}>Review</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
