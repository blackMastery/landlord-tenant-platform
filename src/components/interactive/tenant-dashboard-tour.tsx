"use client";

import { driver } from "driver.js";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function TenantDashboardTour() {
  function startTour() {
    const d = driver({
      showProgress: true,
      allowClose: true,
      overlayOpacity: 0.5,
      stagePadding: 8,
      steps: [
        {
          element: "#tenant-tour-nav",
          popover: {
            title: "Your Resident Hub",
            description:
              "Use these tabs to move between your Dashboard, Payments, Maintenance Requests, and Messages — everything you need as a tenant in one place.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#tenant-tour-portal-card",
          popover: {
            title: "Tenancy Overview",
            description:
              "Your key details at a glance — monthly rent amount, next due date, lease end date, and whether auto-pay is enabled. Use the buttons to make a payment or message your manager.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tenant-tour-payment-history",
          popover: {
            title: "Payment History",
            description:
              "A summary of your recent rent payments. Head to the Payments tab to see your full 6-month history, pay rent now, or toggle auto-pay.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tenant-tour-messages",
          popover: {
            title: "Messages",
            description:
              "Recent conversations with your property manager. Click any thread to continue the conversation, or open the Messages tab for the full inbox.",
            side: "top",
            align: "end",
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
