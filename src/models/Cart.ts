import Product from './Product';

export interface CartProduct {
  product: Product;
  coupon: string;
  previousPrice: number;
  price: number;
  freeTrial: number;
}

export interface Cart {
  cartProducts: CartProduct[];
}
