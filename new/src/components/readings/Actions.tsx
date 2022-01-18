import { styled } from '../../stitches.config';
import ButtonLinkWithOptions from '../common/ButtonLinkWithOptions';

const AllActionsDiv = styled("div", {

});

interface ActionsProps {
    
}

const Actions = ({}: ActionsProps) => {

    const options: Array<{name: string, value: string}> = [
        {
            name: "NIV",
            value: "mclean/niv"
        },
        {
            name: "MSG",
            value: "dolan/msg"
        },
        {
            name: "NLT",
            value: "breathe/nlt"
        }
    ];

    return (
        <AllActionsDiv>
            <ButtonLinkWithOptions
                selectOptions= {options}
                selectDefaultValue='MSG'
                buttonText="Play all"
                href="www.google.com"
                style="secondary"
                buttonIcon='headphones'
            />
            <ButtonLinkWithOptions
                selectOptions= {options}
                selectDefaultValue='NIV'
                buttonText="Read all"
                href="www.google.com"
                style="primary"
                buttonIcon='book'
            />
        </AllActionsDiv>
    )
};

export default Actions;