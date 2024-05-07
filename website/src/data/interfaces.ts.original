export interface IAvailableDates {
  [dateKey: string]: string;
}

export interface IReading {
  pretty: string,
  readQS: string,
  audioQS: string
}

export interface IReadingsList {
  readings: IReading[];
  readQS: string;
  audioQS: string;
}

export interface IReadingsForDay {
  datePretty: string;
  calendar: string;
  rclTrack1: IReadingsList | null;
  morning: IReadingsList;
  evening: IReadingsList;
}

export enum Theme {
  MORNING = "morning",
  EVENING = "evening",
}
