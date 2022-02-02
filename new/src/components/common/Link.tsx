import { styled } from "@stitches/react";


export const DefaultLinkStyles = {
    fontWeight: '700',
    color: '$foreground',
    textDecoration: 'none',
    lineHeight: '25px',
    transition: 'all 0.1s ease',
    outline: 'none',
    '&:hover, &:focus': {
        opacity: '0.8',
    },
    '&:active': {
        opacity: '0.6',
    },
};

export const Link = styled('a', DefaultLinkStyles);

