"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

let confirmationCounter = 10000;

export function PayRentModal({
  amount,
  nextDue,
  autopay,
}: {
  amount: number;
  nextDue: string;
  autopay: string;
}) {
  const [step, setStep] = useState<"idle" | "confirm" | "success">("idle");
  const [autopayEnabled, setAutopayEnabled] = useState(autopay === "Enabled");
  const [confirmationId] = useState(() => {
    confirmationCounter += Math.floor(Math.random() * 9000) + 1000;
    return confirmationCounter;
  });

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button onClick={() => setStep("confirm")} className="sm:w-auto">
          Pay Now — ${amount.toLocaleString()}
        </Button>
        <Button
          variant="outline"
          className="sm:w-auto"
          onClick={() => setAutopayEnabled((v) => !v)}
        >
          Auto-pay: {autopayEnabled ? "On" : "Off"}
        </Button>
      </div>

      {step !== "idle" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <Card className="w-full max-w-sm bg-white shadow-xl">
            {step === "confirm" ? (
              <>
                <CardHeader>
                  <CardTitle>Confirm Payment</CardTitle>
                  <CardDescription>Due {nextDue}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl border divide-y text-sm">
                    <div className="flex justify-between px-3 py-2">
                      <span className="text-muted-foreground">Rent</span>
                      <span className="font-medium">${amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between px-3 py-2">
                      <span className="text-muted-foreground">Processing fee</span>
                      <span className="font-medium text-muted-foreground">Free</span>
                    </div>
                    <div className="flex justify-between px-3 py-2 font-semibold">
                      <span>Total</span>
                      <span>${amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between px-3 py-2">
                      <span className="text-muted-foreground">Method</span>
                      <span>ACH Bank Transfer</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => setStep("idle")}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => setStep("success")}
                    >
                      Confirm ${amount.toLocaleString()}
                    </Button>
                  </div>
                </CardContent>
              </>
            ) : (
              <>
                <CardHeader>
                  <CardTitle>Payment Submitted</CardTitle>
                  <CardDescription>
                    Processing typically takes 1–2 business days.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-xl border bg-emerald-50 p-4 space-y-1">
                    <p className="text-sm font-semibold text-emerald-700">
                      ✓ ${amount.toLocaleString()} sent via ACH
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Confirmation #{confirmationId}
                    </p>
                  </div>
                  <Button className="w-full" onClick={() => setStep("idle")}>
                    Done
                  </Button>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      )}
    </>
  );
}
