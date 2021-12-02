import api from '@config/api';

import Card from '@models/Card';
import OrderProduct from '@models/OrderProduct';
import UserFeatures from '@models/UserFeatures';

import {
  GetMyProfileResponse,
  UpdateMyProfileRequest,
  UpdatePasswordRequest,
} from './types';

const getMyProfile = async () => {
  const { data } = await api.get<GetMyProfileResponse>('/me');
  return data;
};

const retriveCards = async () => {
  const { data } = await api.get<Card[]>('/me/cards');
  return data || [];
};

const retriveProducts = async () => {
  const { data } = await api.get<{
    products: OrderProduct[];
  }>('/me/products');
  return data || [];
};

const updatePassword = async (payload: UpdatePasswordRequest) => {
  const { data } = await api.put('/me/password', payload);
  return data;
};

const updateMyProfile = async (payload: UpdateMyProfileRequest) => {
  const { data } = await api.put('/me', payload);
  return data;
};

const retrieveDiscord = async (userId: string) => {
  const { data } = await api.get(`/discord/authenticate?user_id=${userId}`);
  return data;
};

const retrieveFeatures = async () => {
  const { data } = await api.get<UserFeatures[]>('/me/features');
  return data;
};

export default {
  getMyProfile,
  retriveCards,
  updateMyProfile,
  updatePassword,
  retriveProducts,
  retrieveDiscord,
  retrieveFeatures,
};
