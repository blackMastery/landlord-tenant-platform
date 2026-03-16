import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NotificationsPanel({
  notifications,
}: {
  notifications: Array<{ label: string; detail: string; time: string }>;
}) {
  return (
    <Card className="bg-white/90">
      <CardHeader className="flex-row items-center justify-between">
        <div>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Latest portfolio alerts.</CardDescription>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {notifications.map((item) => (
          <div key={item.detail} className="rounded-xl border p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">{item.label}</p>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>
            <p className="text-xs text-muted-foreground">{item.detail}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
