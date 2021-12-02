import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { useCallback, useEffect, useState } from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import TextField from '@components/Textfield';

import { useCart } from '@stores/cart/useCart';

import useCoupon from '@cart/hooks/useCoupon';

import colors from '@themes/colors';

const CouponForm = () => {
  const addCoupon = useCart(state => state.addCoupon);
  const [coupon, setCoupon] = useState<string>('');
  const [couponFetch, setCouponFetch] = useState('');

  const { error, isLoading, refetch, isSuccess } = useCoupon(couponFetch);

  const validateCoupon = useCallback(() => {
    setCouponFetch(coupon);
    setTimeout(() => refetch(), 500);
  }, [coupon]);

  useEffect(() => {
    if (isSuccess) {
      addCoupon(coupon);
      setCoupon('');
      setCouponFetch(coupon);
    }
  }, [isSuccess]);

  return (
    <Box
      display="flex"
      padding={5}
      flexDirection={{ default: 'column', lg: 'row' }}
      alignItems="flex-start"
      backgroundColor={colors.neutral[100]}
    >
      <Box
        flex={1}
        width={{
          default: '100%',
          lg: 'auto',
        }}
      >
        <TextField
          InputProps={{
            startAdornment: (
              <LoyaltyIcon
                style={{ color: colors.other.red.default, marginRight: 10 }}
              />
            ),
          }}
          disabled={isLoading}
          placeholder="Cupom de desconto"
          value={coupon}
          error={Boolean(error)}
          onChange={e => {
            setCoupon(e.target.value);
          }}
        />
      </Box>
      <Box
        marginLeft={{ default: 0, lg: 5 }}
        marginTop={{
          default: 4,
          lg: 0,
        }}
        width={{
          default: '100%',
          lg: 'auto',
        }}
      >
        <Button
          width={'100%'}
          loading={isLoading}
          disabled={!coupon}
          variant={'primary'}
          onClick={validateCoupon}
        >
          APLICAR
        </Button>
      </Box>
    </Box>
  );
};

export default CouponForm;
