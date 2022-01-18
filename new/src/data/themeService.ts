import { Theme } from "./interfaces";

export function pickDefaultTheme(): Theme {
    const now = new Date();
    const hours = now.getHours();
    var morning = hours >= 0 && hours <= 12;
    return morning ? Theme.MORNING : Theme.EVENING;
  };