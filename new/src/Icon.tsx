import { styled } from './stitches.config';

interface IconProps {
    name: string
    color?: string
    rotate?: string
}

const icons = [
    {
        name: 'arrow',
        width: 12,
        height: 12,
        viewBox: '0 0 12 12',
        path: 'M6 0C6.55228 0 7 0.447715 7 1V8.58579L10.2929 5.29289C10.6834 4.90237 11.3166 4.90237 11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L0.292893 6.70711C-0.0976311 6.31658 -0.0976311 5.68342 0.292893 5.29289C0.683417 4.90237 1.31658 4.90237 1.70711 5.29289L5 8.58579V1C5 0.447715 5.44772 0 6 0Z',
    },
]

const StyledIcon = styled('svg', {})

const Icon = ({name, color, rotate}: IconProps) => {
    const icon = icons.find(item => item.name === name && item);
    const rotation = 'rotate(' + rotate + 'deg)';
    return (
        <StyledIcon css={{transform: rotation}} fill={color ? color : 'currentColor'} width={icon?.width} height={icon?.height} viewBox={icon?.viewBox} xmlns="http://www.w3.org/2000/svg">
            <path d={icon?.path}/>
        </StyledIcon>
    )
}

export default Icon