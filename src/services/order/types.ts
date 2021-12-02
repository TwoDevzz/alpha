import { IconNames } from '@components/Icon';

import Product from '@models/Product';

import { CardBody } from '@services/card/types';

export interface GetCartTotalPayload {
  products: {
    id: string;
  }[];
  coupons: string[];
}

export interface GetCartTotalProduct {
  id: string;
  max_installments: number;
  title: string;
  cart_icon: IconNames | null;
  cart_icon_bg_color: string | null;
  previous_price: number;
  current_price_one_installment: number;
  current_price_any_installment: number;
  free_trial: number;
  coupon: string | null;
}

interface GetCartTotalCoupon {
  id: string;
  code: string;
  value: number;
  value_one_installment: number;
  discount_one_installment: number;
  discount_any_installment: number;
  product: Product;
}

interface GetCartTotalProductIgnore {
  product: Product;
  reason: string;
}

export interface GetCartTotalResponse {
  products: GetCartTotalProduct[];
  products_ignore: GetCartTotalProductIgnore[];
  coupons: GetCartTotalCoupon[];
  upgrade: {
    subscription: {
      start_date: string;
      end_date: string;
      total: number;
      product: {
        title: string;
      };
    };
    total_days: number;
    daily_price: number;
    usage_days: number;
    usage_price: number;
    usage_percent: number;
    balance: number;
  } | null;
  subtotal: {
    amount: number;
  };
  total: {
    amount_one_installment: number;
    amount_any_installment: number;
  };
  discount: {
    amount_one_installment: number;
    amount_any_installment: number;
  };
  max_installments: number;
}

export interface ValidateCouponResponse {
  code: string;
  value: number;
  value_one_installment: number;
  product_id: string;
}

export interface ProductItem {
  id: string;
}

export type Coupon = string;

export interface CheckoutPayload {
  card_id?: string;
  card?: CardBody;
  installments?: number;
  products: ProductItem[];
  coupons: Coupon[];
}
