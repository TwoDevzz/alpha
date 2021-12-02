import api from '@config/api';

import FAQ from '@models/FAQ';

const getFAQs = async () => {
  const { data } = await api.get<FAQ[]>('/faq');
  return data;
};

export default { getFAQs };
