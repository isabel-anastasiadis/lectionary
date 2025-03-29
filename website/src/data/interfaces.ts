export interface IAvailableDates {
  [dateKey: string]: string;
}

export interface IReading {
  pretty: string,
  readQS: string,
  audioQS: string
}

export interface IReadingsList {
  readingSetTab: string;
  readingSetTabName: string;
  readingSetSubtitle: string;
  timeOfDay: "morning" | "evening" | null;
  readings: IReading[];
  readQS: string;
  audioQS: string;
  note: string | null;
}

export interface IReadingsForDay {
  datePretty: string;
  calendar: string;
  readingSets: IReadingsList[]
}

export enum Theme {
  MORNING = "morning",
  EVENING = "evening",
}
