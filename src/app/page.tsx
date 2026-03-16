import Link from "next/link";
import { RoleShell } from "@/components/layout/role-shell";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

const roleCards = [
  {
    title: "Property Manager",
    description:
      "Full operational dashboard across properties, units, rent, maintenance, and messaging.",
    href: "/manager",
  },
  {
    title: "Owner",
    description:
      "High-level financial performance, occupancy, and profit reporting.",
    href: "/owner",
  },
  {
    title: "Tenant",
    description:
      "Rent status, payments, maintenance requests, and messaging.",
    href: "/tenant",
  },
  {
    title: "Vendor",
    description:
      "Assigned work orders, progress tracking, and completion notes.",
    href: "/vendor",
  },
  {
    title: "Browse Listings",
    description:
      "Explore available rental units across all properties. No account needed.",
    href: "/listings",
  },
];

export default function Home() {
  return (
    <RoleShell activeRole="" title="Role Dashboards" subtitle="Select a portal">
      <Breadcrumbs items={[{ label: "Home" }, { label: "Role Selector" }]} />
      <section className="grid gap-4 md:grid-cols-2">
        {roleCards.map((role) => (
          <Card key={role.title} className="bg-white/90">
            <CardHeader>
              <CardTitle>{role.title}</CardTitle>
              <CardDescription>{role.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href={role.href}>Open Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </RoleShell>
  );
}
