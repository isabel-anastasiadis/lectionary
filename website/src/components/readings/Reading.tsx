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
              data-category="link"
              data-action="click"
              data-label={dataLabel}
              >
                {reading.pretty}
              </Link>
        </StyledReading>
    )
}

export default Reading;