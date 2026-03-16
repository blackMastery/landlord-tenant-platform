"use server";

import type { ApplicationStatus } from "@/lib/mock-data";

export type ReviewState = {
  status: "idle" | "success" | "error";
  message: string;
  newStatus?: ApplicationStatus;
};

export async function updateApplicationStatus(
  _prev: ReviewState,
  formData: FormData
): Promise<ReviewState> {
  const applicationId = formData.get("applicationId") as string;
  const newStatus = formData.get("newStatus") as ApplicationStatus;
  const followUpNote = (formData.get("followUpNote") as string)?.trim();

  if (!applicationId || !newStatus) {
    return { status: "error", message: "Invalid request." };
  }

  // Mock persistence — in production this would update the database
  console.log("[mock] Application status updated:", {
    applicationId,
    newStatus,
    followUpNote: followUpNote || "(none)",
  });

  const noteText = followUpNote ? ` Note saved: "${followUpNote}"` : "";

  return {
    status: "success",
    message: `Application marked as "${newStatus}".${noteText}`,
    newStatus,
  };
}
