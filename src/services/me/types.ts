export interface GetMyProfileResponse {
  id: string;
  full_name: string;
  cpf: string;
  email: string;
  birth_date: string;
  cellphone: string;
  cep: string;
  street: string;
  house_number: string;
  appartament_number?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface UpdateMyProfileRequest {
  full_name: string;
  cpf: string;
  email: string;
  birth_date: string;
  cellphone: string;
  cep: string;
  street: string;
  house_number: string;
  appartament_number?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface UpdatePasswordRequest {
  password: string;
  old_password: string;
}
