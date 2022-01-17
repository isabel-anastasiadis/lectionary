
import React from 'react';
import { styled } from '../../stitches.config';
import type * as Stitches from '@stitches/react';
import Icon from './Icon';
import { ButtonStyle, ButtonVariants } from './Button';
import { NONAME } from 'dns';

const WrapperDiv = styled('div', {
  borderRadius: "10px",
  overflow: 'hidden', // means even when the contents doesn't have border radius, it appears to
  minHeight: "50px",
  display: "flex",
  marginTop: "10px",
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
  marginLeft: '4px'
});

const Select = styled('select', {
  border: 'none',
  borderLeft: 'solid $background 1px',
  padding: '0 0 0 20px',
  variants: {
    style: ButtonStyle
  }
})

interface ButtonProps {
  buttonText?: string,
  href: string,
  style?: ButtonVariants['style'],
  buttonIcon?: string,
  buttonIconColor?: string
}
  
const ButtonLinkWithDropdown = ({buttonText, href, style, buttonIcon }: ButtonProps) => {
  // todo inject
  const options: {[key: string]: string} = {
    niv: "NIV",
    msg: "MSG"
  }

  return (
    <WrapperDiv>
      <Link href={href} style={style}>
        <Icon name={buttonIcon ?? "arrow"}></Icon>
        <LinkText>
          {buttonText}
        </LinkText>
      </Link>
      <Select style={style}>
        {Object.keys(options).map((key, i) => {
          return (
            <option key={i} value={key} selected={i === 0}>
              {options[key]}
            </option>
          );
        })}
      </Select>

    </WrapperDiv>
  )
}

export default ButtonLinkWithDropdown;