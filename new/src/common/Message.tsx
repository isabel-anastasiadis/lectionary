import { styled } from '../stitches.config';

const StyledMessage = styled('h1', {
    fontSize: '48px',
    lineHeight: '45px',
    letterSpacing: '-0.03em',
    margin: '0 0 10px',
    fontWeight: '700',
    color: '$foreground',
})

interface MessageProps {
    time: string
}

const Message = ({time}: MessageProps) => {
    return(
        <StyledMessage>{time + ` mārie.`}</StyledMessage>
    )
}

export default Message;