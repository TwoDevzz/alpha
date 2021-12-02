import OrderProduct from './OrderProduct';
import OrderTransaction from './OrderTransaction';

export interface Order {
  id: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  products: OrderProduct[];
  transactions: OrderTransaction[];
}

export interface OrderRequest {
  order: Order;
}
