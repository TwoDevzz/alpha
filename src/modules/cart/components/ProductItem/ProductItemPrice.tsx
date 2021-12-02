import Typography from '@components/Typography';

import colors from '@themes/colors';

import { formatPrice } from '@utils/currency';

const ProductItemPrice = ({
  price,
  previousPrice,
  showAddSignal,
}: {
  showAddSignal?: boolean;
  price: number;
  previousPrice?: number;
}) => {
  return (
    <Typography color="neutral.700" fontSize={14}>
      {previousPrice && previousPrice !== price && (
        <>
          <span
            style={{
              textDecoration: 'line-through',
            }}
          >
            {formatPrice(previousPrice)}
          </span>
          <span> - </span>
        </>
      )}
      <b
        style={{
          color: colors.brand.default,
        }}
      >
        {showAddSignal ? '+ ' : ''}
        {formatPrice(price)}
      </b>
    </Typography>
  );
};

export default ProductItemPrice;
