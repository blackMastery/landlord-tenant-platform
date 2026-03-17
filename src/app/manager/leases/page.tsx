import { ManagerShell } from "@/components/layout/manager-shell";
import { LeaseRenewalTracker } from "@/components/sections/lease-renewal-tracker";
import { leaseRenewals } from "@/lib/mock-data";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

export default function ManagerLeasesPage() {
  return (
    <ManagerShell activeSection="Leases">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Leases" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Lease Renewals</h2>
          <p className="text-sm text-muted-foreground">
            Track upcoming expirations and send renewal offers.
          </p>
        </div>
        <LeaseRenewalTracker renewals={leaseRenewals} />
      </section>
    </ManagerShell>
  );
}
