import Link, { LinkProps } from 'next/link';
import styled from 'styled-components';
import { FontSizeProps, TextStyleProps, variant } from 'styled-system';

import Typography, { Props } from '@components/Typography';

const variants = {
  primary: {
    color: 'brand.default',
    '&:hover': {
      color: 'brand.dark',
      textDecoration: 'underline',
    },
  },
  secondary: {
    color: 'neutral.900',
    '&:hover': {
      color: 'neutral.500',
      textDecoration: 'underline',
    },
  },
  light: {
    color: 'neutral.white',
    '&:hover': {
      color: 'neutral.100',
      textDecoration: 'underline',
    },
  },
};

interface WrapperProps {
  className?: string;
  href?: LinkProps['href'];
  as?: LinkProps['as'];
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  typography?: Props['variant'];
  variant?: keyof typeof variants;
  fontSize?: FontSizeProps['fontSize'];
  textTransform?: TextStyleProps['textStyle'];
}

const Wrapper: React.FC<WrapperProps> = ({
  as,
  children,
  className,
  href = '#',
  onClick,
  typography,
  textTransform,
  fontSize,
  ...props
}) => (
  <Link href={href} as={as} passHref={!!href} {...props}>
    <Typography
      variant={typography}
      as="a"
      fontSize={fontSize}
      className={className}
      onClick={onClick}
      textTransform={textTransform}
    >
      {children}
    </Typography>
  </Link>
);

const StyledLink = styled(Wrapper)`
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-weight: bold;

  ${variant({
    variants,
  })}

  &:focus {
    outline: none;
    border: 0;
  }
`;

StyledLink.defaultProps = {
  variant: 'primary',
  fontSize: ['s'],
};

export default StyledLink;
