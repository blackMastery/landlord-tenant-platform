import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStatusClass } from "@/lib/status";
import type { Listing } from "@/lib/mock-data";

export function ListingCards({ listings }: { listings: Listing[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((listing) => (
        <Card key={listing.id} className="bg-white/90">
          <CardHeader>
            <CardTitle className="text-xl">{listing.property}</CardTitle>
            <CardDescription>{listing.location}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-bold">
                ${listing.rent.toLocaleString()}
              </span>
              <span className="text-sm text-muted-foreground">/mo</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Unit {listing.unit}</span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground">Beds</p>
                <p className="font-medium">{listing.bedrooms}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Baths</p>
                <p className="font-medium">{listing.bathrooms}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Sqft</p>
                <p className="font-medium">{listing.sqft.toLocaleString()}</p>
              </div>
            </div>
            <Badge className={getStatusClass(listing.status)}>
              {listing.availability}
            </Badge>
            <Button asChild className="w-full">
              <Link href={`/listings/${listing.id}`}>View Listing</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
