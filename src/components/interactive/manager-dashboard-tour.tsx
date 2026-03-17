"use client";

import { driver } from "driver.js";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function ManagerDashboardTour() {
  function startTour() {
    const d = driver({
      showProgress: true,
      allowClose: true,
      overlayOpacity: 0.5,
      stagePadding: 8,
      popoverClass: "driverjs-theme",
      steps: [
        {
          element: "#tour-manager-nav",
          popover: {
            title: "Portal Navigation",
            description:
              "Jump between any section of the manager portal — Properties, Units, Payments, Maintenance, Vacancies, Leases, and Messages.",
            side: "bottom",
            align: "start",
          },
        },
        {
          element: "#tour-hero",
          popover: {
            title: "Portfolio Overview",
            description:
              "Your three headline KPIs — Portfolio Health, Net Cash Flow, and Maintenance SLA — are always visible at the top.",
            side: "bottom",
            align: "center",
          },
        },
        {
          element: "#tour-kpis",
          popover: {
            title: "KPI Dashboard",
            description:
              "Eight portfolio metrics at a glance: total units, occupancy rate, rent collected, outstanding balances, maintenance tickets, and upcoming lease expirations. Alerts and expiring leases are surfaced here too.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tour-property-mgmt",
          popover: {
            title: "Property Management",
            description:
              "All your properties in one place. Click any property card to open its full detail page, or use the tabs below to drill into Units, Tenants, Payments, or Maintenance without leaving this view.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tour-units",
          popover: {
            title: "Unit Management",
            description:
              "Search and filter every unit across all properties. See tenant name, rent amount, deposit, lease start/end, and occupancy status — with quick links to message the tenant.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tour-rent",
          popover: {
            title: "Rent Tracking",
            description:
              "Filter the rent roll by All, Paid, Due, or Late status. Send payment reminders or record a manual payment directly from this table.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tour-maintenance",
          popover: {
            title: "Maintenance Management",
            description:
              "Route tickets to vendors and track status from Pending → In Progress → Completed. The Vendor Workload panel shows active jobs and average response times per vendor.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tour-vacancies",
          popover: {
            title: "Vacancy Management",
            description:
              "See which units are vacant, which listings are published, and which are still drafts. Publish a new listing or schedule a viewing from the action buttons.",
            side: "top",
            align: "start",
          },
        },
        {
          element: "#tour-messages",
          popover: {
            title: "Messaging Hub",
            description:
              "Active conversation threads with tenants, owners, and vendors. Start a new message or group thread without leaving the dashboard.",
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
