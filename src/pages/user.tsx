import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import UserPage from '@user/pages/my-profile';

function User() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <UserPage />;
}

export default User;
