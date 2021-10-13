import { styled } from './stitches.config';

const Track = styled('div', {
    display: 'inline-flex',
    background: '$toggleBase',
    borderRadius: '999px',
    zIndex: '0',
    position: 'relative',
    alignItems: 'center',
    height: '40px',
    padding: '2px',
});

const Thumb = styled('div', {
    boxSizing: 'border-box',
    content: '',
    display: 'block',
    width: '98px',
    height: '36px',
    marginLeft: '2px',
    top: '2px',
    position: 'absolute',
    borderRadius: '999px',
    zIndex: '1',
    background: '$toggleCheckedBase',
    transition: 'all 0.1s ease',
});

const Label = styled('label', {
    width: '98px',
    borderRadius: '999px',
    height: '36px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: '20px',
    cursor: 'pointer',
    background: 'transparent',
    color: '$foreground',
    transition: 'all 0.1s ease',
    userSelect: 'none',
    position: 'relative',
    zIndex: '2',
    '&:before': {
        content: '',
        display: 'block',
        width: '100%',
        height: '100%',
        left: '0px',
        top: '0px',
        position: 'absolute',
        borderRadius: '999px',
        pointerEvents: 'none',
        zIndex: '-1',
        background: 'transparent',
    },
    '&:hover:before, &:focus:before': {
        background: '$toggleStage',
    },
    '&:active:before': {
        background: '$toggleSelect',
    },
})

const Input = styled('input', {
    opacity: '0',
    width: '0',
    height: '0',
    position: 'absolute',
    [`&:checked + ${Label}`]: {
        color: '$background',
    },
    [`&:checked + ${Label}:hover:before`]: {
        background: '$toggleCheckedStage',
    },
    [`&:checked + ${Label}:focus:before`]: {
        background: '$toggleCheckedStage', 
    },
    [`&:checked + ${Label}:active:before`]: {
        background: '$toggleCheckedSelect',
    },
    [`&:checked:nth-of-type(2) ~ ${Thumb}`]: {
        left: '100px',
    }
})


interface ToggleProps {
    onChange: (value: string) => void;
    selected: string;
    options: { value: string; content: string }[];
}

const Toggle = ({ options, selected, onChange }: ToggleProps) => {
    const trackWidth = ((options.length) * 100) + 'px';
    const leftOffset = options.findIndex(item => item.value === selected) * 98 + 'px';
    return (
        <Track css={{width: trackWidth}}>
            {options.map((item, i) => {
                const checked = item.value === selected;
                return (
                    <div key={i}>
                        <Input
                            id={"for-" + item.value}
                            type="radio"
                            name={"id-" + Math.random()}
                            value={item.value}
                            checked={checked}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                return e.target.checked && onChange(e.target.value);
                            }}
                        />
                        <Label htmlFor={"for-" + item.value}>
                            {item.content}
                        </Label>
                    </div>
                    );
                })}
            <Thumb css={{left: leftOffset}}></Thumb>
        </Track>
    )
}
  
export default Toggle;