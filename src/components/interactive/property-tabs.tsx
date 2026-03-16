"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatusClass } from "@/lib/status";
import type { PaymentStatus, TicketStatus } from "@/lib/mock-data";

type Property = {
  id: string;
  name: string;
  location: string;
  owner: string;
  totalUnits: number;
  occupiedUnits: number;
  notes: string;
};

type UnitRow = {
  unit: string;
  property: string;
  status: string;
  tenant: string;
  rent: number;
  deposit: number;
  leaseStart: string;
  leaseEnd: string;
};

type RentRow = {
  tenant: string;
  unit: string;
  property: string;
  amount: number;
  status: PaymentStatus;
  dueDate: string;
};

type Ticket = {
  id: string;
  unit: string;
  property: string;
  tenant: string;
  issue: string;
  status: TicketStatus;
  priority: string;
  vendor: string;
};

export function PropertyTabs({
  properties,
  units,
  rentRoll,
  maintenanceTickets,
}: {
  properties: Property[];
  units: UnitRow[];
  rentRoll: RentRow[];
  maintenanceTickets: Ticket[];
}) {
  const [selectedId, setSelectedId] = useState(properties[0]?.id ?? "");

  const selectedProperty = useMemo(
    () => properties.find((property) => property.id === selectedId),
    [properties, selectedId]
  );

  const scopedUnits = useMemo(
    () => units.filter((unit) => unit.property === selectedProperty?.name),
    [selectedProperty?.name, units]
  );

  const scopedPayments = useMemo(
    () => rentRoll.filter((row) => row.property === selectedProperty?.name),
    [selectedProperty?.name, rentRoll]
  );

  const scopedTickets = useMemo(
    () =>
      maintenanceTickets.filter(
        (ticket) => ticket.property === selectedProperty?.name
      ),
    [maintenanceTickets, selectedProperty?.name]
  );

  const tenants = useMemo(
    () =>
      scopedUnits
        .filter((unit) => unit.tenant !== "N/A")
        .map((unit) => ({
          tenant: unit.tenant,
          unit: unit.unit,
          status: unit.status,
        })),
    [scopedUnits]
  );

  if (!selectedProperty) return null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {properties.map((property) => (
          <Button
            key={property.id}
            variant={property.id === selectedId ? "default" : "outline"}
            onClick={() => setSelectedId(property.id)}
          >
            {property.name}
          </Button>
        ))}
      </div>

      <Tabs defaultValue="units" className="space-y-4">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="units">Units</TabsTrigger>
          <TabsTrigger value="tenants">Tenants</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="units" className="space-y-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tenant</TableHead>
                <TableHead>Rent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scopedUnits.map((unit) => (
                <TableRow key={unit.unit}>
                  <TableCell className="font-medium">{unit.unit}</TableCell>
                  <TableCell>
                    <Badge className={getStatusClass(unit.status)}>
                      {unit.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{unit.tenant}</TableCell>
                  <TableCell>${unit.rent.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="tenants">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={`${tenant.tenant}-${tenant.unit}`}>
                  <TableCell className="font-medium">
                    {tenant.tenant}
                  </TableCell>
                  <TableCell>{tenant.unit}</TableCell>
                  <TableCell>
                    <Badge className={getStatusClass(tenant.status)}>
                      {tenant.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="payments">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scopedPayments.map((row) => (
                <TableRow key={`${row.tenant}-${row.unit}`}>
                  <TableCell className="font-medium">{row.tenant}</TableCell>
                  <TableCell>{row.unit}</TableCell>
                  <TableCell>${row.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusClass(row.status)}>
                      {row.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="maintenance">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vendor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scopedTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.unit}</TableCell>
                  <TableCell>{ticket.issue}</TableCell>
                  <TableCell>
                    <Badge className={getStatusClass(ticket.status)}>
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{ticket.vendor}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
