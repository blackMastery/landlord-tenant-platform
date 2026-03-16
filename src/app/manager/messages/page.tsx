import { ManagerShell } from "@/components/layout/manager-shell";
import { SectionHeader, SectionActions } from "@/components/layout/section-header";
import { MessageHub } from "@/components/sections/message-hub";
import { messagePreview, messageThreads } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function MessagesPage() {
  return (
    <ManagerShell activeSection="Messages">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Messages" },
        ]}
      />
      <section className="space-y-6">
        <SectionHeader
          title="Messaging Hub"
          description="Active conversations and alerts."
          actions={
            <>
              <Input placeholder="Search messages" className="w-56" />
              <SectionActions primary="Compose" secondary="New Group" />
            </>
          }
        />
        <MessageHub threads={messageThreads} messages={messagePreview} />
      </section>
    </ManagerShell>
  );
}
