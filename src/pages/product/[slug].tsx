import { GetStaticPaths, GetStaticProps } from 'next';
import { useEffect } from 'react';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { useLayout } from '@stores/useLayout';

import ProductDetailsPage from '@product/pages/details';

import services from '@services';

export default function ProductPage() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('secondary');
  }, []);

  return <ProductDetailsPage />;
}

export const getStaticProps: GetStaticProps = async context => {
  const queryClient = new QueryClient();

  if (context.params) {
    const slug = context.params.slug;
    await queryClient.prefetchQuery(['fetchProduct', String(slug)], () =>
      services.product.getByIdOrSlug(String(slug)),
    );
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await services.product.find();

  const paths = products.map(product => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: 'blocking' };
};
