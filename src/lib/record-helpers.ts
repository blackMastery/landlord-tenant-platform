import {
  maintenanceTickets,
  messagePreview,
  messageThreads,
  properties,
  rentRoll,
  units,
  vacancies,
  vendorJobs,
  vendorNotes,
} from "@/lib/mock-data";

export const findProperty = (id: string) =>
  properties.find((property) => property.id === id);

export const findUnit = (id: string) =>
  units.find((unit) => unit.id === id);

export const findRent = (id: string) =>
  rentRoll.find((row) => row.id === id);

export const findTicket = (id: string) =>
  maintenanceTickets.find((ticket) => ticket.id === id);

export const findVacancy = (id: string) =>
  vacancies.find((vacancy) => vacancy.id === id);

export const findMessageThread = (id: string) =>
  messageThreads.find((thread) => thread.id === id);

export const findMessagePreview = (id: string) =>
  messagePreview.find((message) => message.id === id);

export const findVendorJob = (id: string) =>
  vendorJobs.find((job) => job.id === id);

export const findVendorNote = (id: string) =>
  vendorNotes.find((note) => note.id === id);
