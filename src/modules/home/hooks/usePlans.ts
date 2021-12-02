import { useQuery } from 'react-query';

import { APIError } from '@config/api';

import { ProductType } from '@models/Product';

import services from '@services';
import { FindAllResponse } from '@services/product/types';

const usePlans = () => {
  const { data, isLoading } = useQuery<FindAllResponse, APIError, FindAllResponse>(
    'products',
    () => services.product.find(),
    {
      retry: false,
    },
  );
  return {
    data: data?.products.filter(item => item.type === ProductType.Plan),
    isLoading,
  };
};

export default usePlans;
