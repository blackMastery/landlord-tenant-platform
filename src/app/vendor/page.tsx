import { vendorJobs, vendorNotes } from "@/lib/mock-data";
import { VendorShell } from "@/components/layout/vendor-shell";
import { VendorDashboard } from "@/components/sections/vendor-dashboard";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function VendorPage() {
  return (
    <VendorShell activeSection="Overview">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Vendor", href: "/vendor" },
          { label: "Overview" },
        ]}
      />
      <VendorDashboard jobs={vendorJobs} notes={vendorNotes} />
    </VendorShell>
  );
}
