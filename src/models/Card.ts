export enum BrandEnum {
  Visa = 'Visa',
  Master = 'Master',
  Amex = 'Amex',
  Elo = 'Elo',
  JCB = 'JCB',
  Diners = 'Diners',
  Discover = 'Discover',
  Hipercard = 'Hipercard',
}

interface Card {
  id: string;
  name: string;
  brand: BrandEnum;
  number: string;
  expiration_month: number;
  expiration_year: number;
  security_code: string;
  first_numbers: string;
}

export default Card;
