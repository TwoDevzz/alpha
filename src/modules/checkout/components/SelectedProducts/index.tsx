import Box from '@components/Box';
import Divider from '@components/Divider';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

import { formatPrice } from '@utils/currency';

import { GetCartTotalProduct } from '@services/order/types';

interface Props {
  products: GetCartTotalProduct[];
}

const SelectedProducts = ({ products }: Props) => {
  return (
    <Box marginBottom={11}>
      <Box
        display="flex"
        alignItems="center"
        maxWidth="100%"
        justifyContent="space-between"
        marginTop="48px"
        marginBottom="16px"
      >
        <Typography variant="h4">Produtos selecionados</Typography>
        <StyledLink typography="regular" href="/cart">
          Alterar
        </StyledLink>
      </Box>
      {products.map(
        ({ title, previous_price, current_price_one_installment }, i) => {
          const hasDiscount = previous_price !== current_price_one_installment;

          return (
            <Box key={i}>
              <Divider />
              <Box
                display="flex"
                alignItems="center"
                maxWidth="100%"
                justifyContent="space-between"
                marginY={4}
              >
                <Box maxWidth={{ default: 280, lg: 'initial' }} marginRight={4}>
                  <Typography variant="regular">{title}</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  {hasDiscount ? (
                    <>
                      <Typography variant="regular">
                        <span style={{ textDecoration: 'line-through' }}>
                          {formatPrice(previous_price)}
                        </span>
                        &nbsp; - &nbsp;
                        {formatPrice(current_price_one_installment)}
                      </Typography>
                    </>
                  ) : (
                    <Typography variant="regular">
                      {formatPrice(previous_price)}
                    </Typography>
                  )}
                </Box>
              </Box>
              {i + 1 === products.length && <Divider />}
            </Box>
          );
        },
      )}
    </Box>
  );
};

export default SelectedProducts;
