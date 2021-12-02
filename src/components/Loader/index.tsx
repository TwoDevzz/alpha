import styled, { keyframes } from 'styled-components';
import { system, variant } from 'styled-system';

import Box from '@components/Box';

const variants = {
  large: {
    width: 96,
    height: 96,
  },
  medium: {
    width: 48,
    height: 48,
  },
  small: {
    width: 16,
    height: 16,
  },
};

type Variants = typeof variants;

export interface Props {
  variant: keyof Variants;
  color: string;
}

const ringAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderStyled = styled(Box)<Props>`
  display: inline-block;
  position: relative;
  ${variant({
    variants,
    prop: 'variant',
  })}

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    border: ${({ variant }) => variants[variant].width / 4}px solid #fff;
    border-radius: 50%;
    animation: ${ringAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: transparent transparent transparent transparent;

    ${variant({
      variants,
      prop: 'variant',
    })}

    ${system({
      color: {
        property: 'borderLeftColor',
        scale: 'colors',
      },
    })}
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

function Loader({ color, variant }: Props) {
  return (
    <LoaderStyled variant={variant} color={color}>
      <Box />
      <Box />
      <Box />
    </LoaderStyled>
  );
}

Loader.defaultProps = {
  variant: 'medium',
  color: 'brand.default',
};

export default Loader;
