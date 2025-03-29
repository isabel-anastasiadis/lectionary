
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
  const tabIdentifiers = readingSets
    .map((readingSet) => readingSet.readingSetTab)
    .filter((value, index, array) => array.indexOf(value) === index) // ensures unique
  
  return tabIdentifiers.map((tabIdentifier) => {
    const readingSet = readingSets
      .filter((readingSet) => readingSet.readingSetTab == tabIdentifier )[0];

    return {
      value: readingSet.readingSetTab,
      content: readingSet.readingSetTabName
    }
  })
}

export { getDefaultSelectedTab, getTabOptions, getReadingsToDisplay }