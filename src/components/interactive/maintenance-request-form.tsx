"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getStatusClass } from "@/lib/status";
import type { TicketStatus, UrgencyLevel } from "@/lib/mock-data";

type Request = {
  id: string;
  category: string;
  description: string;
  urgency: UrgencyLevel;
  status: TicketStatus;
  submittedAt: string;
  updatedAt: string;
};

const CATEGORIES = ["Plumbing", "HVAC", "Electrical", "Appliances", "Doors & Locks", "Other"];
const URGENCIES: UrgencyLevel[] = ["Low", "Medium", "High", "Emergency"];

const urgencyColor: Record<UrgencyLevel, string> = {
  Low: "bg-slate-100 text-slate-700",
  Medium: "bg-amber-100 text-amber-700",
  High: "bg-orange-100 text-orange-700",
  Emergency: "bg-rose-100 text-rose-700",
};

export function MaintenanceRequestForm({
  initialRequests,
}: {
  initialRequests: Request[];
}) {
  const [requests, setRequests] = useState<Request[]>(initialRequests);
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [urgency, setUrgency] = useState<UrgencyLevel>("Low");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newReq: Request = {
      id: `tmr-${Date.now()}`,
      category,
      description,
      urgency,
      status: "Pending",
      submittedAt: new Date().toISOString().slice(0, 10),
      updatedAt: new Date().toISOString().slice(0, 10),
    };
    setRequests((prev) => [newReq, ...prev]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setDescription("");
      setCategory(CATEGORIES[0]);
      setUrgency("Low");
    }, 2000);
  }

  return (
    <div className="space-y-4">
      {/* Existing requests */}
      <Card className="bg-white/90">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>My Requests</CardTitle>
            <CardDescription>Track your open and past maintenance tickets.</CardDescription>
          </div>
          <Button size="sm" onClick={() => setShowForm((v) => !v)}>
            {showForm ? "Cancel" : "+ New Request"}
          </Button>
        </CardHeader>
        <CardContent className="space-y-3">
          {requests.map((req) => (
            <div
              key={req.id}
              className="rounded-xl border p-3 space-y-1.5"
            >
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-sm font-medium">{req.category}</span>
                <div className="flex gap-2">
                  <Badge className={urgencyColor[req.urgency]}>{req.urgency}</Badge>
                  <Badge className={getStatusClass(req.status)}>{req.status}</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{req.description}</p>
              <p className="text-xs text-muted-foreground">
                Submitted {req.submittedAt} · Updated {req.updatedAt}
              </p>
            </div>
          ))}
          {requests.length === 0 && (
            <p className="text-sm text-muted-foreground py-2">No requests yet.</p>
          )}
        </CardContent>
      </Card>

      {/* New request form */}
      {showForm && (
        <Card className="bg-white/90 border-dashed">
          <CardHeader>
            <CardTitle>New Maintenance Request</CardTitle>
            <CardDescription>
              Describe the issue and we&apos;ll dispatch a vendor as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-emerald-700 font-medium">
                ✓ Request submitted — your property manager has been notified.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Category *</label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium">Urgency *</label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value as UrgencyLevel)}
                      required
                    >
                      {URGENCIES.map((u) => (
                        <option key={u} value={u}>{u}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Description *</label>
                  <textarea
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[80px] resize-none"
                    placeholder="Describe the issue in detail…"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium">Photo (optional)</label>
                  <div className="rounded-xl border-2 border-dashed border-input p-6 text-center text-sm text-muted-foreground cursor-pointer hover:bg-slate-50 transition-colors">
                    Click to upload or drag & drop a photo
                  </div>
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Submit Request
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
