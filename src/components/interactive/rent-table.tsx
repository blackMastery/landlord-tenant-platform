"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatusClass } from "@/lib/status";
import type { PaymentStatus } from "@/lib/mock-data";

type RentRow = {
  id: string;
  tenant: string;
  unit: string;
  property: string;
  amount: number;
  status: PaymentStatus;
  dueDate: string;
};

const filters: Array<"All" | PaymentStatus> = ["All", "Paid", "Due", "Late"];

export function RentTable({ rentRoll }: { rentRoll: RentRow[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filteredRows = useMemo(() => {
    if (filter === "All") return rentRoll;
    return rentRoll.filter((row) => row.status === filter);
  }, [filter, rentRoll]);

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        {filters.map((label) => (
          <Button
            key={label}
            size="sm"
            variant={label === filter ? "default" : "secondary"}
            onClick={() => setFilter(label)}
          >
            {label}
          </Button>
        ))}
      </div>
      {/* Mobile card view */}
      <div className="sm:hidden space-y-2">
        {filteredRows.map((row) => (
          <div key={`${row.tenant}-${row.unit}-m`} className="flex flex-col gap-1.5 rounded-lg border bg-white p-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium">{row.tenant}</span>
              <Badge className={getStatusClass(row.status)}>{row.status}</Badge>
            </div>
            <div className="text-muted-foreground">{row.unit} · {row.property}</div>
            <div className="flex items-center justify-between">
              <span>${row.amount.toLocaleString()} · Due {row.dueDate}</span>
              <Button size="sm" variant="outline" asChild>
                <Link href={`/manager/payments/${row.id}`}>View</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden sm:block w-full overflow-x-auto">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tenant</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Property</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRows.map((row) => (
            <TableRow key={`${row.tenant}-${row.unit}`}>
              <TableCell className="font-medium">{row.tenant}</TableCell>
              <TableCell>{row.unit}</TableCell>
              <TableCell>{row.property}</TableCell>
              <TableCell>${row.amount.toLocaleString()}</TableCell>
              <TableCell>
                <Badge className={getStatusClass(row.status)}>
                  {row.status}
                </Badge>
              </TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/manager/payments/${row.id}`}>View</Link>
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
