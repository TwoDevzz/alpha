interface User {
  id: string;
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
  avatar?: string;
  token?: string;
}

export default User;
