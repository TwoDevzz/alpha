import User from '@models/User';

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  full_name: string;
  email: string;
  birth_date: string;
  cellphone: string;
  cpf: string;
  password: string;
  cep: string;
  street: string;
  house_number: string;
  appartament_number?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface SignInResponse {
  token: string;
  user: User;
}
