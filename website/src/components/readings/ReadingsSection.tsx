import { useState, useEffect } from "react";
import { styled } from '../../stitches.config';
import { IReadingsForDay, Theme } from "../../data/interfaces";
import { getTabOptions, getReadingsToDisplay, getDefaultSelectedTab } from "../../helpers/readingsSectionHelpers";
import Toggle from "../common/Toggle";
import ReadingsList from "./ReadingsList";
import Actions from "./Actions";

const TabWrapper = styled('div', {
  margin: "32px 0 0 0",
})

const ReadingsListWrapper = styled('div', {
  margin: "24px 0 24px 4px",
  flexGrow: 100
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
  const [selectedTab, setSelectedTab] = useState(getDefaultSelectedTab(todaysReadings.readingSets));

  // update selected tab when todaysReadings changes
  useEffect(() => {
    setSelectedTab(getDefaultSelectedTab(todaysReadings.readingSets))
  }, [todaysReadings]);

  function tabOnChange(value: string): void {
    setSelectedTab(value);
  }

  let tabComponent;
  if (getTabOptions(todaysReadings.readingSets).length > 1) {
    tabComponent = 
    <TabWrapper>
      <Toggle
        options={getTabOptions(todaysReadings.readingSets)}
        selected={selectedTab}
        onChange={tabOnChange}
      />
    </TabWrapper>
  }

  return (
    <>
      {tabComponent}

      <ReadingsListWrapper>
        <StyledSpan>
          {getReadingsToDisplay(todaysReadings.readingSets, selectedTab, theme).readingSetSubtitle}
        </StyledSpan>
        <ReadingsList
          readingsList={getReadingsToDisplay(todaysReadings.readingSets, selectedTab, theme)}
          readingTranslation={readingTranslation}
        />
      </ReadingsListWrapper>

      <Actions readings={getReadingsToDisplay(todaysReadings.readingSets, selectedTab, theme)}
        audioTranslation={audioTranslation}
        readingTranslation={readingTranslation}
        setAudioTranslation={setAudioTranslation}
        setReadingTranslation={setReadingTranslation}
      />
    </>
  )
}

export default ReadingsSection;