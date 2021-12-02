import { useEffect } from 'react';

import PageWrapper from '@components/PageWrapper';
import Typography from '@components/Typography';

import { useCart } from '@stores/cart/useCart';

import useCartTotal from '@cart/hooks/useCartTotal';

import Checkout from '@checkout/components/Checkout';
import SelectedProducts from '@checkout/components/SelectedProducts';

export default function CheckoutPage() {
  const { cart } = useCart();
  const { data, refetch } = useCartTotal(cart);

  useEffect(() => {
    refetch();
  }, []);

  return !data ? null : (
    <PageWrapper>
      <div
        style={{ display: 'none' }}
        data-total={data.total.amount_any_installment / 100}
      />
      <Typography variant="h2">Pagamento</Typography>
      <SelectedProducts products={data.products} />
      <Typography variant="h4">Como você deseja pagar?</Typography>
      <Checkout cart={data} />
    </PageWrapper>
  );
}
