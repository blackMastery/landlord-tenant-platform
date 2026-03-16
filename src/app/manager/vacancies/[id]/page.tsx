import { notFound } from "next/navigation";
import { ManagerShell } from "@/components/layout/manager-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStatusClass } from "@/lib/status";
import { findVacancy } from "@/lib/record-helpers";

export default async function VacancyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const vacancy = findVacancy(id);
  if (!vacancy) return notFound();

  return (
    <ManagerShell activeSection="Vacancies">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Vacancies", href: "/manager/vacancies" },
          { label: vacancy.unit },
        ]}
      />
      <section className="space-y-6">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Vacancy {vacancy.unit}</CardTitle>
            <CardDescription>{vacancy.property}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Rent</p>
              <p className="text-lg font-semibold">
                ${vacancy.rent.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <Badge className={getStatusClass(vacancy.status)}>
                {vacancy.status}
              </Badge>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Availability</p>
              <p className="text-sm">{vacancy.availability}</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </ManagerShell>
  );
}
