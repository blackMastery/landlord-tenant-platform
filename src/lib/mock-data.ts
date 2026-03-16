export type PaymentStatus = "Paid" | "Due" | "Late";
export type TicketStatus = "Pending" | "In Progress" | "Completed";
export type Priority = "Low" | "Medium" | "High";

export const managerProfile = {
  name: "Ariana Hale",
  portfolio: "Riverline Property Group",
  region: "Downtown + Riverside",
};

export const properties = [
  {
    id: "prop-eden",
    name: "Eden Court",
    location: "Austin, TX",
    owner: "Mila Santos",
    totalUnits: 24,
    occupiedUnits: 21,
    notes: "Renovated lobby, smart lock rollout in progress.",
  },
  {
    id: "prop-harbor",
    name: "Harborline Flats",
    location: "San Diego, CA",
    owner: "Jordan Myers",
    totalUnits: 18,
    occupiedUnits: 16,
    notes: "Lease-up campaign for 2 vacancies.",
  },
  {
    id: "prop-stillwater",
    name: "Stillwater Lofts",
    location: "Denver, CO",
    owner: "Kensington Partners",
    totalUnits: 32,
    occupiedUnits: 29,
    notes: "Elevator inspection scheduled for April 2.",
  },
];

export const units = [
  {
    id: "unit-eden-301",
    unit: "E-301",
    property: "Eden Court",
    status: "Occupied",
    tenant: "Nadia Ellis",
    rent: 2150,
    deposit: 1200,
    leaseStart: "2024-06-01",
    leaseEnd: "2025-05-31",
  },
  {
    id: "unit-eden-215",
    unit: "E-215",
    property: "Eden Court",
    status: "Occupied",
    tenant: "Rohan Patel",
    rent: 1980,
    deposit: 1100,
    leaseStart: "2024-03-15",
    leaseEnd: "2025-03-14",
  },
  {
    id: "unit-harbor-112",
    unit: "H-112",
    property: "Harborline Flats",
    status: "Vacant",
    tenant: "N/A",
    rent: 2450,
    deposit: 1300,
    leaseStart: "N/A",
    leaseEnd: "N/A",
  },
  {
    id: "unit-harbor-409",
    unit: "H-409",
    property: "Harborline Flats",
    status: "Occupied",
    tenant: "Camila Ruiz",
    rent: 2625,
    deposit: 1400,
    leaseStart: "2024-08-01",
    leaseEnd: "2025-07-31",
  },
  {
    id: "unit-stillwater-507",
    unit: "S-507",
    property: "Stillwater Lofts",
    status: "Occupied",
    tenant: "Leo Beckett",
    rent: 2890,
    deposit: 1600,
    leaseStart: "2024-10-01",
    leaseEnd: "2025-09-30",
  },
  {
    id: "unit-stillwater-204",
    unit: "S-204",
    property: "Stillwater Lofts",
    status: "Notice Given",
    tenant: "Imani Clark",
    rent: 2550,
    deposit: 1500,
    leaseStart: "2023-11-15",
    leaseEnd: "2024-11-14",
  },
];

export const rentRoll = [
  {
    id: "rent-eden-301",
    tenant: "Nadia Ellis",
    unit: "E-301",
    property: "Eden Court",
    amount: 2150,
    status: "Paid" as PaymentStatus,
    dueDate: "2025-03-01",
  },
  {
    id: "rent-eden-215",
    tenant: "Rohan Patel",
    unit: "E-215",
    property: "Eden Court",
    amount: 1980,
    status: "Late" as PaymentStatus,
    dueDate: "2025-03-01",
  },
  {
    id: "rent-harbor-409",
    tenant: "Camila Ruiz",
    unit: "H-409",
    property: "Harborline Flats",
    amount: 2625,
    status: "Paid" as PaymentStatus,
    dueDate: "2025-03-01",
  },
  {
    id: "rent-stillwater-507",
    tenant: "Leo Beckett",
    unit: "S-507",
    property: "Stillwater Lofts",
    amount: 2890,
    status: "Due" as PaymentStatus,
    dueDate: "2025-03-05",
  },
  {
    id: "rent-stillwater-204",
    tenant: "Imani Clark",
    unit: "S-204",
    property: "Stillwater Lofts",
    amount: 2550,
    status: "Due" as PaymentStatus,
    dueDate: "2025-03-05",
  },
];

