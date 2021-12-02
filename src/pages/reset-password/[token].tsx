import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import ResetPasswordPage from '@password/pages/reset';

function ForgotPassword() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <ResetPasswordPage />;
}

export default ForgotPassword;
