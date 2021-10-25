import { useState, useRef, useEffect } from 'react';
import { styled } from '../stitches.config';
import Icon from './Icon';

const Wrapper = styled('div', {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    marginLeft: '-5px',
    marginBottom: '-5px',
    marginTop: '-5px',
    color: '$foreground',
})

const IconWrapper = styled('div', {
    position: 'absolute',
    right: '10px',
    top: '0',
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const selectStyles = {
    display: 'inline-flex',
    whiteSpace: 'nowrap',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    background: 'none',
    margin: '0',
    borderRadius: '5px',
    color: 'inherit',
    outline: 'none',
    fontWeight: '300',
    appearance: 'none',
    padding: '5px 25px 5px 5px',
    cursor: 'pointer',
    border: 'none',
    [`&:hover, &:focus, &:hover + ${IconWrapper}, &:focus + ${IconWrapper}`]: {
        opacity: '0.8',
    },
    [`&:active, &:active + ${IconWrapper}`]: {
        opacity: '0.4',
    },
}

const StyledSelect = styled('select', selectStyles)

// This is a hidden element.
// It has duplicate styles as the native date select.
// The widths of native select elements cannot update dymnamically,
// so we measure this element and programatically update it.
const HiddenElement = styled('div', selectStyles, {
    opacity: '0',
    position: 'absolute',
    pointerEvents: 'none',
    userSelect: 'none',
})

interface MessageProps {
    dates: string[]
    currentDate: string
    setCurrentDate: () => void
}

const Date = ({dates, currentDate, setCurrentDate}: MessageProps) => {
    const [hiddenText, setHiddenText] = useState(currentDate)
    const [selectWidth, setSelectWidth] = useState()
    const ref: any = useRef(null);
    
    useEffect(() => {
        if (ref.current !== null) {
            const hiddenTextWidth = ref.current.offsetWidth;
            setSelectWidth(hiddenTextWidth);
        }
    }, [hiddenText]);
    
    return(
        <>
            <Wrapper>
                <StyledSelect css={{width: selectWidth}} onChange={(e) => {
                        setCurrentDate()
                        setHiddenText(e.target.value)
                    }}>
                    {dates.map((date, i)=>{
                        return(
                            <option key={i} value={date}>{date}</option>
                        )
                    })}
                </StyledSelect>
                
                <IconWrapper>
                    <Icon name="chevron"/>
                </IconWrapper>
            </Wrapper>
            <HiddenElement ref={ref}>{hiddenText}</HiddenElement>
        </>
    )
}

export default Date;