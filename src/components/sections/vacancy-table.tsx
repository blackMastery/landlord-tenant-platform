import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getStatusClass } from "@/lib/status";

export function VacancyTable({
  vacancies,
}: {
  vacancies: Array<{
    id: string;
    unit: string;
    property: string;
    rent: number;
    status: string;
    availability: string;
  }>;
}) {
  return (
    <Card className="bg-white/90">
      <CardContent className="p-0">
        {/* Mobile card view */}
        <div className="sm:hidden divide-y">
          {vacancies.map((vacancy) => (
            <div key={`${vacancy.property}-${vacancy.unit}-m`} className="flex flex-col gap-1.5 p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-medium">{vacancy.unit} · {vacancy.property}</span>
                <Badge className={getStatusClass(vacancy.status)}>{vacancy.status}</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">${vacancy.rent.toLocaleString()}/mo · {vacancy.availability}</span>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/manager/vacancies/${vacancy.id}`}>View</Link>
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
              <TableHead>Unit</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Rent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vacancies.map((vacancy) => (
              <TableRow key={`${vacancy.property}-${vacancy.unit}`}>
                <TableCell className="font-medium">{vacancy.unit}</TableCell>
                <TableCell>{vacancy.property}</TableCell>
                <TableCell>${vacancy.rent.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge className={getStatusClass(vacancy.status)}>
                    {vacancy.status}
                  </Badge>
                </TableCell>
                <TableCell>{vacancy.availability}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" asChild>
                    <Link href={`/manager/vacancies/${vacancy.id}`}>
                      View Listing
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
