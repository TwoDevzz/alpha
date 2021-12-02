import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import Box from '@components/Box';
import Divider from '@components/Divider';
import Loader from '@components/Loader';
import Typography from '@components/Typography';

import { useCart } from '@stores/cart/useCart';

import CouponForm from '@cart/components/CouponForm';
import useCartTotal from '@cart/hooks/useCartTotal';

import colors from '@themes/colors';

import { formatPrice } from '@utils/currency';

const CartSummaryMock = ({ isLoading }: { isLoading: boolean }) => (
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
          Seu carrinho está vazio
        </Typography>
      )}
      {isLoading && <Loader />}
    </Box>
  </Box>
);

const CartSummary = () => {
  const { cart } = useCart();
  const { data, isLoading } = useCartTotal(cart);

  if (isLoading) return <CartSummaryMock isLoading={true} />;
  if (!data?.products.length) return <CartSummaryMock isLoading={false} />;

  const isOneInstallmentDiscountDifferent =
    data.total.amount_one_installment !== data.total.amount_any_installment;

  return (
    <Box
      maxWidth={'100%'}
      width={{ default: '100%', lg: 470 }}
      borderRadius={2}
      border={`2px solid ${colors.brand[50]}`}
      height="fit-content"
    >
      <div
        style={{ display: 'none' }}
        data-total={data.total.amount_any_installment / 100}
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        padding={7}
      >
        {data.products.map(product => (
          <Box
            key={product.id}
            display="flex"
            flexDirection="row"
            width="100%"
            marginBottom={5}
          >
            <Box flex={1}>
              <Typography variant="regular2" color={colors.neutral[500]}>
                {product.title}
              </Typography>
            </Box>
            <Box>
              <Typography variant="regular2" color={colors.neutral[500]}>
                {formatPrice(product.previous_price)}
              </Typography>
            </Box>
          </Box>
        ))}
        <Divider />
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          marginTop={5}
          marginBottom={5}
        >
          <Box flex={1}>
            <Typography variant="regular2" color={colors.neutral[500]}>
              Subtotal
            </Typography>
          </Box>
          <Box>
            <Typography variant="regular2" color={colors.neutral[500]}>
              {formatPrice(data.subtotal.amount)}
            </Typography>
          </Box>
        </Box>
        {(data.discount.amount_one_installment > 0 ||
          data.discount.amount_any_installment > 0) && (
          <>
            <Divider />
            <Box display="flex" flexDirection="row" width="100%" marginTop={4}>
              <Box flex={1}>
                <Typography variant="regular2" color={colors.neutral[500]}>
                  <b>Desconto</b>
                </Typography>
              </Box>
              <Box>
                <Typography variant="regular2" color={colors.other.red.default}>
                  -{formatPrice(data.discount.amount_one_installment)}
                </Typography>
              </Box>
            </Box>
          </>
        )}
        {data.upgrade && (
          <div>
            <Box marginTop={4} backgroundColor="#FFFDC2" padding={3}>
              <Typography variant="regular">
                Você contratou o <b>{data.upgrade.subscription.product.title}</b>{' '}
                por <b>{formatPrice(data.upgrade.subscription.total)}</b> com início
                em{' '}
                <b>
                  {format(
                    new Date(data.upgrade.subscription.start_date),
                    'dd/MM/yyyy',
                  )}
                </b>{' '}
                e término em{' '}
                <b>
                  {format(
                    new Date(data.upgrade.subscription.end_date),
                    'dd/MM/yyyy',
                  )}
                </b>
                . Até o momento, foi utilizado{' '}
                <b>{data.upgrade.usage_percent.toFixed(2)}%</b> do seu plano. Por
                isso você tem o crédito de{' '}
                <b>{formatPrice(data.upgrade.balance)}</b> que está sendo aplicado
                como desconto.
              </Typography>
            </Box>
          </div>
        )}
      </Box>
      <Divider />
      <Box padding={7} display="flex" flexDirection="column" width="100%">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
          <Typography variant="medium2" color={colors.neutral[500]}>
            Total
          </Typography>
          <Typography variant="medium2" color={colors.brand.default}>
            {formatPrice(data.total.amount_one_installment)}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          {data.max_installments > 1 && (
            <Typography
              variant="small"
              color={colors.neutral[700]}
              textAlign="right"
            >
              {isOneInstallmentDiscountDifferent && 'ou '}
              em{' '}
              <b>
                {data.max_installments} vezes sem juros{' '}
                {isOneInstallmentDiscountDifferent && (
                  <b style={{ color: colors.brand.default }}>
                    {formatPrice(data.total.amount_any_installment)}
                  </b>
                )}
              </b>
            </Typography>
          )}
        </Box>
      </Box>
      <CouponForm />
    </Box>
  );
};

export default CartSummary;
