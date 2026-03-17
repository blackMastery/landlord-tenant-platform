import { OwnerShell } from "@/components/layout/owner-shell";
import { SectionHeader } from "@/components/layout/section-header";
import { ApplicationKanban } from "@/components/interactive/application-kanban";
import { applications } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

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
          description="Review and move applications through the pipeline."
        />
        <ApplicationKanban initialApplications={applications} />
      </section>
    </OwnerShell>
  );
}
