import { styled } from "@stitches/react";
import { toSnakeCase } from "../../helpers/stringHelpers";


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

const StyledLink = styled('a', DefaultLinkStyles);

interface LinkProps {
  href: string,
  text: string,
  dataLabelOverride?: string
}

export const Link = ({href, text, dataLabelOverride}: LinkProps) => {
  return (
    <StyledLink href={href} data-category="link" data-action="click" data-label={dataLabelOverride ?? toSnakeCase(text)}>{text}</StyledLink>
  )
}

