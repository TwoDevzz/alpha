import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import CheckoutPage from '@checkout/pages';

function Checkout() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <CheckoutPage />;
}

export default Checkout;
