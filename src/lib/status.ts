export const statusClasses: Record<string, string> = {
  Paid: "bg-emerald-100 text-emerald-700",
  Due: "bg-amber-100 text-amber-700",
  Late: "bg-rose-100 text-rose-700",
  Pending: "bg-amber-100 text-amber-700",
  "In Progress": "bg-blue-100 text-blue-700",
  Completed: "bg-emerald-100 text-emerald-700",
  Vacant: "bg-slate-100 text-slate-700",
  Occupied: "bg-emerald-100 text-emerald-700",
  "Notice Given": "bg-amber-100 text-amber-700",
  Published: "bg-emerald-100 text-emerald-700",
  "Listing Draft": "bg-slate-100 text-slate-700",
  Submitted: "bg-blue-100 text-blue-700",
  "Under Review": "bg-amber-100 text-amber-700",
  Approved: "bg-emerald-100 text-emerald-700",
  Rejected: "bg-rose-100 text-rose-700",
  Renewed: "bg-emerald-100 text-emerald-700",
  "Sent Offer": "bg-blue-100 text-blue-700",
  "Not Renewing": "bg-rose-100 text-rose-700",
};

export const getStatusClass = (status: string) =>
  statusClasses[status] ?? "bg-slate-100 text-slate-700";
