import Link from "next/link";
import { ReactNode } from "react";
import { RoleShell } from "@/components/layout/role-shell";
import { Button } from "@/components/ui/button";
import { RoleSidebar } from "@/components/layout/role-sidebar";

const sections = [
  { label: "Overview", href: "/vendor" },
  { label: "Jobs", href: "/vendor/jobs" },
  { label: "Updates", href: "/vendor/updates" },
  { label: "Messages", href: "/vendor/messages" },
];

export function VendorShell({
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
      activeRole="Vendor"
      title="Vendor Operations"
      subtitle="Maintenance Vendor"
    >
      <div id="vendor-tour-nav" className="flex w-full items-center gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible">
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
          <RoleSidebar title="Vendor Navigation" links={sidebarLinks} />
        </div>
        <div>{children}</div>
      </div>
    </RoleShell>
  );
}
