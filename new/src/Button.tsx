import React from 'react';
import { styled } from './stitches.config';
import type * as Stitches from '@stitches/react';

export const StyledButton = styled('button', {
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
    type: {
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
    },
  },
  defaultVariants: {
    type: 'secondary',
    shape: 'rect',
  }
});

type ButtonVariants = Stitches.VariantProps<typeof StyledButton>

interface ButtonProps {
  children?: React.ReactChildren
  onClick: () => void
  shape?: ButtonVariants['shape']
}
  
const Button = ({children, onClick, shape}: ButtonProps) => {
  return (
    <StyledButton shape={shape} onClick={onClick}>{children}</StyledButton>
  )
}

export default Button;