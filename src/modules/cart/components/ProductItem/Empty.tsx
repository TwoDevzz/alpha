import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import styled from 'styled-components';
import { variant } from 'styled-system';

import Box from '@components/Box';
import Typography from '@components/Typography';

import colors from '@themes/colors';

const variants = {
  primary: {
    backgroundColor: 'other.yellow',
  },
};

type Variants = typeof variants;

export interface Props {
  variant?: keyof Variants;
}

const ProductItemContainer = styled.div<Props>`
  border-radius: ${({ theme }) => theme.radii[2]}px;
  padding: ${({ theme }) =>
    `${theme.space[5]}px 0px ${theme.space[5]}px ${theme.space[5]}px`};
  border: 2px solid;
  border-color: ${colors.brand[50]};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
  background-color: ${colors.neutral[50]};

  ${variant({
    variants,
    prop: 'variant',
  })}
`;

const ProductItemEmpty = () => {
  return (
    <ProductItemContainer>
      <Box
        maxWidth={'100%'}
        minWidth={{
          default: 'auto',
          lg: 350,
        }}
        display="flex"
        alignItems="center"
      >
        <Box
          minWidth={32}
          minHeight={32}
          borderRadius={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight={5}
        >
          <SentimentVeryDissatisfiedIcon />
        </Box>
        <Box paddingRight={6} flex={1}>
          <Typography variant={'regular2'}>Seu carrinho está vazio</Typography>
        </Box>
      </Box>
    </ProductItemContainer>
  );
};

export default ProductItemEmpty;
