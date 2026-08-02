import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toSearchFormat = (value: string) => {
  return value.toLowerCase().replace(/[:./,']/g, "");
};

export const getPathname = () => {
  return window.location.pathname;
};
