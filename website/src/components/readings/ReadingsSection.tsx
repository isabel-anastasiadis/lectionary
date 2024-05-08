import { useState, useEffect } from "react";
import { styled } from '../../stitches.config';
import { IReadingsForDay, IReadingsList, Theme } from "../../data/interfaces";
import Toggle, {IToggleOption} from "../common/Toggle";
import ReadingsList from "./ReadingsList";
import Actions from "./Actions";


const TabWrapper = styled('div', {
  margin: "32px 0 0 0",
})

const ReadingsListWrapper = styled('div', {
  margin: "24px 0 80px 4px",
})

const StyledSpan = styled('p', {
  color: '$foreground',
  margin: '0 0 2px 0'
})

interface ReadingsSectionProps {
  theme: Theme;
  todaysReadings: IReadingsForDay;
  audioTranslation: string,
  readingTranslation: string,
  setAudioTranslation(translation: string): void,
  setReadingTranslation(translation: string): void
}

const ReadingsSection = ({
  todaysReadings,
  theme,
  audioTranslation,
  readingTranslation,
  setAudioTranslation,
  setReadingTranslation
}: ReadingsSectionProps) => {
  const [selectedTab, setSelectedTab] = useState(todaysReadings.readingSets[0].readingSetTab);

  // update selected tab when todaysReadings changes
  useEffect(() => {
    setSelectedTab(todaysReadings.readingSets[0].readingSetTab)
  }, [todaysReadings]);

  function tabOnChange(value: string): void {
    setSelectedTab(value);
  }

  function getReadingsToDisplay(): IReadingsList {
    const matchingSet = todaysReadings.readingSets.find((readingSet) => {
      return readingSet.readingSetTab === selectedTab
        && readingSet.timeOfDay === theme.toString()
    })

    return matchingSet ?? todaysReadings.readingSets[0];
  }

  function getTabOptions(): IToggleOption[] {
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
    
    const tabIdentifiers = todaysReadings.readingSets
      .map((readingSet) => readingSet.readingSetTab)
      .filter((value, index, array) => array.indexOf(value) === index) // ensures unique

    return tabIdentifiers.map((tabIdentifier) => tabOptionsLookup[tabIdentifier])
  }

  let tabComponent;
  if (getTabOptions().length > 1) {
    tabComponent = 
    <TabWrapper>
      <Toggle
        options={getTabOptions()}
        selected={selectedTab}
        onChange={tabOnChange}
      />
    </TabWrapper>
  }

  return (
    <div>
      {tabComponent}

      <ReadingsListWrapper>
        <StyledSpan>
          {getReadingsToDisplay().readingSetSubtitle}
        </StyledSpan>
        <ReadingsList
          readingsList={getReadingsToDisplay()}
          readingTranslation={readingTranslation}
        />
      </ReadingsListWrapper>

      <Actions readings={getReadingsToDisplay()}
        audioTranslation={audioTranslation}
        readingTranslation={readingTranslation}
        setAudioTranslation={setAudioTranslation}
        setReadingTranslation={setReadingTranslation}
      />
    </div>
  )
}

export default ReadingsSection;