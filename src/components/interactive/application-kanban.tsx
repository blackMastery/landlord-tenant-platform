"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getStatusClass } from "@/lib/status";
import type { Application, ApplicationStatus } from "@/lib/mock-data";

const COLUMNS: ApplicationStatus[] = ["Submitted", "Under Review", "Approved", "Rejected"];

const columnColors: Record<ApplicationStatus, string> = {
  Submitted: "border-blue-200 bg-blue-50/50",
  "Under Review": "border-amber-200 bg-amber-50/50",
  Approved: "border-emerald-200 bg-emerald-50/50",
  Rejected: "border-rose-200 bg-rose-50/50",
};

const TRANSITIONS: Record<ApplicationStatus, ApplicationStatus[]> = {
  Submitted: ["Under Review", "Rejected"],
  "Under Review": ["Approved", "Rejected"],
  Approved: [],
  Rejected: ["Submitted"],
};

export function ApplicationKanban({
  initialApplications,
}: {
  initialApplications: Application[];
}) {
  const [apps, setApps] = useState(initialApplications);

  function move(id: string, to: ApplicationStatus) {
    setApps((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: to } : a))
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {COLUMNS.map((col) => {
        const colApps = apps.filter((a) => a.status === col);
        return (
          <div
            key={col}
            className={`rounded-2xl border p-3 space-y-3 ${columnColors[col]}`}
          >
            {/* Column header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{col}</h3>
              <span className="text-xs text-muted-foreground bg-white rounded-full px-2 py-0.5 border">
                {colApps.length}
              </span>
            </div>

            {/* Cards */}
            {colApps.map((app) => (
              <div
                key={app.id}
                className="rounded-xl border bg-white shadow-sm p-3 space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium leading-tight">{app.fullName}</p>
                  <Badge className={getStatusClass(app.status)}>{app.status}</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {app.property} · {app.unit}
                </p>
                <p className="text-xs text-muted-foreground">
                  ${app.monthlyIncome.toLocaleString()}/mo · Move-in {app.moveInDate}
                </p>
                <p className="text-xs text-muted-foreground">
                  Submitted {app.submittedAt}
                </p>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {TRANSITIONS[app.status].map((next) => (
                    <Button
                      key={next}
                      size="sm"
                      variant={
                        next === "Approved"
                          ? "default"
                          : next === "Rejected"
                          ? "destructive"
                          : "outline"
                      }
                      className="h-6 text-xs px-2"
                      onClick={() => move(app.id, next)}
                    >
                      {next === "Approved"
                        ? "Approve"
                        : next === "Rejected"
                        ? "Reject"
                        : next === "Under Review"
                        ? "Start Review"
                        : "Reopen"}
                    </Button>
                  ))}
                  <Button size="sm" variant="outline" className="h-6 text-xs px-2" asChild>
                    <Link href={`/owner/applications/${app.id}`}>View</Link>
                  </Button>
                </div>
              </div>
            ))}

            {colApps.length === 0 && (
              <p className="text-xs text-muted-foreground text-center py-4">
                No applications
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
