import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import CartPage from '@cart/pages/cart';

function Cart() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <CartPage />;
}

export default Cart;
