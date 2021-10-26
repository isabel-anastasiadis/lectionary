import { format, parse, addDays } from "date-fns";
import Data from "./data";

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

export interface IDateInfo {
  date_key: string;
  date_pretty: string;
}

export function getDatesList(): IDateInfo[] {
  const dateKeys = Object.keys(Data);
  const datePrettys = Object.values(Data).map((day) => day.date_pretty);

  const result = dateKeys.map(function (element, i) {
    return { date_key: element, date_pretty: datePrettys[i] };
  });

  console.log(result);

  return result;
}
