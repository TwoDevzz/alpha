import create from 'zustand';

import Card from '@models/Card';

type State = {
  card: Card | null;
  setCard: (card: Card | null) => void;
};

export const useCard = create<State>(set => {
  const setCard = (card: Card | null) => set({ card });

  return {
    card: null,
    setCard,
  };
});
