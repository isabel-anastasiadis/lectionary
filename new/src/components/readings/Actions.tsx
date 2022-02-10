
import { readingUrl, audioUrl, AUDIO_TRANSLATIONS, READING_TRANSLATIONS } from '../../data/urls';
import { IReadingsList } from '../../data/interfaces';
import { styled } from '../../stitches.config';
import ButtonLinkWithOptions from '../common/ButtonLinkWithOptions';

const AllActionsDiv = styled("div", {

});

interface ActionsProps {
    readings: IReadingsList,
    audioTranslation: string,
    readingTranslation: string,
    setAudioTranslation(translation: string): void,
    setReadingTranslation(translation: string): void
}

const Actions = ({ 
        readings, 
        audioTranslation, 
        readingTranslation, 
        setAudioTranslation, 
        setReadingTranslation 
    }: ActionsProps) => {

    return (
        <AllActionsDiv>
            <ButtonLinkWithOptions
                selectOptions= {AUDIO_TRANSLATIONS}
                selectDefaultValue={audioTranslation}
                selectOnChange={(value) => {setAudioTranslation(value)}}
                buttonText="Play all"
                href={audioUrl(audioTranslation, readings.audioQS)}
                buttonStyle="secondary"
                buttonIcon='headphones'
            />
            <ButtonLinkWithOptions
                selectOptions= {READING_TRANSLATIONS}
                selectDefaultValue={readingTranslation}
                selectOnChange={(value) => {setReadingTranslation(value)}}
                buttonText="Read all"
                href={readingUrl(readingTranslation, readings.readQS)}
                buttonStyle="primary"
                buttonIcon='book'
            />
        </AllActionsDiv>
    )
};

export default Actions;