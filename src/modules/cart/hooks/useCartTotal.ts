import { useQuery } from 'react-query';

import { APIError } from '@config/api';

import { StateCart } from '@stores/cart/useCart';

import services from '@services';
import { GetCartTotalResponse } from '@services/order/types';

const useCartTotal = (cart: StateCart) => {
  const { data, error, isLoading, refetch } = useQuery<
    GetCartTotalResponse,
    APIError
  >(
    ['orders/cart/total', cart],
    async () => {
      const cartTotalPayload = {
        products: cart.products.map(product => ({ id: product.id })),
        coupons: cart.coupons,
      };

      return services.order.getCartTotal(cartTotalPayload);
    },
    {
      enabled: false,
      retry: false,
    },
  );

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};

export default useCartTotal;
