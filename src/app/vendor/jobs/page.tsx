import { VendorShell } from "@/components/layout/vendor-shell";
import { VendorPortalCard } from "@/components/sections/vendor-portal-card";
import { vendorJobs, vendorNotes } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Input } from "@/components/ui/input";

export default function VendorJobsPage() {
  return (
    <VendorShell activeSection="Jobs">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendor", href: "/vendor" },
          { label: "Jobs" },
        ]}
      />
      <Input placeholder="Search jobs" className="w-full sm:w-64" />
      <VendorPortalCard jobs={vendorJobs} notes={vendorNotes} />
    </VendorShell>
  );
}
