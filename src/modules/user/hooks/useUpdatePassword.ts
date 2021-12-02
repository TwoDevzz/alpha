import { useMutation, UseMutationOptions } from 'react-query';

import { APIError } from '@config/api';

import services from '@services';
import { UpdatePasswordRequest } from '@services/me/types';

const useUpdatePassword = (
  config?: UseMutationOptions<
    UpdatePasswordRequest,
    APIError,
    UpdatePasswordRequest
  >,
) => {
  return useMutation('me/password', services.me.updatePassword, config);
};

export default useUpdatePassword;
