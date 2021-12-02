import api from '@config/api';

import Lead from '@models/Lead';

import { CreateLeadRequest } from './types';

const createLead = async (payload: CreateLeadRequest) => {
  const { data } = await api.post<Lead>('/leads', payload);
  return data;
};

export default { createLead };
