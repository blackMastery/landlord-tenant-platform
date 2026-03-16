import Link from "next/link";
import { ReactNode } from "react";
import { RoleShell } from "@/components/layout/role-shell";
import { Button } from "@/components/ui/button";
import { RoleSidebar } from "@/components/layout/role-sidebar";

const sections = [
  { label: "Overview", href: "/tenant" },
  { label: "Payments", href: "/tenant/payments" },
  { label: "Maintenance", href: "/tenant/maintenance" },
  { label: "Messages", href: "/tenant/messages" },
];

export function TenantShell({
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
    <RoleShell activeRole="Tenant" title="Resident Hub" subtitle="Tenant Portal">
      <div className="flex w-full items-center gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible">
        {sections.map((section) => (
          <Button
            key={section.label}
            asChild
            size="sm"
            variant={section.label === activeSection ? "default" : "outline"}
            className="shrink-0 rounded-full"
          >
            <Link href={section.href}>{section.label}</Link>
          </Button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <div className="hidden lg:block">
          <RoleSidebar title="Tenant Navigation" links={sidebarLinks} />
        </div>
        <div>{children}</div>
      </div>
    </RoleShell>
  );
}
