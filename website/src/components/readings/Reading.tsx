import { IReading } from '../../data/interfaces';
import { styled } from '../../stitches.config';
import { readingUrl } from '../../data/urls';
import { Link } from '../common/Link';

const StyledReading = styled('li', {})


interface ReadingsProps {
    reading: IReading,
    readingTranslation: string
    dataLabel: string
}

const Reading = ({reading, readingTranslation, dataLabel}: ReadingsProps) => {
    return(
        <StyledReading>
            <Link 
              href={readingUrl(readingTranslation, reading.readQS)}
              text={reading.pretty}
              dataLabelOverride={dataLabel}
            />
        </StyledReading>
    )
}

export default Reading;