import { notFound } from "next/navigation";
import { ManagerShell } from "@/components/layout/manager-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStatusClass } from "@/lib/status";
import { findRent } from "@/lib/record-helpers";

export default async function PaymentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const payment = findRent(id);
  if (!payment) return notFound();

  return (
    <ManagerShell activeSection="Payments">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Manager", href: "/manager" },
          { label: "Payments", href: "/manager/payments" },
          { label: payment.tenant },
        ]}
      />
      <section className="space-y-6">
        <Card className="bg-white/90">
          <CardHeader>
            <CardTitle>Rent Payment</CardTitle>
            <CardDescription>
              {payment.tenant} - {payment.property} {payment.unit}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs text-muted-foreground">Amount</p>
              <p className="text-lg font-semibold">
                ${payment.amount.toLocaleString()}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Status</p>
              <Badge className={getStatusClass(payment.status)}>
                {payment.status}
              </Badge>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Due Date</p>
              <p className="text-sm">{payment.dueDate}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Unit</p>
              <p className="text-sm">{payment.unit}</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </ManagerShell>
  );
}
