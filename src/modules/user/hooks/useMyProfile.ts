import { useQuery, UseQueryOptions } from 'react-query';

import { APIError } from '@config/api';

import User from '@models/User';

import services from '@services';

const useMyProfile = (config?: UseQueryOptions<unknown, APIError, User>) => {
  const { data, isLoading, error, refetch } = useQuery(
    'myProfile',
    services.me.getMyProfile,
    {
      retry: false,
      ...config,
    },
  );

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useMyProfile;
