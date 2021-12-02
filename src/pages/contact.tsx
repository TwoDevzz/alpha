import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import Contact from '@contact/pages/form';

function Page() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <Contact />;
}

export default Page;