export const maintenanceTickets = [
  {
    id: "mt-2041",
    unit: "E-215",
    property: "Eden Court",
    tenant: "Rohan Patel",
    issue: "HVAC not cooling",
    priority: "High" as Priority,
    status: "In Progress" as TicketStatus,
    vendor: "CoolAir Mechanical",
  },
  {
    id: "mt-2042",
    unit: "H-409",
    property: "Harborline Flats",
    tenant: "Camila Ruiz",
    issue: "Kitchen faucet leak",
    priority: "Medium" as Priority,
    status: "Pending" as TicketStatus,
    vendor: "Seaside Plumbing",
  },
  {
    id: "mt-2043",
    unit: "S-507",
    property: "Stillwater Lofts",
    tenant: "Leo Beckett",
    issue: "Hallway lighting outage",
    priority: "Low" as Priority,
    status: "Completed" as TicketStatus,
    vendor: "BrightSpark Electric",
  },
];

export const vacancies = [
  {
    id: "vac-harbor-112",
    unit: "H-112",
    property: "Harborline Flats",
    rent: 2450,
    status: "Listing Draft",
    availability: "Available Now",
  },
  {
    id: "vac-eden-410",
    unit: "E-410",
    property: "Eden Court",
    rent: 2280,
    status: "Published",
    availability: "Available Apr 12",
  },
  {
    id: "vac-stillwater-204",
    unit: "S-204",
    property: "Stillwater Lofts",
    rent: 2550,
    status: "Notice Given",
    availability: "Available May 01",
  },
];

export const ownerMetrics = [
  {
    label: "Monthly Rental Income",
    value: "$184,320",
    change: "+4.2% vs last month",
  },
  {
    label: "Maintenance Expenses",
    value: "$12,480",
    change: "-8.1% vs last month",
  },
  {
    label: "Portfolio Occupancy",
    value: "92.5%",
    change: "+1.6% vs last month",
  },
  {
    label: "Net Profit",
    value: "$128,640",
    change: "+3.4% vs last month",
  },
];

export const profitSummary = [
  {
    property: "Eden Court",
    income: 51200,
    expenses: 8200,
    net: 43000,
  },
  {
    property: "Harborline Flats",
    income: 44600,
    expenses: 9800,
    net: 34800,
  },
  {
    property: "Stillwater Lofts",
    income: 88520,
    expenses: 13580,
    net: 74940,
  },
];

export const notifications = [
  {
    label: "Late rent alert",
    detail: "Eden Court - Unit E-215 - Rohan Patel",
    time: "Today, 9:45 AM",
  },
  {
    label: "Maintenance request",
    detail: "Harborline Flats - Unit H-409 - Kitchen faucet leak",
    time: "Today, 8:20 AM",
  },
  {
    label: "Lease expiration",
    detail: "Stillwater Lofts - Unit S-204 - Lease ends Nov 14",
    time: "Yesterday, 3:10 PM",
  },
  {
    label: "Payment received",
    detail: "Harborline Flats - Unit H-409 - $2,625",
    time: "Yesterday, 11:02 AM",
  },
];

export const leaseExpirations = [
  {
    tenant: "Imani Clark",
    unit: "S-204",
    property: "Stillwater Lofts",
    leaseEnd: "2024-11-14",
  },
  {
    tenant: "Nadia Ellis",
    unit: "E-301",
    property: "Eden Court",
    leaseEnd: "2025-05-31",
  },
  {
    tenant: "Rohan Patel",
    unit: "E-215",
    property: "Eden Court",
    leaseEnd: "2025-03-14",
  },
];

export const vendorWorkload = [
  {
    vendor: "CoolAir Mechanical",
    specialty: "HVAC",
    active: 4,
    responseTime: "2h avg",
  },
  {
    vendor: "Seaside Plumbing",
    specialty: "Plumbing",
    active: 2,
    responseTime: "4h avg",
  },
  {
    vendor: "BrightSpark Electric",
    specialty: "Electrical",
    active: 1,
    responseTime: "6h avg",
  },
];

