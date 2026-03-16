import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicShell } from "@/components/layout/public-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { findListing } from "@/lib/record-helpers";
import { getStatusClass } from "@/lib/status";

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = findListing(id);

  if (!listing) notFound();

  return (
    <PublicShell
      title={listing.property}
      subtitle={listing.location}
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: `${listing.property} · ${listing.unit}` },
        ]}
      />

      <Card className="bg-white/90">
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <CardTitle className="text-2xl">
                Unit {listing.unit} — {listing.property}
              </CardTitle>
              <CardDescription className="text-base">
                {listing.location}
              </CardDescription>
            </div>
            <Badge className={getStatusClass(listing.status)}>
              {listing.availability}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">
              ${listing.rent.toLocaleString()}
            </span>
            <span className="text-muted-foreground">/mo</span>
          </div>

          <div className="grid grid-cols-3 gap-4 rounded-xl border p-4 text-sm sm:grid-cols-3">
            <div>
              <p className="text-muted-foreground">Bedrooms</p>
              <p className="text-lg font-semibold">{listing.bedrooms}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Bathrooms</p>
              <p className="text-lg font-semibold">{listing.bathrooms}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Sq Ft</p>
              <p className="text-lg font-semibold">
                {listing.sqft.toLocaleString()}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              About this unit
            </h3>
            <p className="text-sm leading-relaxed">{listing.description}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Amenities
            </h3>
            <div className="flex flex-wrap gap-2">
              {listing.amenities.map((amenity) => (
                <Badge key={amenity} variant="secondary">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t pt-4 sm:flex-row">
            <Button asChild className="w-full sm:w-auto">
              <Link href={`/listings/${listing.id}/apply`}>Apply Now</Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/listings">Back to Listings</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </PublicShell>
  );
}
