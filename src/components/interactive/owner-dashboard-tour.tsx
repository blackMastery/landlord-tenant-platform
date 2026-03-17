"use client";

import { driver } from "driver.js";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function OwnerDashboardTour() {
  function startTour() {
    const d = driver({
      showProgress: true,
      allowClose: true,
      overlayOpacity: 0.5,
      stagePadding: 8,
      steps: [
        {
          element: "#owner-tour-nav",
          popover: {
            title: "Owner Portal Navigation",
            description:
              "Move between your Overview, Financial Reports, Maintenance Oversight, and Rental Applications — full portfolio visibility without daily operations.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#owner-tour-metrics",
          popover: {
            title: "Portfolio KPIs",
            description:
              "Four headline numbers: total properties, total units, average occupancy, and active maintenance tickets — your portfolio health at a glance.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#owner-tour-portal",
          popover: {
            title: "Financial Performance",
            description:
              "Monthly rental income, maintenance expenses, occupancy rate, and net profit — each with a month-over-month trend. The profit summary table breaks it down per property. Download a statement or jump to full reports.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#owner-tour-capital",
          popover: {
            title: "Capital Planning",
            description:
              "Upcoming capital expenditures with projected costs and timelines. Use this to anticipate large investments and their impact on net cash flow.",
            side: "top",
            align: "start",
          },
        },
      ],
    });
    d.drive();
  }

  return (
    <Button variant="outline" size="sm" onClick={startTour} className="gap-1.5">
      <MapPin className="h-4 w-4" />
      Take a Tour
    </Button>
  );
}
