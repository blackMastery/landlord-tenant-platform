import { vendorJobs, vendorNotes } from "@/lib/mock-data";
import { VendorShell } from "@/components/layout/vendor-shell";
import { VendorDashboard } from "@/components/sections/vendor-dashboard";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { VendorDashboardTour } from "@/components/interactive/vendor-dashboard-tour";

export default function VendorPage() {
  return (
    <VendorShell activeSection="Overview">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Vendor", href: "/vendor" },
            { label: "Overview" },
          ]}
        />
        <VendorDashboardTour />
      </div>
      <VendorDashboard jobs={vendorJobs} notes={vendorNotes} />
    </VendorShell>
  );
}
