import { useQuery } from 'react-query';

import { APIError } from '@config/api';

import { Plan } from '@models/Product';

import services from '@services';

const useEarlyAdopter = () => {
  return useQuery<Plan, APIError, Plan>(
    'fetchProduct',
    services.product.getFeaturedPlan,
    { retry: false },
  );
};

export default useEarlyAdopter;
