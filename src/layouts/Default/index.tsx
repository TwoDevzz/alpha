import { useEffect } from 'react';
import { useQuery } from 'react-query';

import Box from '@components/Box';

import { isAuthenticated } from '@config/auth';

import { useLayout } from '@stores/useLayout';

import Footer from '@layouts/Default/components/Footer';
import Header from '@layouts/Default/components/Header';

import services from '@services';

interface Props {
  children: React.ReactNode;
}

function Default({ children }: Props) {
  const layoutVariant = useLayout(state => state.layoutVariant);

  const { data, refetch } = useQuery('myProfile', services.me.getMyProfile, {
    enabled: false,
  });

  useEffect(() => {
    if (isAuthenticated()) {
      refetch();
    }
  }, []);

  return (
    <>
      <Header variant={layoutVariant} user={data} />

      <Box
        marginTop={{
          default: 60,
          lg: 82,
        }}
        minHeight={`100vh`}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
}

export default Default;