export const tenantSnapshot = {
  name: "Nadia Ellis",
  unit: "E-301",
  property: "Eden Court",
  rent: 2150,
  status: "Paid" as PaymentStatus,
  nextDue: "2025-04-01",
  autopay: "Enabled",
  leaseEnd: "2025-05-31",
};

export const vendorJobs = [
  {
    id: "job-3321",
    property: "Eden Court",
    unit: "E-215",
    tenant: "Rohan Patel",
    issue: "HVAC diagnostics",
    status: "In Progress",
  },
  {
    id: "job-3322",
    property: "Harborline Flats",
    unit: "H-409",
    tenant: "Camila Ruiz",
    issue: "Replace kitchen faucet",
    status: "Pending",
  },
  {
    id: "job-3323",
    property: "Stillwater Lofts",
    unit: "S-507",
    tenant: "Leo Beckett",
    issue: "Hallway lighting retrofit",
    status: "Completed",
  },
];

export const vendorNotes = [
  {
    id: "note-1",
    note: "Awaiting access approval for Eden Court HVAC room.",
    time: "Today, 8:10 AM",
  },
  {
    id: "note-2",
    note: "Parts order submitted for faucet replacement.",
    time: "Yesterday, 5:45 PM",
  },
  {
    id: "note-3",
    note: "Completed hallway lighting, photos uploaded.",
    time: "Yesterday, 1:12 PM",
  },
];

export const messageThreads = [
  {
    id: "thread-eden-late-rent",
    title: "Eden Court - Late rent follow-up",
    participants: "Ariana, Rohan",
    updated: "5 min ago",
  },
  {
    id: "thread-harbor-lease",
    title: "Harborline - New lease approvals",
    participants: "Ariana, Jordan, Leasing Team",
    updated: "40 min ago",
  },
  {
    id: "thread-stillwater-elevator",
    title: "Stillwater - Elevator inspection",
    participants: "Ariana, Kensington Partners",
    updated: "2 hrs ago",
  },
];

export const messagePreview = [
  {
    id: "msg-rohan-1",
    sender: "Rohan Patel",
    body: "I can pay the balance by Friday. Please confirm the late fee amount.",
    time: "2 min ago",
  },
  {
    id: "msg-coolair-1",
    sender: "CoolAir Mechanical",
    body: "Technician assigned. Arrival window 2-4 PM today.",
    time: "28 min ago",
  },
  {
    id: "msg-leasing-1",
    sender: "Leasing Team",
    body: "Two new applications submitted for H-112. Ready for review.",
    time: "1 hr ago",
  },
];

export const managerMetrics = [
  {
    label: "Total Properties",
    value: properties.length,
    helper: "Active portfolios",
  },
  {
    label: "Total Units",
    value: properties.reduce((sum, property) => sum + property.totalUnits, 0),
    helper: "Across all buildings",
  },
  {
    label: "Occupancy Rate",
    value: `${Math.round(
      (properties.reduce((sum, property) => sum + property.occupiedUnits, 0) /
        properties.reduce((sum, property) => sum + property.totalUnits, 0)) *
        100
    )}%`,
    helper: "Last 30 days",
  },
  {
    label: "Rent Collected (Monthly)",
    value: "$178,400",
    helper: "Processed since March 1",
  },
  {
    label: "Outstanding Rent",
    value: "$6,220",
    helper: "2 tenants late",
  },
  {
    label: "Maintenance Tickets",
    value: "7 Open",
    helper: "3 pending, 4 in progress",
  },
  {
    label: "Lease Expirations",
    value: "5 Upcoming",
    helper: "Next 90 days",
  },
  {
    label: "Vacant Units",
    value: "4",
    helper: "2 published listings",
  },
];

