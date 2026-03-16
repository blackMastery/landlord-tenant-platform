import { VendorShell } from "@/components/layout/vendor-shell";
import { MessageHub } from "@/components/sections/message-hub";
import { messagePreview, messageThreads } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function VendorMessagesPage() {
  return (
    <VendorShell activeSection="Messages">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendor", href: "/vendor" },
          { label: "Messages" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Messages</h2>
          <p className="text-sm text-muted-foreground">
            Conversations with property managers and tenants.
          </p>
        </div>
        <Input placeholder="Search messages" className="w-64" />
        <MessageHub
          threads={messageThreads}
          messages={messagePreview}
          basePath="/vendor"
        />
      </section>
    </VendorShell>
  );
}
