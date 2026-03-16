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
          className="w-full sm:w-64"
        />
        <Button variant="outline">Filter</Button>
      </div>
      {/* Mobile card view */}
      <div className="sm:hidden space-y-2">
        {filteredUnits.map((unit) => (
          <div key={`${unit.property}-${unit.unit}-m`} className="flex flex-col gap-1.5 rounded-lg border bg-white p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium">{unit.unit} · {unit.property}</span>
              <Badge className={getStatusClass(unit.status)}>{unit.status}</Badge>
            </div>
            <div className="text-muted-foreground">
              {unit.tenant} · ${unit.rent.toLocaleString()}/mo
            </div>
            <div className="text-muted-foreground text-xs">
              Lease: {unit.leaseStart} – {unit.leaseEnd}
            </div>
            <div className="flex gap-2 pt-1">
              <Button size="sm" variant="outline" asChild className="flex-1">
                <Link href={`/manager/units/${unit.id}`}>View</Link>
              </Button>
              <Button size="sm" variant="ghost" className="flex-1">Message</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block w-full overflow-x-auto">
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
    </div>
  );
}
