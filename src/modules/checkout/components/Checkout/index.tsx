import { useState, useCallback } from 'react';
import { Focused } from 'react-credit-cards';
import { useForm } from 'react-hook-form';

import Box from '@components/Box';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import CheckoutBankslip from '@checkout/components/CheckoutBankslip';
import CheckoutCreditCard from '@checkout/components/CheckoutCreditCard';

import { GetCartTotalResponse } from '@services/order/types';

type TPaymentMethods = 'Cartão de crédito' | 'Boleto bancário';

export interface CardFormValues {
  name: string;
  number: string;
  expiry: string;
  cvc: string;
  focus?: Focused;
  installments: number;
}

interface CheckoutProps {
  cart: GetCartTotalResponse;
}

const Checkout: React.FC<CheckoutProps> = ({ cart }) => {
  const form = useForm<CardFormValues>({
    defaultValues: {
      cvc: '',
      expiry: '',
      name: '',
      number: '',
      installments: 1,
    },
  });

  const [method, setMethod] = useState<TPaymentMethods>('Cartão de crédito');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const isCreditCard = method === 'Cartão de crédito';
  const isBankslip = method === 'Boleto bancário';

  const handleChangeAcceptTerms = useCallback(() => {
    setAcceptTerms(!acceptTerms);
  }, [acceptTerms]);

  return (
    <Box marginTop={{ default: 6, lg: 8 }} overflowX="hidden">
      <Box display="flex" width="100%" flexWrap={['wrap', 'nowrap', 'nowrap']}>
        <Box
          onClick={() => setMethod('Cartão de crédito')}
          display="flex"
          alignItems="center"
          style={{
            cursor: 'pointer',
          }}
          paddingRight={{ default: 0, lg: 4 }}
          marginRight={{ default: 0, lg: 15 }}
          marginBottom={{ default: 4, lg: 4 }}
          flexBasis={{ default: '100%', lg: undefined }}
        >
          <Box marginRight={4} display="flex">
            <Icon
              size="h2"
              name={isCreditCard ? 'CreditCardActive' : 'CreditCard'}
            />
          </Box>
          <Typography
            variant="regular2"
            color={isCreditCard ? 'brand.default' : undefined}
            fontWeight="bold"
          >
            Cartão de crédito
          </Typography>
        </Box>
        <Box
          onClick={() => setMethod('Boleto bancário')}
          display="flex"
          alignItems="center"
          style={{
            cursor: 'pointer',
          }}
          paddingRight={{ default: 0, lg: 4 }}
          marginRight={{ default: 0, lg: 15 }}
          marginBottom={{ default: 4, lg: 4 }}
          flexBasis={{ default: '100%', lg: undefined }}
        >
          <Box marginRight={4} display="flex">
            <Icon size="h2" name={isBankslip ? 'BankslipActive' : 'Bankslip'} />
          </Box>
          <Typography
            variant="regular2"
            color={isBankslip ? 'brand.default' : undefined}
          >
            Boleto bancário
          </Typography>
        </Box>
      </Box>
      <Box marginTop={{ default: 5, lg: 0 }} marginBottom={{ default: 5, lg: 0 }}>
        <Divider />
      </Box>
      {isCreditCard && (
        <CheckoutCreditCard
          total={cart.total.amount_any_installment}
          totalOneInstallment={cart.total.amount_one_installment}
          acceptTerms={acceptTerms}
          onChangeAcceptTerms={() => handleChangeAcceptTerms()}
          form={form}
        />
      )}
      {isBankslip && (
        <CheckoutBankslip
          value={cart.total.amount_one_installment}
          acceptTerms={acceptTerms}
          onChangeAcceptTerms={() => handleChangeAcceptTerms()}
        />
      )}
    </Box>
  );
};

export default Checkout;
