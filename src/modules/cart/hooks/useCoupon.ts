import { useQuery } from 'react-query';

import services from '@services';

const useCoupon = (coupon: string) => {
  const { data, isLoading, error, isSuccess, refetch } = useQuery(
    ['coupons/validate', coupon],
    () => services.order.validateCoupon(coupon),
    {
      enabled: false,
      retry: false,
    },
  );

  return {
    data,
    error,
    isSuccess,
    isLoading,
    refetch,
  };
};

export default useCoupon;
