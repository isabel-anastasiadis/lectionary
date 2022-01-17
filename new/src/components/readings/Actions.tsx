import { styled } from '../../stitches.config';
import ButtonLinkWithOptions from '../common/ButtonLinkWithOptions';

const AllActionsDiv = styled("div", {

});

interface ActionsProps {
    
}

const Actions = ({}: ActionsProps) => {
    return (
        <AllActionsDiv>
            <ButtonLinkWithOptions
                buttonText="Listen"
                href="www.google.com"
                style="secondary"
                buttonIcon='headphones'
            />
            <ButtonLinkWithOptions
                buttonText="Read"
                href="www.google.com"
                style="primary"
                buttonIcon='headphones'
            />
        </AllActionsDiv>
    )
};

export default Actions;