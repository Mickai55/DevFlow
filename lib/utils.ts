import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const currentDate = new Date();
  const diffInMs = currentDate.getTime() - createdAt.getTime();

  // Time calculations
  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} years ago`;
  if (months > 0) return `${months} months ago`;
  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes} minutes ago`;
  if (seconds > 0) return `${seconds} seconds ago`;

  return "just now";
};

export const formatAndDivideNumber = (num: number): string => {
  if (!num) {
    return "0";
  }
  if (num >= 1000000) {
    // If the number is in millions, divide by 1 million and append 'M'
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    // If the number is in thousands, divide by 1 thousand and append 'K'
    return (num / 1000).toFixed(1) + "K";
  } else {
    // If the number is less than 1000, return it as is
    return num.toString();
  }
};

export const getJoinedDate = (inputDate: Date): string => {
  // Get month and year from the input date
  const month = inputDate.toLocaleString("en-US", { month: "long" });
  const year = inputDate.getFullYear();

  // Concatenate month and year with a space in between
  const joinedDate = `${month} ${year}`;

  return joinedDate;
};

interface UrlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;
  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};

export const removeKeysFromQuery = ({ params, keysToRemove }: any) => {
  const currentUrl = qs.parse(params);

  keysToRemove.forEach((key: string) => {
    delete currentUrl[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
};
