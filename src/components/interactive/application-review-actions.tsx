"use client";

import { useActionState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { getStatusClass } from "@/lib/status";
import type { ApplicationStatus } from "@/lib/mock-data";
import {
  updateApplicationStatus,
  type ReviewState,
} from "@/app/owner/applications/actions";

const initialState: ReviewState = { status: "idle", message: "" };

export function ApplicationReviewActions({
  applicationId,
  currentStatus,
}: {
  applicationId: string;
  currentStatus: ApplicationStatus;
}) {
  const [state, formAction, isPending] = useActionState(
    updateApplicationStatus,
    initialState
  );

  const displayStatus = state.newStatus ?? currentStatus;

  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle>Review Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <input type="hidden" name="applicationId" value={applicationId} />

          <div className="space-y-1">
            <p className="text-sm font-medium">Current Status</p>
            <Badge className={getStatusClass(displayStatus)}>
              {displayStatus}
            </Badge>
          </div>

          <div className="space-y-1">
            <p className="text-sm font-medium">Update Status</p>
            <div className="flex flex-wrap gap-2">
              <Button
                type="submit"
                size="sm"
                variant="outline"
                name="newStatus"
                value="Under Review"
                disabled={
                  isPending ||
                  displayStatus === "Under Review" ||
                  displayStatus === "Approved" ||
                  displayStatus === "Rejected"
                }
              >
                Mark Under Review
              </Button>
              <Button
                type="submit"
                size="sm"
                name="newStatus"
                value="Approved"
                disabled={isPending || displayStatus === "Approved"}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Approve
              </Button>
              <Button
                type="submit"
                size="sm"
                variant="destructive"
                name="newStatus"
                value="Rejected"
                disabled={isPending || displayStatus === "Rejected"}
              >
                Reject
              </Button>
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="followUpNote" className="text-sm font-medium">
              Follow-up Note
            </label>
            <Textarea
              id="followUpNote"
              name="followUpNote"
              placeholder="Add a note about this applicant or next steps…"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            name="newStatus"
            value={displayStatus}
            variant="outline"
            disabled={isPending}
            className="w-full sm:w-auto"
          >
            {isPending ? "Saving…" : "Save Note"}
          </Button>

          {state.status === "success" && (
            <p className="text-sm text-emerald-600">{state.message}</p>
          )}
          {state.status === "error" && (
            <p className="text-sm text-rose-600">{state.message}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
