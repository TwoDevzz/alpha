import { format, isAfter } from 'date-fns';
import React from 'react';
import styled from 'styled-components';

import Box from '@components/Box';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import useMyProducts from '@user/hooks/useMyActiveProducts';

import colors from '@themes/colors';
import Loader from '@components/Loader';

const ProductItemContainer = styled(Box)`
  border-radius: ${({ theme }) => theme.radii[2]}px;
  border: 2px solid;
  border-color: ${colors.brand[50]};
  margin-bottom: 14px;
`;

const MyProducts = () => {
  const { data, isLoading } = useMyProducts();
  const orderProducts = data?.products || [];

  const getFormatedDate = (date: string) => {
    return format(new Date(date), 'dd/MM/yyyy');
  };

  return (
    <Box>
      <Box maxWidth={570}>
        {orderProducts.length ? orderProducts.map(orderProduct => (
          <ProductItemContainer key={orderProduct.id}>
            <Box display="flex" flexDirection="row" alignItems="center" padding={5}>
              <Box
                width={42}
                height={42}
                marginRight={5}
                borderRadius="50%"
                backgroundColor={
                  orderProduct.product.cart_icon_bg_color ?? 'brand.orange'
                }
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon
                  fill="neutral.white"
                  size={30}
                  name={orderProduct.product.cart_icon || 'Cart'}
                />
              </Box>
              <Box flex={1}>
                <Typography variant="action3">
                  {orderProduct.product.title}
                </Typography>
                <Box>
                  <Box marginTop={3} display="flex" flexDirection="column">
                    <Typography color={colors.neutral[300]} variant="regular">
                      Adquirido em:{' '}
                      {getFormatedDate(
                        orderProduct.start_date || orderProduct.created_at,
                      )}
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    {isAfter(new Date(orderProduct.end_date), new Date()) ? (
                      <Typography color={colors.neutral[300]} variant="regular">
                        Valido até: {getFormatedDate(orderProduct.end_date)}
                      </Typography>
                    ) : (
                      <Typography color={colors.other.red.light} variant="regular">
                        Expirou em: {getFormatedDate(orderProduct.end_date)}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </ProductItemContainer>
        )) : (
          <Box
            maxWidth={'100%'}
            width={{ default: '100%', lg: 470 }}
            borderRadius={2}
            border={`2px solid ${colors.brand[50]}`}
            backgroundColor={colors.neutral[50]}
            height="fit-content"
          >
            <Box
              minWidth={300}
              height={400}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              {!isLoading && (
                <Typography style={{ margin: 0 }} variant={'regular2'}>
                  Você não tem produtos
                </Typography>
              )}
              {isLoading && <Loader />}
            </Box>
          </Box>
        )}
        {}
      </Box>
    </Box>
  );
};

export default MyProducts;
