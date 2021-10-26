import Data, { IReadingsForDay } from "./data";

export function getReadingsForDay(dateKey: string): IReadingsForDay {
  return Data[dateKey];
}
