"use server";

export type ApplicationFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitApplication(
  _prev: ApplicationFormState,
  formData: FormData
): Promise<ApplicationFormState> {
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;

  if (!fullName?.trim() || !email?.trim()) {
    return { status: "error", message: "Full name and email are required." };
  }

  // Mock persistence — log the application data
  console.log("[mock] Application received:", {
    listingId: formData.get("listingId"),
    fullName,
    email,
    phone: formData.get("phone"),
    moveInDate: formData.get("moveInDate"),
    monthlyIncome: formData.get("monthlyIncome"),
    employer: formData.get("employer"),
    notes: formData.get("notes"),
  });

  return {
    status: "success",
    message: `Application submitted for ${fullName}. We'll be in touch at ${email} within 2 business days.`,
  };
}
