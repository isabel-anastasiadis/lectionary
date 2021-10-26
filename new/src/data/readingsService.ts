import Data from "./data";
import { IReadingsForDay, IAvailableDates } from "./interfaces";

export function getReadingsForDay(dateKey: string): IReadingsForDay {
  return Data[dateKey];
}

export function getAvailableDates(): IAvailableDates {
  const dateKeys = Object.keys(Data);

  const result: IAvailableDates = {};

  dateKeys.forEach((key) => {
    result[key] = Data[key].date_pretty;
  });

  return result;
}
