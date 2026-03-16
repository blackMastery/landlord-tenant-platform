import { notFound } from "next/navigation";
import { VendorShell } from "@/components/layout/vendor-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { findMessageThread, findMessagePreview } from "@/lib/record-helpers";

export default async function VendorMessageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const thread = findMessageThread(id);
  const preview = findMessagePreview(id);
  const message = thread ?? preview;
  if (!message) return notFound();

  return (
    <VendorShell activeSection="Messages">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendor", href: "/vendor" },
          { label: "Messages", href: "/vendor/messages" },
          { label: "Thread" },
        ]}
      />
      <section className="space-y-6">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Message Detail</CardTitle>
            <CardDescription>Conversation context and recent activity.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {thread ? (
              <div className="space-y-2">
                <p className="text-sm font-semibold">{thread.title}</p>
                <p className="text-xs text-muted-foreground">
                  {thread.participants}
                </p>
                <p className="text-xs text-muted-foreground">
                  Updated {thread.updated}
                </p>
              </div>
            ) : null}
            {preview ? (
              <div className="rounded-xl border p-3">
                <p className="text-sm font-semibold">{preview.sender}</p>
                <p className="text-xs text-muted-foreground">{preview.body}</p>
                <p className="text-xs text-muted-foreground">{preview.time}</p>
              </div>
            ) : null}
          </CardContent>
        </Card>
      </section>
    </VendorShell>
  );
}
