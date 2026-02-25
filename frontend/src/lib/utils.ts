import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

export function formatDateTime(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export function getInitials(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export function formatPercentage(value: number): string {
  return `${Math.round(value * 100) / 100}%`;
}

export function getStatusColor(status: string): string {
  const map: Record<string, string> = {
    DRAFT: "bg-slate-100 text-slate-600",
    SUBMITTED_TO_MANAGER: "bg-blue-50 text-blue-600",
    SUBMITTED_TO_CALIBRATION: "bg-amber-50 text-amber-600",
    FINALIZED: "bg-emerald-50 text-emerald-600",
    OPEN: "bg-emerald-50 text-emerald-600",
    CLOSED: "bg-slate-100 text-slate-500",
  };
  return map[status] || "bg-slate-100 text-slate-600";
}

export function getStatusLabel(status: string): string {
  const map: Record<string, string> = {
    DRAFT: "Draft",
    SUBMITTED_TO_MANAGER: "Manager Review",
    SUBMITTED_TO_CALIBRATION: "Calibration",
    FINALIZED: "Finalized",
    OPEN: "Open",
    CLOSED: "Closed",
  };
  return map[status] || status;
}

export function getRoleLabel(role: string): string {
  const map: Record<string, string> = {
    ADMIN: "Admin",
    EMPLOYEE: "Employee",
    LINE_MANAGER: "Line Manager",
    CALIBRATION: "Calibration",
  };
  return map[role] || role;
}

export function downloadBlob(blob: Blob, filename: string) {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
