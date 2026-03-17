"use client";

import { driver } from "driver.js";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function PropertyDetailTour() {
  function startTour() {
    const d = driver({
      showProgress: true,
      allowClose: true,
      overlayOpacity: 0.5,
      stagePadding: 8,
      steps: [
        {
          element: "#tour-detail-info",
          popover: {
            title: "Property Info",
            description:
              "Core details for this property: owner name, total unit count, how many are currently occupied, and any active notes from the property manager.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#tour-detail-progress",
          popover: {
            title: "Occupancy Rate",
            description:
              "The bar gives you an at-a-glance view of how full this property is. A full bar means 100% occupied — any gap represents vacant units.",
            side: "top",
            align: "center",
          },
        },
        {
          element: "#tour-detail-links",
          popover: {
            title: "Quick Links",
            description:
              "Jump directly into Units, Tenants, or Payments — each filtered to this property only — so you never lose context while investigating an issue.",
            side: "top",
            align: "center",
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
