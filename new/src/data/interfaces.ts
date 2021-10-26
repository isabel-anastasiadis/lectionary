export interface IAvailableDates {
  [dateKey: string]: string;
}

export interface IReadingsList {
  readings: string[];
  reading_link: string;
  audio_link: string;
}

export interface IReadingsForDay {
  date_pretty: string;
  day_description: string;
  morning: IReadingsList;
  evening: IReadingsList;
}

export enum Theme {
  MORNING = "morning",
  EVENING = "evening",
}
