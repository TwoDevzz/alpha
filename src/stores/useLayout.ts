import create from 'zustand';

import { Variants as HeaderVariants } from '@layouts/Default/components/Header';

type State = {
  layoutVariant: keyof HeaderVariants;
  setLayoutVariant: (variant: keyof HeaderVariants) => void;
};

export const useLayout = create<State>(set => {
  const setLayoutVariant = (variant: keyof HeaderVariants) =>
    set(() => ({ layoutVariant: variant }));

  return {
    layoutVariant: 'primary',
    setLayoutVariant,
  };
});
