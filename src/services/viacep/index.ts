import axios from 'axios';

import { ViaCepResponse } from './types';

const getAddress = async (cep: string) => {
  const { data } = await axios.get<ViaCepResponse>(
    `https://viacep.com.br/ws/${cep}/json/`,
  );
  const { logradouro, bairro, localidade, uf, erro } = data;
  return {
    street: logradouro || '',
    neighborhood: bairro || '',
    city: localidade || '',
    state: uf || '',
    error: erro,
  };
};

export default { getAddress };
