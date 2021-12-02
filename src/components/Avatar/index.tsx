import styled from 'styled-components';
import { variant } from 'styled-system';

const variants = {
  large: {
    width: 120,
    height: 120,
  },
  medium2: {
    width: 80,
    height: 80,
  },
  medium: {
    width: 48,
    height: 48,
  },
  small: {
    width: 40,
    height: 40,
  },
};

type Variants = typeof variants;

export interface Props {
  variant?: keyof Variants;
  src: string;
}

const AvatarStyled = styled.img<Props>`
  border-radius: 50%;
  object-fit: cover;

  ${variant({ variants })}
`;

const Avatar = ({ variant = 'medium', src }: Props) => {
  const { height, width } = variants[variant];

  return <AvatarStyled src={src} width={width} height={height} variant={variant} />;
};

Avatar.defaultProps = {
  variant: 'medium',
};

export default Avatar;
