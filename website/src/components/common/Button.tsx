import React from 'react';
import { styled } from '../../stitches.config';
import type * as Stitches from '@stitches/react';
import Icon from './Icon'

export const ButtonStyle = {
  primary: {
    backgroundColor: '$foreground',
    color: '$background',
    '&:hover, &:focus': {
      backgroundColor: '$foreground',
      backgroundImage: 'linear-gradient($toggleCheckedStage, $toggleCheckedStage)',
    },
    '&:active': {
      backgroundColor: '$foreground',
      backgroundImage: 'linear-gradient($toggleCheckedSelect, $toggleCheckedSelect)',
    },
  },
  secondary: {
    backgroundColor: '$toggleBase',
    color: '$foreground',
    '&:hover, &:focus': {
      backgroundColor: '$toggleBase',
      backgroundImage: 'linear-gradient($toggleStage, $toggleStage)',
    },
    '&:active': {
      backgroundColor: '$toggleBase',
      backgroundImage: 'linear-gradient($toggleSelect, $toggleSelect)',
    },
  },
};



const StyledButton = styled('button', {
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  fontFamily: 'inherit',
  variants: {
    shape: {
      rect: {
        padding: '5px 15px',
        fontSize: '14px',
        lineHeight: '20px',
        minHeight: '40px',
        borderRadius: '10px',
      },
      circ: {
        display: 'flex',
        height: '40px',
        width: '40px',
        padding: '0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '999px',
      },
    },
    style: ButtonStyle 
  },
  defaultVariants: {
    style: 'secondary',
    shape: 'rect',
  }
});


export type ButtonVariants = Stitches.VariantProps<typeof StyledButton>

interface ButtonProps {
  children?: React.ReactNode
  onClick: () => void
  shape?: ButtonVariants['shape']
  buttonStyle?: ButtonVariants['style']
  icon?: string
  iconRotate?: string
  iconColor?: string
  dataLabel?: string
}
  
const Button = ({children, onClick, shape, buttonStyle, icon, iconRotate, iconColor, dataLabel}: ButtonProps) => {
  return (
    <StyledButton 
      shape={shape} 
      style={buttonStyle} 
      onClick={onClick} 
      data-category="button"
      data-action="click"
      data-label={dataLabel}>

      {icon ? <Icon rotate={iconRotate} name={icon} color={iconColor}/> : null}
      {children}
    </StyledButton>
  )
}

export default Button;