import { useQuery } from 'react-query';

import { StateCart } from '@stores/cart/useCart';

import services from '@services';

const useProductsUpsell = (cart: StateCart) => {
  const { data, isLoading, refetch } = useQuery(
    ['products', cart],
    async () => {
      return services.product.upsell(cart?.products[0]?.id);
    },
    {
      retry: false,
    },
  );

  return {
    data,
    isLoading,
    refetch,
  };
};

export default useProductsUpsell;
