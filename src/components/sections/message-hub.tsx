import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MessageHub({
  threads,
  messages,
  basePath = "/manager",
}: {
  threads: Array<{ id: string; title: string; participants: string; updated: string }>;
  messages: Array<{ id: string; sender: string; body: string; time: string }>;
  basePath?: string;
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Messaging Hub</CardTitle>
          <CardDescription>Active conversations and alerts.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {threads.map((thread) => (
            <div key={thread.title} className="rounded-xl border p-3">
              <p className="text-sm font-semibold">{thread.title}</p>
              <p className="text-xs text-muted-foreground">
                {thread.participants}
              </p>
              <p className="text-xs text-muted-foreground">
                Updated {thread.updated}
              </p>
              <div className="mt-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href={`${basePath}/messages/${thread.id}`}>View Thread</Link>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Latest Messages</CardTitle>
          <CardDescription>Recent inbound messages.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {messages.map((message) => (
            <div key={message.body} className="rounded-xl border p-3">
              <p className="text-sm font-semibold">{message.sender}</p>
              <p className="text-xs text-muted-foreground">{message.body}</p>
              <p className="text-xs text-muted-foreground">{message.time}</p>
              <div className="mt-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href={`${basePath}/messages/${message.id}`}>View</Link>
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
