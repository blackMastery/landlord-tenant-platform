import { TenantShell } from "@/components/layout/tenant-shell";
import { MessageHub } from "@/components/sections/message-hub";
import { messagePreview, messageThreads } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function TenantMessagesPage() {
  return (
    <TenantShell activeSection="Messages">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tenant", href: "/tenant" },
          { label: "Messages" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Messages</h2>
          <p className="text-sm text-muted-foreground">
            Conversation history with your property manager.
          </p>
        </div>
        <Input placeholder="Search messages" className="w-full sm:w-64" />
        <MessageHub
          threads={messageThreads}
          messages={messagePreview}
          basePath="/tenant"
        />
      </section>
    </TenantShell>
  );
}
