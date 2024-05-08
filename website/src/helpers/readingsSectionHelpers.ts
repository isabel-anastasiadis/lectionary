
import { Theme, IReadingsList } from "../data/interfaces";
import { IToggleOption } from "../components/common/Toggle";

function getDefaultSelectedTab(readingSets: IReadingsList[]): string {
  return readingSets[0].readingSetTab;
}

function getReadingsToDisplay(readingSets: IReadingsList[], selectedTab: string, theme: Theme): IReadingsList {
  const matchingSet = readingSets.find((readingSet) => {
    return readingSet.readingSetTab === selectedTab
      && (!readingSet.timeOfDay || readingSet.timeOfDay === theme.toString())
  })

  return matchingSet ?? readingSets[0];
}

function getTabOptions(readingSets: IReadingsList[]): IToggleOption[] {
  // to reduce coupling to the values in data.ts (and make future query string params easier)
  const tabOptionsLookup: { [id: string]: IToggleOption } = {
    rclTrack1: {
      value: "rclTrack1",
      content: "RCL (Re.)"
    },
    rclTrack2: {
      value: "rclTrack2",
      content: "RCL (Co.)"
    },
    prayers: {
      value: "prayers",
      content: "Prayers"
    }
  }
  
  const tabIdentifiers = readingSets
    .map((readingSet) => readingSet.readingSetTab)
    .filter((value, index, array) => array.indexOf(value) === index) // ensures unique

  return tabIdentifiers.map((tabIdentifier) => tabOptionsLookup[tabIdentifier])
}

export { getDefaultSelectedTab, getTabOptions, getReadingsToDisplay }