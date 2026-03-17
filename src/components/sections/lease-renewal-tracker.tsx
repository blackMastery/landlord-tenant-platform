"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { RenewalStatus } from "@/lib/mock-data";

type Renewal = {
  id: string;
  tenant: string;
  unit: string;
  property: string;
  leaseEnd: string;
  renewalStatus: RenewalStatus;
  daysUntilExpiry: number;
  rent: number;
};

const renewalStatusColor: Record<RenewalStatus, string> = {
  Renewed: "bg-emerald-100 text-emerald-700",
  "Sent Offer": "bg-blue-100 text-blue-700",
  Pending: "bg-amber-100 text-amber-700",
  "Not Renewing": "bg-rose-100 text-rose-700",
};

function urgencyLabel(days: number): { label: string; className: string } {
  if (days < 0) return { label: "Expired", className: "text-rose-600" };
  if (days <= 30) return { label: `${days}d left`, className: "text-rose-600 font-semibold" };
  if (days <= 90) return { label: `${days}d left`, className: "text-amber-600 font-medium" };
  return { label: `${days}d left`, className: "text-muted-foreground" };
}

export function LeaseRenewalTracker({ renewals }: { renewals: Renewal[] }) {
  const [statuses, setStatuses] = useState<Record<string, RenewalStatus>>(
    Object.fromEntries(renewals.map((r) => [r.id, r.renewalStatus]))
  );
  const [sentOffers, setSentOffers] = useState<Set<string>>(new Set());

  function sendOffer(id: string) {
    setStatuses((prev) => ({ ...prev, [id]: "Sent Offer" }));
    setSentOffers((prev) => new Set([...prev, id]));
  }

  const expiringSoon = renewals.filter((r) => r.daysUntilExpiry <= 90).length;

  return (
    <div className="space-y-4">
      {/* Summary row */}
      <div className="grid gap-3 sm:grid-cols-4">
        {(
          [
            { label: "Total Leases", value: renewals.length, color: "" },
            { label: "Expiring ≤ 90 days", value: expiringSoon, color: "text-amber-600" },
            {
              label: "Renewed",
              value: Object.values(statuses).filter((s) => s === "Renewed").length,
              color: "text-emerald-600",
            },
            {
              label: "Not Renewing",
              value: Object.values(statuses).filter((s) => s === "Not Renewing").length,
              color: "text-rose-600",
            },
          ] as { label: string; value: number; color: string }[]
        ).map((item) => (
          <Card key={item.label} className="bg-white/90">
            <CardContent className="pt-5">
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className={`text-2xl font-semibold mt-1 ${item.color}`}>{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lease list */}
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>All Leases</CardTitle>
          <CardDescription>Sorted by soonest expiration.</CardDescription>
        </CardHeader>
        <CardContent className="divide-y">
          {[...renewals]
            .sort((a, b) => a.daysUntilExpiry - b.daysUntilExpiry)
            .map((renewal) => {
              const status = statuses[renewal.id];
              const { label, className } = urgencyLabel(renewal.daysUntilExpiry);
              const canSendOffer =
                status === "Pending" && !sentOffers.has(renewal.id);

              return (
                <div
                  key={renewal.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-medium">{renewal.tenant}</p>
                    <p className="text-xs text-muted-foreground">
                      {renewal.property} · {renewal.unit} · ${renewal.rent.toLocaleString()}/mo
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Lease ends {renewal.leaseEnd}{" "}
                      <span className={className}>· {label}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className={renewalStatusColor[status]}>{status}</Badge>
                    {canSendOffer && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-7 text-xs"
                        onClick={() => sendOffer(renewal.id)}
                      >
                        Send Renewal Offer
                      </Button>
                    )}
                    {sentOffers.has(renewal.id) && status === "Sent Offer" && (
                      <span className="text-xs text-blue-600">Offer sent ✓</span>
                    )}
                  </div>
                </div>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
}
