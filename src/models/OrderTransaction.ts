interface OrderTransaction {
  id: string;
  status: string;
  order_id: string;
  gateway: string;
  gateway_order_code: string;
  operation_type: string;
  currency: string;
  total: number;
  card_id: string;
  bankslip_barcode?: string;
  bankslip_url?: string;
  installments: number;
  created_at: string;
  updated_at: string;
}

export default OrderTransaction;
