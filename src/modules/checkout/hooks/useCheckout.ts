import { useMutation, UseQueryOptions } from 'react-query';

import { APIError } from '@config/api';

import { OrderRequest } from '@models/Order';

import services from '@services';
import { CheckoutPayload } from '@services/order/types';

const useCheckout = (
  config?: UseQueryOptions<OrderRequest, APIError, OrderRequest>,
) => {
  return useMutation<OrderRequest, APIError, CheckoutPayload>(
    ['oder/checkout'],
    variables => services.order.checkout(variables),
    config,
  );
};

export default useCheckout;
