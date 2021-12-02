import api from '@config/api';

import Newsletter from '@models/Newsletter';

import { CreateNewsletterRequest } from './types';

const createNewsletter = async (payload: CreateNewsletterRequest) => {
  const { data } = await api.post<Newsletter>('/newsletters', payload);
  return data;
};

export default { createNewsletter };
