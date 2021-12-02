import styled from 'styled-components';

import Box from '@components/Box';
import CardBrand, { SvgNames } from '@components/CardBrand';
import Checkbox from '@components/Checkbox';
import Typography from '@components/Typography';

import { useCard } from '@stores/cards/useCard';

import Card, { BrandEnum } from '@models/Card';

import colors from '@themes/colors';

export interface Props {
  card: Card;
}

const mapBrandIcon: { [key in BrandEnum]: SvgNames } = {
  [BrandEnum.Amex]: 'Amex',
  [BrandEnum.Elo]: 'Elo',
  [BrandEnum.Diners]: 'Diners',
  [BrandEnum.Discover]: 'Discover',
  [BrandEnum.Hipercard]: 'Hipercard',
  [BrandEnum.JCB]: 'JCB',
  [BrandEnum.Master]: 'Mastercard',
  [BrandEnum.Visa]: 'Visa',
};

const mapBrandColor: { [key in BrandEnum]: string } = {
  [BrandEnum.Amex]: 'neutral.50',
  [BrandEnum.Elo]: 'neutral.900',
  [BrandEnum.Diners]: 'neutral.50',
  [BrandEnum.Discover]: 'neutral.50',
  [BrandEnum.Hipercard]: 'neutral.50',
  [BrandEnum.JCB]: 'neutral.50',
  [BrandEnum.Master]: 'neutral.900',
  [BrandEnum.Visa]: 'neutral.50',
};

const CardItemContainer = styled(Box)`
  border-radius: ${({ theme }) => theme.radii[2]}px;
  border: 2px solid;
  border-color: ${colors.brand[50]};
`;

export default function CardItem({ card }: Props) {
  const { brand, first_numbers } = card;

  const brandIconName = mapBrandIcon[brand];

  const selectedCard = useCard(state => state.card);
  const setCard = useCard(state => state.setCard);

  const isSelectedCard = selectedCard?.id === card.id;

  const selectCard = () => {
    setCard(isSelectedCard ? null : card);
  };

  return (
    <CardItemContainer
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={5}
      marginBottom={4}
    >
      {brandIconName && (
        <Box
          borderRadius="50%"
          width={40}
          height={40}
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight={5}
          backgroundColor={mapBrandColor[brand]}
        >
          <CardBrand width={25} height={25} name={brandIconName} />
        </Box>
      )}
      <Box flex={1}>
        <Typography fontSize={16}>{brand}</Typography>
        <Typography fontSize="xs" color="neutral.700">
          {first_numbers}
        </Typography>
      </Box>
      <Box>
        <Checkbox label="" checked={isSelectedCard} onClick={selectCard} />
      </Box>
    </CardItemContainer>
  );
}
