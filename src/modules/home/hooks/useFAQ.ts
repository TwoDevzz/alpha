import { useQuery } from 'react-query';

import { APIError } from '@config/api';

import FAQ from '@models/FAQ';

import services from '@services';

const useFAQ = () => {
  return useQuery<FAQ[], APIError, FAQ[]>('faqs', () => services.faq.getFAQs(), {
    retry: false,
  });
};

export default useFAQ;
