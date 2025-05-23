import { siteConfig } from "@/config/site";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate years of development experience based on the career start date
 * @param precision Number of decimal places (default: 0)
 * @returns Years of experience as a number, rounded down
 */
export function getYearsOfExperience(precision: number = 0): number {
  const startDateStr = siteConfig.career.startDate;
  const startDate = new Date(startDateStr);
  const now = new Date();

  const diffTime = now.getTime() - startDate.getTime();
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

  const rounded =
    Math.round(diffYears * Math.pow(10, precision)) / Math.pow(10, precision);
  return rounded;
}

/**
 * Format the years of experience as a string (e.g., "3 years" or "3.5 years")
 * @param precision Number of decimal places (default: 0)
 * @returns Formatted string with years of experience
 */
export function getFormattedExperience(precision: number = 0): string {
  const years = getYearsOfExperience(precision);
  return `${years} ${years === 1 ? "year" : "years"}`;
}
