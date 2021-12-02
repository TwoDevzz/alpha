import Link from 'next/link';
import styled from 'styled-components';
import { ColorProps, system, variant, width, WidthProps } from 'styled-system';

import Loader, { Props as LoaderProps } from '@components/Loader';

export const variants = {
  primary: {
    borderColor: 'brand.default',
    backgroundColor: 'brand.default',
    color: 'neutral.white',
    '&:hover': {
      borderColor: 'brand.dark',

      backgroundColor: 'brand.dark',
    },
    '&:active': {
      borderColor: 'brand.darkest',

      backgroundColor: 'brand.darkest',
    },
    '&:focus': {
      borderColor: 'brand.light',

      backgroundColor: 'brand.light',
    },
    '&:disabled': {
      borderColor: 'brand.lightest',

      backgroundColor: 'brand.lightest',
    },
  },
  secondary: {
    borderColor: 'neutral.white',
    backgroundColor: 'neutral.white',
    color: 'neutral.900',
    '&:hover': {
      borderColor: 'neutral.200',

      backgroundColor: 'neutral.200',
    },
    '&:active': {
      borderColor: 'neutral.100',

      backgroundColor: 'neutral.100',
    },
    '&:focus': {
      borderColor: 'neutral.100',

      backgroundColor: 'neutral.100',
    },
    '&:disabled': {
      borderColor: 'neutral.100',

      backgroundColor: 'neutral.100',
      color: 'neutral.300',
    },
  },
  positive: {
    borderColor: 'green.500',
    backgroundColor: 'green.500',
    color: 'neutral.white',
    '&:hover': {
      borderColor: 'green.500',

      backgroundColor: 'green.500',
    },
    '&:active': {
      borderColor: 'green.500',

      backgroundColor: 'green.500',
    },
    '&:focus': {
      borderColor: 'green.500',

      backgroundColor: 'green.500',
    },
    '&:disabled': {
      borderColor: 'green.200',

      backgroundColor: 'green.200',
    },
  },
  light: {
    backgroundColor: 'neutral.white',
    color: 'brand.default',
    '&:hover': {
      backgroundColor: 'neutral.200',
    },
    '&:active': {
      backgroundColor: 'neutral.100',
    },
    '&:focus': {
      backgroundColor: 'neutral.100',
    },
    '&:disabled': {
      backgroundColor: 'neutral.100',
      color: 'neutral.300',
    },
  },
  yellow: {
    backgroundColor: 'brand.orange',
    color: 'neutral.white',
    borderColor: 'brand.orange',
    '&:hover': {
      backgroundColor: 'brand.yellow',
    },
    '&:active': {
      backgroundColor: 'brand.yellow',
    },
    '&:focus': {
      backgroundColor: 'brand.yellow',
    },
    '&:disabled': {
      backgroundColor: 'brand.yellow',
      color: 'neutral.300',
    },
  },
};

export const variantsSize = {
  small: {
    paddingX: 5,
    paddingY: 4,
    fontSize: 'xs',
  },
  medium: {
    paddingX: 6,
    paddingY: 5,
    fontSize: 's',
  },
  large: {
    paddingX: 7,
    paddingY: 6,
    fontSize: 's',
  },
};

type Variants = typeof variants;
type Size = typeof variantsSize;

export interface Props {
  variant?: keyof Variants;
  textColor?: ColorProps['color'];
  size?: keyof Size;
  href?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  width?: WidthProps['width'];
  loading?: boolean;
  loader?: React.ReactElement<LoaderProps>;
  disabled?: boolean;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  square?: boolean;
  style?: any;
}

const ButtonStyle = styled.button<Props>`
  border: 1px solid;
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  ${({ theme, square }) => !square && `border-radius: ${theme.radii[2]}px; }`}

  ${width}

  ${variant({
    variants,
    prop: 'variant',
  })}

  ${variant({
    variants: variantsSize,
    prop: 'size',
  })}

  ${system({
    textColor: {
      property: 'color',
      scale: 'colors',
    },
  })}
`;

const Button = ({ href, children, loading, loader, size, ...rest }: Props) => {
  if (loading) {
    return (
      <ButtonStyle disabled size={size} {...rest} onClick={undefined}>
        {loader}
      </ButtonStyle>
    );
  }

  if (href) {
    return (
      <Link href={href} passHref>
        <ButtonStyle size={size} {...rest}>
          {children}
        </ButtonStyle>
      </Link>
    );
  }

  return (
    <ButtonStyle size={size} {...rest}>
      {children}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  loader: <Loader variant="small" />,
};

export default Button;
