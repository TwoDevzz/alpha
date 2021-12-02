import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import SignUp from '@user/pages/sign-up';

function Page() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <SignUp />;
}

export default Page;
