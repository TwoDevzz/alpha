import { useQuery } from 'react-query';

import { APIError } from '@config/api';

import { OrderRequest } from '@models/Order';

import services from '@services';

export const useOrder = (orderId: string) => {
  return useQuery<OrderRequest, APIError, OrderRequest>(
    ['order/id', orderId],
    () => services.order.retrieve(orderId),
    { retry: false },
  );
};
