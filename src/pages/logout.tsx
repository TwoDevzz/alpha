import { useEffect } from 'react';

import { removeToken } from '@config/auth';

function Logout() {
  useEffect(() => {
    removeToken();
    window.location.href = '/';
  }, []);

  return null;
}

export default Logout;
