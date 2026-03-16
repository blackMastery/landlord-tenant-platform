import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function RoleSidebar({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string; active?: boolean }>;
}) {
  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {links.map((link) => (
          <Button
            key={link.label}
            asChild
            variant={link.active ? "default" : "ghost"}
            className="w-full justify-start"
            size="sm"
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
