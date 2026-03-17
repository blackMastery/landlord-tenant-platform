"use client";

import { driver } from "driver.js";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function VendorDashboardTour() {
  function startTour() {
    const d = driver({
      showProgress: true,
      allowClose: true,
      overlayOpacity: 0.5,
      stagePadding: 8,
      steps: [
        {
          element: "#vendor-tour-nav",
          popover: {
            title: "Vendor Portal Navigation",
            description:
              "Switch between your Overview, Jobs list, Progress Updates, and Messages — your full workflow in four tabs.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#vendor-tour-jobs",
          popover: {
            title: "Assigned Work Orders",
            description:
              "All active jobs routed to your team. Click View on any row to open the full work order, update its status, and log progress notes visible to the property manager.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#vendor-tour-notes",
          popover: {
            title: "Vendor Notes",
            description:
              "A running log of updates from your team — parts orders, access requests, and completion photos. These are visible to the property manager in real time.",
            side: "top",
            align: "end",
          },
        },
        {
          element: "#vendor-tour-sla",
          popover: {
            title: "Service Level Targets",
            description:
              "Your response time commitments by priority: Emergency (2h), High (6h), Standard (24h). Staying within these keeps your vendor rating healthy.",
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
