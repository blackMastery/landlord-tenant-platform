import { notFound } from "next/navigation";
import { PublicShell } from "@/components/layout/public-shell";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ApplicationForm } from "@/components/interactive/application-form";
import { findListing } from "@/lib/record-helpers";

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = findListing(id);

  if (!listing) notFound();

  return (
    <PublicShell
      title="Rental Application"
      subtitle={`${listing.property} — Unit ${listing.unit}`}
    >
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Listings", href: "/listings" },
          { label: listing.unit, href: `/listings/${listing.id}` },
          { label: "Apply" },
        ]}
      />
      <ApplicationForm
        listingId={listing.id}
        listingLabel={`Unit ${listing.unit} at ${listing.property}`}
      />
    </PublicShell>
  );
}
