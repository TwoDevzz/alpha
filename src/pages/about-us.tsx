import { useEffect } from 'react';

import { useLayout } from '@stores/useLayout';

import AboutUs from '@about-us/pages/details';

function Page() {
  const setLayoutVariant = useLayout(state => state.setLayoutVariant);

  useEffect(() => {
    setLayoutVariant('primary');
  }, []);

  return <AboutUs />;
}

export default Page;
