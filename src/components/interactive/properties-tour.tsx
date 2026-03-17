"use client";

import { driver } from "driver.js";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function PropertiesTour() {
  function startTour() {
    const d = driver({
      showProgress: true,
      allowClose: true,
      overlayOpacity: 0.5,
      stagePadding: 8,
      steps: [
        {
          element: "#tour-prop-header",
          popover: {
            title: "Property Management",
            description:
              "This is your property list. Use the search field to find a property by name, or click New Property to add one. Bulk Import lets you upload multiple properties at once via CSV.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#tour-prop-cards",
          popover: {
            title: "Property Cards",
            description:
              "Each card shows the property name, city, owner, total units, and how many are currently occupied. Click the card title to open the full property detail page.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#tour-prop-tabs",
          popover: {
            title: "In-Page Drilldown",
            description:
              "Select a property from the list above, then switch between the Units, Tenants, Payments, and Maintenance tabs to explore its data — all without navigating away from this page.",
            side: "top",
            align: "center",
          },
        },
      ],
    });
    d.drive();
  }

  return (
    <Button variant="outline" size="sm" onClick={startTour} className="gap-1.5 shrink-0">
      <MapPin className="h-4 w-4" />
      Take a Tour
    </Button>
  );
}
