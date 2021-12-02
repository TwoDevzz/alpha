import api from '@config/api';

import { Course, Plan } from '@models/Product';

import { FindAllResponse } from './types';

const find = async () => {
  const { data } = await api.get<FindAllResponse>('/products');
  return data;
};

const upsell = async (productId: string) => {
  const { data } = await api.get<FindAllResponse>(`/products/${productId}/upsell`);
  return data;
};

const getByIdOrSlug = async (idOrSlug: string) => {
  const { data } = await api.get<Course | Plan>(`/products/${idOrSlug}`);
  return data;
};

const getFeaturedPlan = async () => {
  const product = (await getByIdOrSlug('plan-early-user')) as Plan;
  return product;
};

export default { find, getByIdOrSlug, upsell, getFeaturedPlan };
