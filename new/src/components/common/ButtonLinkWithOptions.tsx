
import React from 'react';
import { styled } from '../../stitches.config';
import type * as Stitches from '@stitches/react';
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

const Select = styled('select', {
  border: 'none',
  borderLeft: 'solid $background 1px',
  padding: '0 5px 0 20px',
  fontSize: 'inherit',
  variants: {
    style: ButtonStyle
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
  style?: ButtonVariants['style'],
  buttonIcon?: string,
  buttonIconColor?: string,
}
  
const ButtonLinkWithOptions = ({selectOptions, selectDefaultValue, buttonText, href, style, buttonIcon }: ButtonProps) => {

  return (
    <WrapperDiv>
      <Link href={href} style={style}>
        <Icon name={buttonIcon ?? "arrow"}></Icon>
        <LinkText>
          {buttonText}
        </LinkText>
      </Link>
      <Select style={style}>
        {selectOptions.map((nameValue, i) => {
          return (
            <Option key={i} value={nameValue.value} selected={selectDefaultValue === nameValue.name}>
              {nameValue.name}
            </Option>
          );
        })}
      </Select>

    </WrapperDiv>
  )
}

export default ButtonLinkWithOptions;