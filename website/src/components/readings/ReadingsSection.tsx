import { useState } from "react";
import { styled } from '../../stitches.config';
import Toggle from "../common/Toggle";
import ReadingsList from "./ReadingsList";
import { IReadingsForDay, IReadingsList, Theme } from "../../data/interfaces";

const StyledWrapper = styled('div', {
  margin: "32px 0 0 0",
})

interface ReadingsSectionProps {
  theme: Theme;
  todaysReadings: IReadingsForDay;
  readingTranslation: string;
}

const ReadingsSection = ({ todaysReadings, theme, readingTranslation }: ReadingsSectionProps) => {
  const [selectedTab, setSelectedTab] = useState("Prayers");

  function tabOnChange(value: string): void {
    console.log("Changed value to" + value);
    setSelectedTab(value);
  }

  function getReadingsToDisplay(): IReadingsList {
    if (todaysReadings.rclTrack1) {
      return todaysReadings.rclTrack1;
    }

    return theme === Theme.MORNING
      ? todaysReadings.morning
      : todaysReadings.evening;
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
        readingsList={
          getReadingsToDisplay()
        }
        readingTranslation={readingTranslation}
      />
    </StyledWrapper>
  )
}

export default ReadingsSection;