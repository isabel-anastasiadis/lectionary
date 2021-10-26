import { format, parse, addDays } from "date-fns";

const dateKeyFormatString = "yyyy/MM/dd";

export function getTodaysDateKey(): string {
  const now = new Date();

  return format(now, dateKeyFormatString);
}

export function getYesterdaysDateKey(dateKey: string): string {
  const currentDate = parse(dateKey, dateKeyFormatString, new Date());

  const newDate = addDays(currentDate, -1);

  return format(newDate, dateKeyFormatString);
}

export function getTomorrowsDateKey(dateKey: string): string {
  const currentDate = parse(dateKey, dateKeyFormatString, new Date());

  const newDate = addDays(currentDate, 1);

  return format(newDate, dateKeyFormatString);
}
