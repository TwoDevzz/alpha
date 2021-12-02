import MenuItem from '@material-ui/core/MenuItem';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CreditCard from 'react-credit-cards';
import { Controller, UseFormReturn } from 'react-hook-form';
import { createGlobalStyle } from 'styled-components';

import Box from '@components/Box';
import Button from '@components/Button';
import Divider from '@components/Divider';
import LinkTerms from '@components/LinkTerms';
import MaskInput from '@components/MaskInput';
import Select from '@components/Select';
import TextField from '@components/Textfield';
import Typography from '@components/Typography';

import { getErrorMessage } from '@config/api';

import { useCard } from '@stores/cards/useCard';
import { useCart } from '@stores/cart/useCart';

import Card from '@models/Card';

import { CardFormValues } from '@checkout/components/Checkout';
import useCheckout from '@checkout/hooks/useCheckout';

import { formatPrice } from '@utils/currency';
import { formatDateCard } from '@utils/date';

import CardList from '../CardList';

const OverrideCardsStyleCss = createGlobalStyle`
  .rccs {
    margin: 0;
  }

  .rccs__card--front, .rccs__card--back {
    box-shadow: none;
  }
`;

interface CheckoutCreditCardProps {
  card?: Card | null;
  total: number;
  totalOneInstallment: number;
  acceptTerms: boolean;
  onChangeAcceptTerms: () => void;
  form: UseFormReturn<CardFormValues>;
}

const getFormatMask = (card: Card | null | undefined) => {
  return card
    ? {
        '9': '\\.*',
      }
    : undefined;
};

const CheckoutCreditCard: React.FC<CheckoutCreditCardProps> = ({
  total,
  totalOneInstallment,
  acceptTerms,
  form,
  onChangeAcceptTerms,
}) => {
  const selectedCard = useCard(state => state.card);
  const coupons = useCart(state => state.cart.coupons);
  const products = useCart(state => state.cart.products);
  const { clean } = useCart();
  const router = useRouter();
  const { mutate, isLoading, error } = useCheckout({
    onSuccess: data => {
      clean();
      router.push({
        pathname: '/thanks',
        query: { id: data.order.id, type: 'credit-card' },
      });
    },
  });
  const { getValues, watch, control, handleSubmit } = form;
  const [creditError, setCreditError] = useState('');

  useEffect(() => {
    if (!error) {
      setCreditError('');
    } else {
      const parsedError = getErrorMessage(
        error?.response,
        'Erro ao pagar com cartão',
      );
      setCreditError(parsedError);
    }
  }, [error]);

  useEffect(() => {
    if (selectedCard) {
      form.setValue('cvc', '***');
      form.setValue(
        'expiry',
        formatDateCard(selectedCard.expiration_month, selectedCard.expiration_year),
      );
      form.setValue('name', selectedCard.name);
      form.setValue('number', selectedCard.first_numbers);
    } else {
      form.reset();
    }
  }, [selectedCard]);

  watch();
  const formData = getValues();

  const onSubmit = ({
    cvc,
    name,
    expiry,
    number,
    installments,
  }: CardFormValues) => {
    const startYear = String(new Date().getFullYear()).substring(2, -1);
    const [month, year] = expiry.split('/');

    mutate({
      card: !selectedCard
        ? {
            name,
            number: number.replaceAll(' ', ''),
            security_code: cvc,
            expiration_year: startYear + year,
            expiration_month: month,
          }
        : undefined,
      installments,
      coupons,
      card_id: selectedCard?.id,
      products: products.map(product => ({ id: product.id })),
    });
  };

  return (
    <Box
      paddingY={{ default: 6, lg: 10 }}
      display="flex"
      flexWrap={{ default: 'wrap', lg: 'nowrap' }}
    >
      <OverrideCardsStyleCss />
      <Box
        flex={{ default: '100%', lg: '1 0 35%' }}
        display={{ default: 'none', lg: 'initial' }}
        marginRight="5%"
      >
        <Box>
          <CreditCard
            cvc={formData.cvc}
            expiry={formData.expiry}
            focused={'number'}
            name={formData.name}
            number={selectedCard ? selectedCard.first_numbers : formData.number}
            preview={!!selectedCard}
            locale={{
              valid: 'valido até',
            }}
          />
        </Box>
        <CardList />
      </Box>
      <Box flex="100%" display={{ default: 'block', lg: 'none' }}>
        <CardList />
      </Box>
      <Box
        flex="100%"
        marginTop={5}
        marginBottom={9}
        display={{ default: 'block', lg: 'none' }}
      >
        <Divider />
      </Box>
      <Box
        as="form"
        flex={{ default: '100%', lg: '1 0 55%' }}
        marginLeft={{ default: 0, lg: '5%' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box marginBottom={5}>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                disabled={!!selectedCard}
                label="Nome"
                placeholder="Digite seu nome"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Nome é obrigatório' }}
          />
        </Box>
        <Box marginBottom={5}>
          <Controller
            name="number"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <MaskInput
                disabled={!!selectedCard}
                placeholder="Digite o número do cartão"
                value={value}
                onChange={onChange}
                error={!!error}
                label="Número no cartão"
                mask="9999 9999 9999 9999"
                formatChars={getFormatMask(selectedCard)}
              />
            )}
            rules={{ required: 'Número do cartão é obrigatório' }}
          />
        </Box>
        <Box display="flex" marginBottom={5}>
          <Box flex={1}>
            <Controller
              name="expiry"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <MaskInput
                  disabled={!!selectedCard}
                  placeholder="__/__"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  label="Validade"
                  mask="99/99"
                />
              )}
              rules={{ required: 'Validade é obrigatória' }}
            />
          </Box>
          <Box display="flex" alignItems="flex-end" flex={1} marginLeft={5}>
            <Controller
              name="cvc"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  disabled={!!selectedCard}
                  label="CVC"
                  placeholder=""
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'CVC é obrigatório' }}
            />
          </Box>
        </Box>
        <Box marginBottom={5}>
          <Controller
            name="installments"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Select
                label="Parcelar em"
                value={value}
                onChange={onChange}
                error={!!error}
              >
                {Array.from(Array(12).keys()).map(installment => {
                  const i = installment + 1;
                  const isFirst = i === 1;

                  return (
                    <MenuItem key={i} value={i}>
                      {i}x {isFirst ? '' : 'sem juros'}{' '}
                      {formatPrice(isFirst ? totalOneInstallment : total / i)}
                    </MenuItem>
                  );
                })}
              </Select>
            )}
            rules={{ required: 'Número de parcelas é obrigatório' }}
          />
        </Box>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          <Box marginRight={5}>
            <Typography variant="regular">Total</Typography>
          </Box>
          <Typography fontSize={24} color="brand.default" fontWeight="bold">
            {formData.installments === 1
              ? formatPrice(totalOneInstallment)
              : formatPrice(total)}
          </Typography>
        </Box>
        <LinkTerms onChange={onChangeAcceptTerms} value={acceptTerms} />
        {Boolean(creditError) && (
          <Box marginBottom={4}>
            <Typography fontSize="xs" color="other.error">
              {creditError}
            </Typography>
          </Box>
        )}
        <Button
          type="submit"
          width={{ lg: 220, default: '100%' }}
          variant="positive"
          loading={isLoading}
          disabled={!acceptTerms}
        >
          FINALIZAR COMPRA
        </Button>
      </Box>
    </Box>
  );
};

export default CheckoutCreditCard;
