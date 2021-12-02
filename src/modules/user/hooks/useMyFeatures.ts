import { useQuery } from 'react-query';

import { Features } from '@models/UserFeatures';

import services from '@services';

const useMyFeatures = () => {
  const {
    data: features,
    isLoading,
    error,
  } = useQuery('me/features', services.me.retrieveFeatures);

  const hasFeature = (feature: Features) => {
    return !!features?.find(value => value.feature === feature);
  };

  return {
    features,
    isLoading,
    error,
    hasFeature,
  };
};

export default useMyFeatures;
