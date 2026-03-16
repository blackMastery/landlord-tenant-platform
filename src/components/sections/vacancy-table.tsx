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
      </CardContent>
    </Card>
  );
}
