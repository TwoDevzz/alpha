import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Box from '@components/Box';
import Button from '@components/Button';
import LinkTerms from '@components/LinkTerms';
import Typography from '@components/Typography';

import { getErrorMessage } from '@config/api';

import { useCart } from '@stores/cart/useCart';

import useCheckout from '@checkout/hooks/useCheckout';

import { formatPrice } from '@utils/currency';

const CheckoutBankslipWrapper = styled(Box)`
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

interface CheckoutBankslipProps {
  value: number;
  acceptTerms: boolean;
  onChangeAcceptTerms: () => void;
}

const CheckoutBankslip: React.FC<CheckoutBankslipProps> = ({
  value,
  acceptTerms,
  onChangeAcceptTerms,
}) => {
  const router = useRouter();
  const { clean } = useCart();
  const { mutate, isLoading, error } = useCheckout({
    onSuccess: data => {
      clean();
      router.push({
        pathname: '/thanks',
        query: { id: data.order.id, type: 'bank-slip' },
      });
    },
  });
  const [bankslipError, setBankslipError] = useState('');

  const coupons = useCart(state => state.cart.coupons);
  const products = useCart(state => state.cart.products);

  useEffect(() => {
    if (!error) {
      setBankslipError('');
    } else {
      const parsedError = getErrorMessage(error?.response, 'Erro ao gerar boleto');
      setBankslipError(parsedError);
    }
  }, [error]);

  const handleCheckout = () => {
    mutate({
      installments: 0,
      products: products.map(product => ({ id: product.id })),
      coupons,
    });
  };

  return (
    <CheckoutBankslipWrapper
      marginTop={10}
      borderRadius={2}
      paddingY={10}
      paddingX={[5, 80, 120]}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="medium1" textAlign="center">
        O pagamento pode ser efetuado pelo aplicativo de sua instituição financeira,
        além de qualquer banco ou casa lotérica do pais.
      </Typography>
      <LinkTerms onChange={onChangeAcceptTerms} value={acceptTerms} />
      <Typography fontSize={24} color="brand.default" fontWeight="bold">
        {formatPrice(value)}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center" marginTop={6}>
        {Boolean(bankslipError) && (
          <Box marginBottom={4}>
            <Typography fontSize="xs" color="other.error">
              {bankslipError}
            </Typography>
          </Box>
        )}
        <Button
          variant="positive"
          width={{ lg: 180, default: '100%' }}
          onClick={handleCheckout}
          disabled={!acceptTerms}
          loading={isLoading}
        >
          GERAR BOLETO
        </Button>
      </Box>
    </CheckoutBankslipWrapper>
  );
};

export default CheckoutBankslip;
