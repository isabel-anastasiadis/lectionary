import { styled } from '../stitches.config';
import Reading from './Reading'

const StyledReadings = styled('ul', {
    margin: '50px 0 0 0',
    flex: '1',
    padding: '0',
    listStyle: 'none',
})

interface ReadingsProps {
    readings: {text: string, link: string}[]
}

const Readings = ({readings}: ReadingsProps) => {
    return(
        <StyledReadings>
            {readings.map((reading, i)=>{
                return (
                    <Reading key={i} text={reading.text} link={reading.link}/>
                )
            })}
        </StyledReadings>
    )
}

export default Readings;
