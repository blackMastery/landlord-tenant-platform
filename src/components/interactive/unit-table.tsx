"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatusClass } from "@/lib/status";

type UnitRow = {
  id: string;
  unit: string;
  property: string;
  status: string;
  tenant: string;
  rent: number;
  deposit: number;
  leaseStart: string;
  leaseEnd: string;
};

export function UnitTable({ units }: { units: UnitRow[] }) {
  const [query, setQuery] = useState("");

  const filteredUnits = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return units;
    return units.filter((unit) => {
      const haystack = `${unit.unit} ${unit.property} ${unit.tenant}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query, units]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search unit, tenant, or property"
          className="w-64"
        />
        <Button variant="outline">Filter</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Unit</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Tenant</TableHead>
            <TableHead>Rent</TableHead>
            <TableHead>Deposit</TableHead>
            <TableHead>Lease</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUnits.map((unit) => (
            <TableRow key={`${unit.property}-${unit.unit}`}>
              <TableCell className="font-medium">{unit.unit}</TableCell>
              <TableCell>{unit.property}</TableCell>
              <TableCell>
                <Badge className={getStatusClass(unit.status)}>
                  {unit.status}
                </Badge>
              </TableCell>
              <TableCell>{unit.tenant}</TableCell>
              <TableCell>${unit.rent.toLocaleString()}</TableCell>
              <TableCell>${unit.deposit.toLocaleString()}</TableCell>
              <TableCell>
                {unit.leaseStart} - {unit.leaseEnd}
              </TableCell>
              <TableCell className="space-x-2">
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/manager/units/${unit.id}`}>View</Link>
                </Button>
                <Button size="sm" variant="ghost">
                  Message
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
