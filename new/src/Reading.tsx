import { styled } from './stitches.config';

const StyledReading = styled('li', {})

const Link = styled('a', {
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
})

interface ReadingsProps {
    link: string
    text: string
}

const Reading = ({link, text}: ReadingsProps) => {
    return(
        <StyledReading>
            <Link href={link}>{text}</Link>
        </StyledReading>
    )
}

export default Reading;