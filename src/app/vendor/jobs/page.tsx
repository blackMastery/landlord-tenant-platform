import Link from "next/link";
import { VendorShell } from "@/components/layout/vendor-shell";
import { vendorJobs } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStatusClass } from "@/lib/status";

export default function VendorJobsPage() {
  const open = vendorJobs.filter((j) => j.status !== "Completed");
  const completed = vendorJobs.filter((j) => j.status === "Completed");

  return (
    <VendorShell activeSection="Jobs">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendor", href: "/vendor" },
          { label: "Jobs" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Work Orders</h2>
          <p className="text-sm text-muted-foreground">
            {open.length} open · {completed.length} completed
          </p>
        </div>

        {open.length > 0 && (
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle>Active Jobs</CardTitle>
              <CardDescription>Jobs requiring attention.</CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              {open.map((job) => (
                <div
                  key={job.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium">{job.issue}</span>
                      <Badge className={getStatusClass(job.status)}>{job.status}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {job.property} · {job.unit} · Tenant: {job.tenant}
                    </p>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {job.id}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/vendor/jobs/${job.id}`}>View Details</Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}

        {completed.length > 0 && (
          <Card className="bg-white/90">
            <CardHeader>
              <CardTitle>Completed Jobs</CardTitle>
              <CardDescription>Recently finished work orders.</CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              {completed.map((job) => (
                <div
                  key={job.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-medium">{job.issue}</span>
                      <Badge className={getStatusClass(job.status)}>{job.status}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {job.property} · {job.unit} · Tenant: {job.tenant}
                    </p>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/vendor/jobs/${job.id}`}>View</Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        )}
      </section>
    </VendorShell>
  );
}
