import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import SignIn from '@user/pages/sign-in';

function Page() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <SignIn />;
}

export default Page;
