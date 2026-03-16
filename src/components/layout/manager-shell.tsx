import Link from "next/link";
import { ReactNode } from "react";
import { RoleShell } from "@/components/layout/role-shell";
import { Button } from "@/components/ui/button";
import { RoleSidebar } from "@/components/layout/role-sidebar";

const sections = [
  { label: "Overview", href: "/manager" },
  { label: "Properties", href: "/manager/properties" },
  { label: "Units", href: "/manager/units" },
  { label: "Payments", href: "/manager/payments" },
  { label: "Maintenance", href: "/manager/maintenance" },
  { label: "Vacancies", href: "/manager/vacancies" },
  { label: "Messages", href: "/manager/messages" },
];

export function ManagerShell({
  activeSection,
  children,
}: {
  activeSection: string;
  children: ReactNode;
}) {
  const sidebarLinks = sections.map((section) => ({
    ...section,
    active: section.label === activeSection,
  }));

  return (
    <RoleShell
      activeRole="Property Manager"
      title="Portfolio Operations Hub"
      subtitle="Property Manager"
    >
      <div className="flex flex-wrap gap-2">
        {sections.map((section) => (
          <Button
            key={section.label}
            asChild
            size="sm"
            variant={section.label === activeSection ? "default" : "outline"}
            className="rounded-full"
          >
            <Link href={section.href}>{section.label}</Link>
          </Button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <div className="hidden lg:block">
          <RoleSidebar title="Manager Navigation" links={sidebarLinks} />
        </div>
        <div>{children}</div>
      </div>
    </RoleShell>
  );
}
