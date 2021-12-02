import Loader from '@components/Loader';
import Typography from '@components/Typography';

import CardItem from '@checkout/components/CardList/item';

import useMyCards from '@user/hooks/useMyCards';
import Box from '@components/Box';

export default function CardList() {
  const { data: cards, isLoading } = useMyCards();
  const hasCards = cards && cards.length > 0;
  const showCards = cards && !isLoading;

  if (!hasCards) {
    return null;
  }

  return (
    <Box marginTop={{ default: 5, lg: 8 }}>
      <Box marginBottom={5}>
        <Typography variant="medium2">
          Selecione um dos cartões cadastrados
        </Typography>
      </Box>
      {isLoading && <Loader />}
      {showCards && cards?.map(card => <CardItem key={card.id} card={card} />)}
    </Box>
  );
}
