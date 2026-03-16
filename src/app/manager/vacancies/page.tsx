import { ManagerShell } from "@/components/layout/manager-shell";
import { SectionHeader, SectionActions } from "@/components/layout/section-header";
import { VacancyTable } from "@/components/sections/vacancy-table";
import { vacancies } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function VacanciesPage() {
  return (
    <ManagerShell activeSection="Vacancies">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Vacancies" },
        ]}
      />
      <section className="space-y-6">
        <SectionHeader
          title="Vacancy Management"
          description="Listings, viewings, and application pipeline."
          actions={
            <>
              <Input placeholder="Search vacancy" className="w-full sm:w-56" />
              <SectionActions primary="Publish Listing" secondary="Schedule Viewing" />
            </>
          }
        />
        <VacancyTable vacancies={vacancies} />
      </section>
    </ManagerShell>
  );
}
