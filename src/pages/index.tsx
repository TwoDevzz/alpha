import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { useLayout } from '@stores/useLayout';

import Home from '@home/pages/home';

import services from '@services';

export default function Page() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <Home />;
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  // FAQ
  await queryClient.prefetchQuery('faqs', services.faq.getFAQs);

  // Products
  await queryClient.prefetchQuery('products', services.product.find);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
