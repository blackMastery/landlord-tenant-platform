import Link from "next/link";
import { notFound } from "next/navigation";
import { OwnerShell } from "@/components/layout/owner-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ApplicationReviewActions } from "@/components/interactive/application-review-actions";
import { findApplication } from "@/lib/record-helpers";
import { getStatusClass } from "@/lib/status";

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const app = findApplication(id);

  if (!app) notFound();

  const fields: Array<{ label: string; value: string }> = [
    { label: "Email", value: app.email },
    { label: "Phone", value: app.phone || "—" },
    { label: "Desired Move-in", value: app.moveInDate },
    { label: "Monthly Income", value: `$${app.monthlyIncome.toLocaleString()}` },
    { label: "Employer", value: app.employer || "—" },
    { label: "Submitted", value: app.submittedAt },
    { label: "Unit", value: `${app.unit} · ${app.property}` },
  ];

  return (
    <OwnerShell activeSection="Applications">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Owner", href: "/owner" },
          { label: "Applications", href: "/owner/applications" },
          { label: app.fullName },
        ]}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Applicant details */}
        <Card className="bg-white/90">
          <CardHeader>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <CardTitle className="text-2xl">{app.fullName}</CardTitle>
                <CardDescription>
                  {app.property} — Unit {app.unit}
                </CardDescription>
              </div>
              <Badge className={getStatusClass(app.status)}>{app.status}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {fields.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>

            {app.notes && (
              <div>
                <p className="text-xs text-muted-foreground">Notes from Applicant</p>
                <p className="mt-1 rounded-lg border bg-muted/30 p-3 text-sm">
                  {app.notes}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 border-t pt-4">
              <Button variant="outline" asChild>
                <Link href={`/listings/${app.listingId}`}>View Listing</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/owner/applications">All Applications</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Review actions */}
        <ApplicationReviewActions
          applicationId={app.id}
          currentStatus={app.status}
        />
      </div>
    </OwnerShell>
  );
}
