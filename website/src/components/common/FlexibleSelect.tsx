import { useState, useRef, useEffect } from "react";
import { styled } from "../../stitches.config";
import { ButtonStyle } from "./Button";
import Icon from "./Icon";
import type * as Stitches from '@stitches/react';
import { toSnakeCase } from "../../helpers/stringHelpers";

const Wrapper = styled("div", {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  color: "$foreground",
});

const IconWrapper = styled("div", {
  position: "absolute",
  right: "14px",
  paddingBottom: "4px",
  display: "inline-block",
  pointerEvents: "none"
});

const selectStyles = {
    display: "inline-flex",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: "300",
    lineHeight: "inherit",
    margin: "0",
    color: "inherit",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
    border: "none",
    variants: {
        style: {
            primary: {
                ...ButtonStyle.primary,
                padding: '0 20px 0 20px',
                height: "100%"
            },
            secondary: {
                ...ButtonStyle.secondary,
                padding: '0 20px 0 20px',
                height: "100%"
            },
            text: {
                background: "none",
                padding: "5px 20px 5px 5px",
                [`&:hover, &:focus, &:hover + ${IconWrapper}, &:focus + ${IconWrapper}`]: {
                    opacity: "0.8",
                },
                [`&:active, &:active + ${IconWrapper}`]: {
                    opacity: "0.4",
                },
            }
        }
    },
    defaultVariants: {
        style: 'text'
      }
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

type FlexibleSelectVariants = Stitches.VariantProps<typeof StyledSelect>;


interface FlexibleSelectProps {
  selectStyle?: FlexibleSelectVariants["style"];
  options: Array<{value: string, text: string}>;
  newExternalValue: string;
  onChange: (value: string) => void;
  truncatedDisplayText: boolean;
  dataContext: string
};

const FlexibleSelect = ({ selectStyle, options, newExternalValue, onChange, truncatedDisplayText, dataContext }: FlexibleSelectProps) => {
  const [currentText, setCurrentText] = useState(getDisplayTextByValue(options, newExternalValue));
  const [selectWidth, setSelectWidth] = useState();
  const ref: any = useRef(null);

  useEffect(() => {
    setCurrentText(getDisplayTextByValue(options, newExternalValue));
  }, [newExternalValue, options]);

  useEffect(() => {
    if (ref.current !== null) {
      const chevronWidth = 8;
      const hiddenTextWidth = ref.current.offsetWidth + chevronWidth;
      setSelectWidth(hiddenTextWidth);
    }
  }, [currentText]);

  
  function getDisplayTextByValue(options: Array<{value: string, text: string}>, value: string): string {
    // This function is used to get the text so we can calculate the width of the select every time the value changes.
    return options.filter(option => option.value === value)
                  .map(option => {
                    return truncatedDisplayText ? extractFirstWord(option.text) : option.text;
                  })[0];
  }

  function extractFirstWord(text: string): string {
    // We want the first word to display, but the extra information to only show in the select options
    // eg. "MSG - The Message by Kelly Ryan Dolan"  <-- only want to show "MSG" on the select when not open
    // the first word of the text
    return text.split(' ')[0]
  }

  return (
    <>
      <Wrapper>
        <StyledSelect
          style={selectStyle}
          css={{ width: selectWidth }}
          value={newExternalValue}
          onChange={(e) => {
            onChange(e.target.value);
            setCurrentText(getDisplayTextByValue(options, e.target.value));
          }}
          data-category="dropdown"
          data-action="select"
        >
          {options.map((option, i) => {
            return (
              <StyledOption
                key={i}
                value={option.value}
                data-label={`${dataContext}_${toSnakeCase(option.value)}`}
              >
                {option.text}
              </StyledOption>
            );
          })}
        </StyledSelect>

        <IconWrapper>
          <Icon name="chevron" color={selectStyle === "primary" ? "var(--colors-background)" : "var(--colors-foreground)"}/>
        </IconWrapper>
        
        <HiddenElement ref={ref} style={selectStyle}>{currentText}</HiddenElement>

      </Wrapper>
      
    </>
  );
};

export default FlexibleSelect;
