import { styled } from '../stitches.config';

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
    {
        name: 'chevron',
        width: 10,
        height: 6,
        viewBox: '0 0 10 6',
        path: 'M0.46967 0.46967C0.762563 0.176777 1.23744 0.176777 1.53033 0.46967L5 3.93934L8.46967 0.46967C8.76256 0.176777 9.23744 0.176777 9.53033 0.46967C9.82322 0.762563 9.82322 1.23744 9.53033 1.53033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.46967 1.53033C0.176777 1.23744 0.176777 0.762563 0.46967 0.46967Z',
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