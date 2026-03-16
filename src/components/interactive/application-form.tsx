"use client";

import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  submitApplication,
  type ApplicationFormState,
} from "@/app/listings/actions";

const initialState: ApplicationFormState = { status: "idle", message: "" };

export function ApplicationForm({
  listingId,
  listingLabel,
}: {
  listingId: string;
  listingLabel: string;
}) {
  const [state, formAction, isPending] = useActionState(
    submitApplication,
    initialState
  );

  if (state.status === "success") {
    return (
      <Card className="bg-white/90">
        <CardHeader>
          <CardTitle>Application Submitted</CardTitle>
          <CardDescription>{state.message}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="outline">
            <Link href="/listings">Browse More Listings</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle>Apply for {listingLabel}</CardTitle>
        <CardDescription>
          Fill in the form below. We&apos;ll review your application within 2
          business days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="listingId" value={listingId} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="fullName" className="text-sm font-medium">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Jane Smith"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">
                Email <span className="text-rose-500">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@email.com"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="555-000-0000"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="moveInDate" className="text-sm font-medium">
                Desired Move-in Date
              </label>
              <Input id="moveInDate" name="moveInDate" type="date" />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <label htmlFor="monthlyIncome" className="text-sm font-medium">
                Monthly Income ($)
              </label>
              <Input
                id="monthlyIncome"
                name="monthlyIncome"
                type="number"
                placeholder="e.g. 7500"
                min={0}
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="employer" className="text-sm font-medium">
                Current Employer
              </label>
              <Input
                id="employer"
                name="employer"
                type="text"
                placeholder="Company name"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="notes" className="text-sm font-medium">
              Additional Notes
            </label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="Pets, special requests, questions for the manager…"
              rows={4}
            />
          </div>

          {state.status === "error" && (
            <p className="text-sm text-rose-600">{state.message}</p>
          )}

          <Button
            type="submit"
            disabled={isPending}
            className="w-full sm:w-auto"
          >
            {isPending ? "Submitting…" : "Submit Application"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