export const heroMetrics = [
  {
    label: "Portfolio Health",
    value: "92%",
    detail: "Occupancy score",
  },
  {
    label: "Cash Flow",
    value: "$128k",
    detail: "Net monthly",
  },
  {
    label: "Avg. Response",
    value: "3h 12m",
    detail: "Maintenance SLA",
  },
];

// ─── Public Listings ─────────────────────────────────────────────────────────

export type Listing = {
  id: string;
  unit: string;
  property: string;
  location: string;
  rent: number;
  status: string;
  availability: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  amenities: string[];
};

export const listings: Listing[] = [
  {
    id: "vac-harbor-112",
    unit: "H-112",
    property: "Harborline Flats",
    location: "San Diego, CA",
    rent: 2450,
    status: "Published",
    availability: "Available Now",
    bedrooms: 1,
    bathrooms: 1,
    sqft: 740,
    description:
      "Bright corner unit on the first floor of Harborline Flats. Features an open-plan kitchen, in-unit washer/dryer hookups, and a private patio. Walking distance to the marina and downtown San Diego.",
    amenities: ["In-unit W/D hookup", "Private patio", "On-site parking", "Pet friendly", "Smart lock entry"],
  },
  {
    id: "vac-eden-410",
    unit: "E-410",
    property: "Eden Court",
    location: "Austin, TX",
    rent: 2280,
    status: "Published",
    availability: "Available Apr 12",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 920,
    description:
      "Renovated two-bedroom on the fourth floor with updated stainless appliances and refinished hardwoods. Eden Court is centrally located near Zilker Park with a renovated lobby and smart lock rollout in progress.",
    amenities: ["Stainless appliances", "Hardwood floors", "Gym access", "Rooftop lounge", "Bike storage"],
  },
  {
    id: "vac-stillwater-204",
    unit: "S-204",
    property: "Stillwater Lofts",
    location: "Denver, CO",
    rent: 2550,
    status: "Published",
    availability: "Available May 01",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1100,
    description:
      "Spacious loft-style two-bed, two-bath unit with exposed concrete ceilings and floor-to-ceiling windows. Stillwater Lofts sits in the heart of RiNo with easy light-rail access and walkable restaurants.",
    amenities: ["Loft ceilings", "Floor-to-ceiling windows", "Two full baths", "Concierge", "EV charging", "Dog run"],
  },
];

// ─── Rental Applications ──────────────────────────────────────────────────────

export type ApplicationStatus = "Submitted" | "Under Review" | "Approved" | "Rejected";

export type Application = {
  id: string;
  listingId: string;
  unit: string;
  property: string;
  fullName: string;
  email: string;
  phone: string;
  moveInDate: string;
  monthlyIncome: number;
  employer: string;
  notes: string;
  status: ApplicationStatus;
  submittedAt: string;
};

export const applications: Application[] = [
  {
    id: "app-001",
    listingId: "vac-eden-410",
    unit: "E-410",
    property: "Eden Court",
    fullName: "Marcus Webb",
    email: "marcus.webb@email.com",
    phone: "512-555-0182",
    moveInDate: "2025-04-15",
    monthlyIncome: 8500,
    employer: "Dell Technologies",
    notes: "Looking for a quiet unit. Have one small dog.",
    status: "Submitted",
    submittedAt: "2025-03-14",
  },
  {
    id: "app-002",
    listingId: "vac-eden-410",
    unit: "E-410",
    property: "Eden Court",
    fullName: "Priya Nair",
    email: "priya.nair@email.com",
    phone: "512-555-0273",
    moveInDate: "2025-04-12",
    monthlyIncome: 9200,
    employer: "Indeed",
    notes: "",
    status: "Under Review",
    submittedAt: "2025-03-13",
  },
  {
    id: "app-003",
    listingId: "vac-harbor-112",
    unit: "H-112",
    property: "Harborline Flats",
    fullName: "Jordan Lee",
    email: "jordan.lee@email.com",
    phone: "619-555-0341",
    moveInDate: "2025-03-28",
    monthlyIncome: 7800,
    employer: "Freelance Designer",
    notes: "Remote worker, very quiet lifestyle. No pets.",
    status: "Submitted",
    submittedAt: "2025-03-15",
  },
];
