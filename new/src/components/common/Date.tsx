import { useState, useRef, useEffect } from "react";
import { styled } from "../../stitches.config";
import Icon from "./Icon";
import { IAvailableDates } from "../../data/interfaces";

const Wrapper = styled("div", {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  marginLeft: "-5px",
  marginBottom: "-5px",
  marginTop: "-5px",
  color: "$foreground",
});

const IconWrapper = styled("div", {
  marginLeft: "-20px",
  marginTop: "-2px",
  display: "inline-block"
});

const selectStyles = {
  display: "inline-flex",
  whiteSpace: "nowrap",
  fontFamily: "inherit",
  fontSize: "inherit",
  lineHeight: "inherit",
  background: "none",
  margin: "0",
  borderRadius: "5px",
  color: "inherit",
  outline: "none",
  fontWeight: "300",
  appearance: "none",
  padding: "5px 25px 5px 5px",
  cursor: "pointer",
  border: "none",
  [`&:hover, &:focus, &:hover + ${IconWrapper}, &:focus + ${IconWrapper}`]: {
    opacity: "0.8",
  },
  [`&:active, &:active + ${IconWrapper}`]: {
    opacity: "0.4",
  },
};

const StyledSelect = styled("select", selectStyles);

const StyledOption = styled("option", {
    color: "$foreground",
    backgroundColor: "$background"
});

// This is a hidden element.
// It has duplicate styles as the native date select.
// The widths of native select elements cannot update dymnamically,
// so we measure this element and programatically update it.
const HiddenElement = styled("div", selectStyles, {
  opacity: "0",
  position: "absolute",
  pointerEvents: "none",
  userSelect: "none",
});

interface MessageProps {
  dates: IAvailableDates;
  currentDate: string;
  setCurrentDate: (dateKey: string) => void;
}

const Date = ({ dates, currentDate, setCurrentDate }: MessageProps) => {
  const [currentDateText, setCurrentDateText] = useState(dates[currentDate]);
  const [selectWidth, setSelectWidth] = useState();
  const ref: any = useRef(null);

  useEffect(() => {
    setCurrentDateText(dates[currentDate]);
  }, [currentDate]);

  useEffect(() => {
    if (ref.current !== null) {
      const hiddenTextWidth = ref.current.offsetWidth + 5;
      setSelectWidth(hiddenTextWidth);
    }
  }, [currentDateText]);

  return (
    <>
      <Wrapper>
        <StyledSelect
          css={{ width: selectWidth }}
          onChange={(e) => {
            setCurrentDate(e.target.value);
            setCurrentDateText(dates[e.target.value]);
          }}
        >
          {Object.keys(dates).map((dateKey, i) => {
            return (
              <StyledOption
                key={i}
                value={dateKey}
                selected={dateKey === currentDate}
              >
                {dates[dateKey]}
              </StyledOption>
            );
          })}
        </StyledSelect>

        <IconWrapper>
          <Icon name="chevron" />
        </IconWrapper>
      </Wrapper>
      <HiddenElement ref={ref}>{currentDateText}</HiddenElement>
    </>
  );
};

export default Date;
