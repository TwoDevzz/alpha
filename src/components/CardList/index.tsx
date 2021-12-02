import { Box } from '@material-ui/core';

import CardItem from '@components/CardList/item';
import Loader from '@components/Loader';

import useMyCards from '@user/hooks/useMyCards';

interface CardListProps {
  showRemoveCard?: boolean;
}

export default function CardList({ showRemoveCard }: CardListProps) {
  const { data: cards, isLoading } = useMyCards();
  const hasCards = cards && cards.length > 0;
  const showCards = cards && !isLoading;

  if (!hasCards) {
    return null;
  }

  return (
    <Box>
      {isLoading && <Loader />}
      {showCards &&
        cards?.map(card => (
          <CardItem showRemoveCard={showRemoveCard} key={card.id} card={card} />
        ))}
    </Box>
  );
}
