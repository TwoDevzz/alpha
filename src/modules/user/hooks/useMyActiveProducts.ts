import { useQuery, UseQueryOptions } from 'react-query';

import { APIError } from '@config/api';

import { MyProductsRequest } from '@models/OrderProduct';

import services from '@services';

const useMyProducts = (
  config?: UseQueryOptions<unknown, APIError, MyProductsRequest>,
) => {
  const { data, isLoading, error, refetch } = useQuery(
    'me/products',
    services.me.retriveProducts,
    {
      retry: false,
      ...config,
    },
  );

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useMyProducts;
