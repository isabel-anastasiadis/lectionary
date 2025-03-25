
import { styled } from '../../stitches.config';
import Icon from './Icon';
import { ButtonStyle, ButtonVariants } from './Button';
import FlexibleSelect from './FlexibleSelect';
import { toSnakeCase } from '../../helpers/stringHelpers';


const WrapperDiv = styled('div', {
  borderRadius: "10px",
  overflow: 'hidden', // means even when the contents doesn't have border radius, it appears to
  minHeight: "50px",
  display: "flex",
  marginTop: "10px",
  fontWeight: "700",
  variants: {
    style: ButtonStyle
  }
});

const Link = styled('a', {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: "none",
  variants: {
    style: {
      primary: {
        ...ButtonStyle.primary,
        borderRight: 'solid $toggleCheckedSelect 1px'
      },
      secondary: {
        ...ButtonStyle.secondary,
        borderRight: 'solid $toggleSelect 1px'
      }
    }
  }
});

const LinkText = styled('div', {
  marginLeft: '4px',
  fontSize: 'inherit'
});

interface ButtonProps {
  selectOptions: Array<{text: string, value: string}>,
  selectDefaultValue: string,
  buttonText?: string,
  href: string,
  buttonStyle?: ButtonVariants['style'],
  buttonIcon?: string,
  buttonIconColor?: string,
  selectOnChange: (value: string) => void;
}

const ButtonLinkWithOptions = ({selectOptions, selectDefaultValue, selectOnChange, buttonText, href, buttonStyle, buttonIcon }: ButtonProps) => {
  return (
    <WrapperDiv>
      <Link href={href} style={buttonStyle} data-category="link" data-action="click" data-label={toSnakeCase(buttonText ?? '')}>
        <Icon name={buttonIcon ?? "arrow"}></Icon>
        <LinkText>
          {buttonText}
        </LinkText>
      </Link>
      <FlexibleSelect 
        selectStyle={buttonStyle} 
        newExternalValue={selectDefaultValue} 
        options={selectOptions} 
        onChange={selectOnChange}
        truncatedDisplayText={true}
        dataContext={toSnakeCase(buttonText ?? '')}/>
    </WrapperDiv>
  )
}

export default ButtonLinkWithOptions;