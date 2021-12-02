import { GetMyProfileResponse } from '@services/me/types';

export const maskBirthDate = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(-\d{4})\d+?$/, '$1')
    .substr(0, 10);
};

export const maskCellphone = (value: string) => {
  if (value.length >= 11) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{0})(\d)/, '$1($2')
      .replace(/(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
      .substr(0, 15);
  } else {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{0})(\d)/, '$1($2')
      .replace(/(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
      .substr(0, 15);
  }
};

export const maskCpf = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
    .substr(0, 14);
};

export const maskCep = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1')
    .substr(0, 10);
};

export const maskCardNumber = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
    .substr(0, 19);
};

export const maskProfile = (data?: GetMyProfileResponse) => {
  return {
    full_name: data?.full_name,
    email: data?.email,
    birth_date: data?.birth_date,
    cellphone: data && maskCellphone(data.cellphone),
    cpf: data && maskCpf(data.cpf),
    cep: data && maskCep(data.cep),
    street: data?.street,
    house_number: data?.house_number,
    appartament_number: data?.appartament_number,
    neighborhood: data?.neighborhood,
    city: data?.city,
    state: data?.state,
  };
};

export const unmask = (value: string) => {
  return value.replace(/\D/g, '');
};

export const adaptBirthDate = (value: string) => {
  const date = value.split('/');
  return `${date[1]}/${date[0]}/${date[2]}`;
};
