import { useState } from 'react';
import { readingUrl, audioUrl, AUDIO_TRANSLATIONS, READING_TRANSLATIONS } from '../../data/urls';
import { IReadingsList } from '../../data/interfaces';
import { styled } from '../../stitches.config';
import ButtonLinkWithOptions from '../common/ButtonLinkWithOptions';

const AllActionsDiv = styled("div", {

});

interface ActionsProps {
    readings: IReadingsList
}

const Actions = ({ readings }: ActionsProps) => {

    const defaultAudioTranslation = AUDIO_TRANSLATIONS[0].value;
    const defaultReadingTranslation = READING_TRANSLATIONS[0].value;

    const [audioTranslation, setAudioTranslation ] = useState(defaultAudioTranslation);
    const [readingTranslation, setReadingTranslation ] = useState(defaultReadingTranslation);

    return (
        <AllActionsDiv>
            <ButtonLinkWithOptions
                selectOptions= {AUDIO_TRANSLATIONS}
                selectDefaultValue={defaultAudioTranslation}
                selectOnChange={(value) => {setAudioTranslation(value)}}
                buttonText="Play all"
                href={audioUrl(audioTranslation, readings.audioQS)}
                buttonStyle="secondary"
                buttonIcon='headphones'
            />
            <ButtonLinkWithOptions
                selectOptions= {READING_TRANSLATIONS}
                selectDefaultValue={defaultReadingTranslation}
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