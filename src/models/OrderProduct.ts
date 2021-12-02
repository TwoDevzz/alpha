import Product from './Product';

interface OrderProduct {
  id: string;
  status: string;
  order_id: string;
  product_id: string;
  subtotal: number;
  total: number;
  installments: number;
  max_installments: number;
  coupon_id?: string | null;
  coupon_value_any_installment?: number | null;
  coupon_value_one_installment?: number | null;
  start_date: string;
  end_date: string;
  should_renew: boolean;
  created_at: string;
  updated_at: string;
  product: Product;
}

export interface MyProductsRequest {
  products: OrderProduct[];
}

export default OrderProduct;
