import { VendorShell } from "@/components/layout/vendor-shell";
import { vendorNotes } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function VendorUpdatesPage() {
  return (
    <VendorShell activeSection="Updates">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendor", href: "/vendor" },
          { label: "Updates" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Work Updates</h2>
          <p className="text-sm text-muted-foreground">
            Share status updates and upload completion notes.
          </p>
        </div>
        <Input placeholder="Search updates" className="w-full sm:w-64" />
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Latest Notes</CardTitle>
            <CardDescription>Recent updates sent to managers.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {vendorNotes.map((note) => (
              <div key={note.note} className="rounded-xl border p-3">
                <p className="text-sm">{note.note}</p>
                <p className="text-xs text-muted-foreground">{note.time}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </VendorShell>
  );
}
