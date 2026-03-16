import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function HeroSection({
  title,
  description,
  metrics,
}: {
  title: string;
  description: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
}) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="border-none bg-white/90 shadow-xl">
        <CardHeader className="space-y-4">
          <Badge className="w-fit bg-black text-white">MVP Focus</Badge>
          <CardTitle className="text-2xl leading-tight sm:text-3xl">
            {title}
          </CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button className="w-full rounded-full sm:w-auto">Create Property</Button>
            <Button variant="outline" className="w-full rounded-full sm:w-auto">
              Invite Owner
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border/60 bg-white px-4 py-3"
            >
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className="text-2xl font-semibold">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.detail}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-none bg-white/80">
        <CardHeader>
          <CardTitle>Manager Snapshot</CardTitle>
          <CardDescription>Current operator and key focus.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarFallback>AH</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-muted-foreground">Property Manager</p>
              <p className="text-lg font-semibold">Ariana Hale</p>
            </div>
          </div>
          <Separator />
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground">Active Priorities</p>
              <p className="text-sm">Lease renewals, vacancy lease-up.</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Next Meeting</p>
              <p className="text-sm">Owner Q1 review - Mar 22 - 2:00 PM</p>
            </div>
          </div>
          <Separator />
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Occupancy Goal</p>
            <Progress value={92} />
            <p className="text-xs text-muted-foreground">Target 95%</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
