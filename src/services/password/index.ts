import api from '@config/api';

import { ForgotPasswordRequest, ResetPasswordRequest } from './types';

const forgotPassword = async (payload: ForgotPasswordRequest) => {
  const { data } = await api.post('users/password/forgot', payload);
  return data;
};

const resetPassword = async (payload: ResetPasswordRequest) => {
  const { data } = await api.post('users/password/reset', payload);
  return data;
};

export default { forgotPassword, resetPassword };
