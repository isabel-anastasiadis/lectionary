import { useState } from "react";
import { styled } from '../../stitches.config';
import { IReadingsForDay, IReadingsList, Theme } from "../../data/interfaces";
import Toggle from "../common/Toggle";
import ReadingsList from "./ReadingsList";
import Actions from "./Actions";


const StyledWrapper = styled('div', {
  margin: "32px 0 0 0",
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
  const [selectedTab, setSelectedTab] = useState(todaysReadings.readingSets[0].readingSetTabTitle);

  function tabOnChange(value: string): void {
    setSelectedTab(value);
  }

  function getReadingsToDisplay(): IReadingsList {
    const matchingSet = todaysReadings.readingSets.find((readingSet) => {
      return readingSet.readingSetTabTitle === selectedTab
        && readingSet.timeOfDay === theme.toString()
    })

    return matchingSet ?? todaysReadings.readingSets[0];
  }

  return (
    <StyledWrapper>
      <Toggle
        options={[
          {
            value: 'RCL (Re.)',
            content: 'RCL (Re.)'
          },
          {
            value: 'RCL (Co.)',
            content: 'RCL (Co.)'
          },
          {
            value: 'Prayers',
            content: 'Prayers'
          }
        ]}
        selected={selectedTab}
        onChange={tabOnChange}
      />
      <ReadingsList
        readingsList={getReadingsToDisplay()}
        readingTranslation={readingTranslation}
      />
      <Actions readings={getReadingsToDisplay()}
        audioTranslation={audioTranslation}
        readingTranslation={readingTranslation}
        setAudioTranslation={setAudioTranslation}
        setReadingTranslation={setReadingTranslation}
      />
    </StyledWrapper>
  )
}

export default ReadingsSection;