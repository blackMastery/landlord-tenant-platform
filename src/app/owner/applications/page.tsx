import { OwnerShell } from "@/components/layout/owner-shell";
import { SectionHeader, SectionActions } from "@/components/layout/section-header";
import { ApplicationsPanel } from "@/components/sections/applications-panel";
import { applications } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function OwnerApplicationsPage() {
  return (
    <OwnerShell activeSection="Applications">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Owner", href: "/owner" },
          { label: "Applications" },
        ]}
      />
      <section className="space-y-6">
        <SectionHeader
          title="Rental Applications"
          description="Review and follow up on submitted applications."
          actions={
            <>
              <Input placeholder="Search applicant" className="w-full sm:w-56" />
              <SectionActions primary="Export" />
            </>
          }
        />
        <ApplicationsPanel applications={applications} />
      </section>
    </OwnerShell>
  );
}
