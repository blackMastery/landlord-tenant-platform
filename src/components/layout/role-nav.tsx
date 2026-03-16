import Link from "next/link";
import { Button } from "@/components/ui/button";

const roles = [
  { label: "Property Manager", href: "/manager" },
  { label: "Owner", href: "/owner" },
  { label: "Tenant", href: "/tenant" },
  { label: "Vendor", href: "/vendor" },
];

export function RoleNav({ active }: { active: string }) {
  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto sm:w-auto sm:flex-wrap sm:overflow-visible">
      {roles.map((role) => (
        <Button
          key={role.label}
          asChild
          variant={active === role.label ? "default" : "outline"}
          className="shrink-0 rounded-full"
        >
          <Link href={role.href}>{role.label}</Link>
        </Button>
      ))}
    </div>
  );
}
