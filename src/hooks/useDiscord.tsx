import { useQuery, UseQueryOptions } from 'react-query';

import { APIError } from '@config/api';

import services from '@services';

interface DiscordLink {
  url?: string;
}

const useDiscord = (
  userId: string | null | undefined,
  config?: UseQueryOptions<unknown, APIError, DiscordLink>,
) => {
  return useQuery(
    ['coupons/validate', userId],
    () => (userId ? services.me.retrieveDiscord(userId) : undefined),
    {
      retry: false,
      ...config,
    },
  );
};

export default useDiscord;
