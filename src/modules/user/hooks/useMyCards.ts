import { useQuery, UseQueryOptions } from 'react-query';

import { APIError } from '@config/api';

import Card from '@models/Card';

import services from '@services';

const useMyCards = (config?: UseQueryOptions<unknown, APIError, Card[]>) => {
  const { data, isLoading, error, refetch } = useQuery(
    'me/cards',
    services.me.retriveCards,
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

export default useMyCards;
