import { listings } from "@/lib/mock-data";
import { PublicShell } from "@/components/layout/public-shell";
import { ListingCards } from "@/components/sections/listing-cards";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { SectionHeader } from "@/components/layout/section-header";

export default function ListingsPage() {
  return (
    <PublicShell title="Available Rentals" subtitle="Browse open units">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Listings" }]}
      />
      <section className="space-y-6">
        <SectionHeader
          title="Available Units"
          description={`${listings.length} listing${listings.length !== 1 ? "s" : ""} available across all properties.`}
        />
        <ListingCards listings={listings} />
      </section>
    </PublicShell>
  );
}
