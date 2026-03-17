import { TenantShell } from "@/components/layout/tenant-shell";
import { tenantSnapshot, tenantPaymentHistory } from "@/lib/mock-data";
import { PayRentModal } from "@/components/interactive/pay-rent-modal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { getStatusClass } from "@/lib/status";

export default function TenantPaymentsPage() {
  return (
    <TenantShell activeSection="Payments">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tenant", href: "/tenant" },
          { label: "Payments" },
        ]}
      />
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold">Payments</h2>
          <p className="text-sm text-muted-foreground">
            View rent status, make payments, and review your history.
          </p>
        </div>

        {/* Current balance card */}
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>April Rent</CardTitle>
            <CardDescription>
              Due {tenantSnapshot.nextDue} · {tenantSnapshot.unit} at {tenantSnapshot.property}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl border p-3">
                <p className="text-xs text-muted-foreground">Amount due</p>
                <p className="text-xl font-semibold mt-0.5">
                  ${tenantSnapshot.rent.toLocaleString()}
                </p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-xs text-muted-foreground">Due date</p>
                <p className="text-xl font-semibold mt-0.5">{tenantSnapshot.nextDue}</p>
              </div>
              <div className="rounded-xl border p-3">
                <p className="text-xs text-muted-foreground">Current status</p>
                <Badge className={`${getStatusClass("Due")} mt-1`}>Due</Badge>
              </div>
            </div>
            <PayRentModal
              amount={tenantSnapshot.rent}
              nextDue={tenantSnapshot.nextDue}
              autopay={tenantSnapshot.autopay}
            />
          </CardContent>
        </Card>

        {/* Payment history */}
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Payment History</CardTitle>
            <CardDescription>Last 6 months of transactions.</CardDescription>
          </CardHeader>
          <CardContent className="divide-y">
            {tenantPaymentHistory.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between py-3 text-sm"
              >
                <div>
                  <p className="font-medium">{payment.month}</p>
                  <p className="text-xs text-muted-foreground">
                    {payment.date} · {payment.method}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium">${payment.amount.toLocaleString()}</span>
                  <Badge className={getStatusClass(payment.status)}>{payment.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </TenantShell>
  );
}
