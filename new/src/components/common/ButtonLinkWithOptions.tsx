
import React from 'react';
import { styled } from '../../stitches.config';
import Icon from './Icon';
import { ButtonStyle, ButtonVariants } from './Button';

const WrapperDiv = styled('div', {
  borderRadius: "10px",
  overflow: 'hidden', // means even when the contents doesn't have border radius, it appears to
  minHeight: "50px",
  display: "flex",
  marginTop: "10px",
  fontWeight: "700",
  variants: {
    style: ButtonStyle
  }
});

const Link = styled('a', {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: "none",
  variants: {
    style: ButtonStyle
  }
});

const LinkText = styled('div', {
  marginLeft: '4px',
  fontSize: 'inherit'
});

const SelectStyle = {
  primary: {
    ...ButtonStyle.primary,
    borderLeft: 'solid $toggleCheckedSelect 1px'
  },
  secondary: {
    ...ButtonStyle.secondary,
    borderLeft: 'solid $toggleSelect 1px'
  }
}

const Select = styled('select', {
  outline: "none",
  border: "none",
  padding: '0 5px 0 20px',
  fontSize: 'inherit',
  variants: {
    style: SelectStyle
  }
})

const Option = styled("option", {
  color: "$foreground",
  backgroundColor: "$background"
});

interface ButtonProps {
  selectOptions: Array<{name: string, value: string}>,
  selectDefaultValue?: string,
  buttonText?: string,
  href: string,
  buttonStyle?: ButtonVariants['style'],
  buttonIcon?: string,
  buttonIconColor?: string,
  selectOnChange: React.ChangeEventHandler<HTMLSelectElement>
}
  
const ButtonLinkWithOptions = ({selectOptions, selectDefaultValue, selectOnChange, buttonText, href, buttonStyle, buttonIcon }: ButtonProps) => {

  return (
    <WrapperDiv>
      <Link href={href} style={buttonStyle}>
        <Icon name={buttonIcon ?? "arrow"}></Icon>
        <LinkText>
          {buttonText}
        </LinkText>
      </Link>
      <Select style={buttonStyle} onChange={selectOnChange}>
        {selectOptions.map((nameValue, i) => {
          return (
            <Option key={i} value={nameValue.value} selected={selectDefaultValue === nameValue.value}>
              {nameValue.name}
            </Option>
          );
        })}
      </Select>

    </WrapperDiv>
  )
}

export default ButtonLinkWithOptions;