import { notFound } from "next/navigation";
import { VendorShell } from "@/components/layout/vendor-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getStatusClass } from "@/lib/status";
import { findVendorJob } from "@/lib/record-helpers";
import { VendorJobActions } from "@/components/interactive/vendor-job-actions";

export default async function VendorJobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = findVendorJob(id);
  if (!job) return notFound();

  return (
    <VendorShell activeSection="Jobs">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendor", href: "/vendor" },
          { label: "Jobs", href: "/vendor/jobs" },
          { label: job.id.toUpperCase() },
        ]}
      />
      <section className="space-y-6">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Work Order {job.id.toUpperCase()}</CardTitle>
            <CardDescription>
              {job.property} · {job.unit} · Tenant: {job.tenant}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Issue</p>
              <p className="text-sm font-medium mt-0.5">{job.issue}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <Badge className={`${getStatusClass(job.status)} mt-0.5`}>{job.status}</Badge>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Property</p>
              <p className="text-sm mt-0.5">{job.property}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Unit</p>
              <p className="text-sm mt-0.5">{job.unit}</p>
            </div>
          </CardContent>
        </Card>

        <VendorJobActions initialStatus={job.status} />
      </section>
    </VendorShell>
  );
}
