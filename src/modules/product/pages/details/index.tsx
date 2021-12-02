import Head from 'next/head';
import { useRouter } from 'next/router';

import Box from '@components/Box';

import { Course, Plan, ProductType } from '@models/Product';

import useProduct from '@product/hooks/useProduct';
import CourseDetails from '@product/pages/details/CourseDetails';
import CourseHeader from '@product/pages/details/CourseHeader';
import PlanDetails from '@product/pages/details/PlanDetails';
import PlanHeader from '@product/pages/details/PlanHeader';

export default function Details() {
  const { query } = useRouter();

  const { data } = useProduct(String(query.slug));

  if (!data) {
    return null;
  }

  // Course
  if (data?.type === ProductType.Course) {
    return (
      <Box>
        <Head>
          <title>{data.title}</title>
        </Head>
        <CourseHeader course={data as Course} />
        <CourseDetails course={data as Course} />
      </Box>
    );
  }

  // Plan
  return (
    <Box>
      <Head>
        <title>{data.title}</title>
      </Head>
      <PlanHeader plan={data as Plan} />
      <PlanDetails plan={data as Plan} />
    </Box>
  );
}
