import styled from 'styled-components';
import { variant } from 'styled-system';

const variants = {
  primary: {
    backgroundColor: 'other.yellow',
  },
  red: {
    backgroundColor: 'other.red.light',
    color: 'other.red.default',
  },
  green: {
    backgroundColor: 'green.500',
    color: 'neutral.white',
  },
};

type Variants = typeof variants;

export interface Props {
  variant?: keyof Variants;
}

const Chip = styled.div<Props>`
  width: fit-content;
  border-radius: ${({ theme }) => theme.radii[2]}px;
  padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};

  ${variant({
    variants,
    prop: 'variant',
  })}
`;

Chip.defaultProps = {
  variant: 'primary',
};

export default Chip;
