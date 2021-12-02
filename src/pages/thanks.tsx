import Thanks from 'modules/thanks/pages';
import { GetServerSideProps, NextPageContext } from 'next';
import Head from 'next/head';
import { QueryClient } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { TOKEN_KEY } from '@config/auth';

import services from '@services';

function Page() {
  return <Thanks />;
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  const token = req.cookies[TOKEN_KEY];
  const { id } = query;

  if (!token || !id) {
    return {
      redirect: {
        destination: `/sign-in`,
        permanent: false,
      },
    };
  }

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([`order/id`, String(id)], () =>
    services.order.retrieveWithToken(id as string, token),
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Page;
