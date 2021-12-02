import api from '@config/api';

import User from '@models/User';

import { SignInRequest, SignUpRequest, SignInResponse } from './types';

const signIn = async (payload: SignInRequest) => {
  const params = { ...payload, email: payload.email.toLowerCase() };
  const { data } = await api.post<SignInResponse>('/users/signin', params);
  return data;
};

const signUp = async (payload: SignUpRequest) => {
  const { data } = await api.post<User>('/users', payload);
  return data;
};

export default { signIn, signUp };
