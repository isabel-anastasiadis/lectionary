import { IReading } from '../../data/interfaces';
import { styled } from '../../stitches.config';
import { READING_URL_STEM } from '../../data/constants';

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
    reading: IReading
}

const Reading = ({reading}: ReadingsProps) => {
    return(
        <StyledReading>
            <Link href={READING_URL_STEM + reading.readQS}>{reading.pretty}</Link>
        </StyledReading>
    )
}

export default Reading;