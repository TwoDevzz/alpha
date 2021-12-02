import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import ForgotPasswordPage from '@password/pages/forgot';

function ForgotPassword() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <ForgotPasswordPage />;
}

export default ForgotPassword;
