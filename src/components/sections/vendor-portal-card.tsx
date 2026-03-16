import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
import { getStatusClass } from "@/lib/status";

export function VendorPortalCard({
  jobs,
  notes,
}: {
  jobs: Array<{
    id: string;
    property: string;
    unit: string;
    tenant: string;
    issue: string;
    status: string;
  }>;
  notes: Array<{ note: string; time: string }>;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Assigned Jobs</CardTitle>
          <CardDescription>Active work orders for your team.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell className="font-medium">{job.id}</TableCell>
                  <TableCell>
                    {job.property} - {job.unit}
                  </TableCell>
                  <TableCell>{job.issue}</TableCell>
                  <TableCell>
                    <Badge className={getStatusClass(job.status)}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/vendor/jobs/${job.id}`}>View</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex gap-2">
            <Button variant="outline">Accept Job</Button>
            <Button>Update Progress</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Vendor Notes</CardTitle>
          <CardDescription>Latest updates from contractors.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {notes.map((note) => (
            <div key={note.note} className="rounded-xl border p-3">
              <p className="text-sm">{note.note}</p>
              <p className="text-xs text-muted-foreground">{note.time}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
