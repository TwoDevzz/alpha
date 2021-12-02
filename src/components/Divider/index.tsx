import styled from 'styled-components';
import { variant } from 'styled-system';

import Box from '@components/Box';

const variants = {
  vertical: {
    width: '1px',
    height: '100%',
  },
  horizontal: {
    width: '100%',
    height: '1px',
  },
};

type Variants = typeof variants;

export interface Props {
  variant?: keyof Variants;
}

const Divider = styled(Box)<Props>`
  background-color: ${({ theme }) => theme.colors.neutral[200]};

  ${variant({ variants })}
`;

Divider.defaultProps = {
  variant: 'horizontal',
};

export default Divider;
