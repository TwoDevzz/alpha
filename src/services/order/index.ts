import api from '@config/api';

import { OrderRequest } from '@models/Order';

import {
  CheckoutPayload,
  GetCartTotalPayload,
  GetCartTotalResponse,
  ValidateCouponResponse,
} from './types';

const getCartTotal = async (cart: GetCartTotalPayload) => {
  const { data } = await api.post<GetCartTotalResponse>('/orders/cart', cart);
  return data;
};

const validateCoupon = async (coupon: string) => {
  const { data } = await api.get<ValidateCouponResponse>(
    `/coupons/validate/${coupon}`,
  );
  return data;
};

const checkout = async (order: CheckoutPayload) => {
  const { data } = await api.post<OrderRequest>(
    process.env.NODE_ENV === 'production'
      ? 'https://tnt6x8ajlip.live.verygoodproxy.com/orders/checkout'
      : '/orders/checkout',
    order,
  );
  return data;
};

const retrieve = async (orderId: string) => {
  const { data } = await api.get(`/orders/${orderId}`);
  return data;
};

const retrieveWithToken = async (orderId: string, token: string) => {
  const { data } = await api.get(`/orders/${orderId}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });
  return data;
};

export default {
  getCartTotal,
  validateCoupon,
  checkout,
  retrieve,
  retrieveWithToken,
};
