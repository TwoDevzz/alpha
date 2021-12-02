import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import Chip from '@components/Chip';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { useCart } from '@stores/cart/useCart';

import Product, { ProductType } from '@models/Product';

import ProductItemPrice from './ProductItemPrice';

interface ProductItemProps {
  product: Product;
  freeTrial?: number;
  price: number;
  previousPrice?: number;
  coupon?: string | null;
  showAddSignal?: boolean;
}

const ProductItem = ({
  product,
  freeTrial,
  price,
  previousPrice,
  showAddSignal,
  coupon,
}: ProductItemProps) => {
  const { add, remove, cart } = useCart();
  const { id, cart_icon_bg_color, cart_icon, title, type, features } = product;
  const isOnCart = !!cart.products.find(p => p.id === id);

  const hasProductsPlanFeatures =
    type === ProductType.Plan && features?.products?.length;

  return (
    <Box
      borderRadius={2}
      padding={5}
      border="2px solid"
      borderColor="brand.50"
      marginBottom={4}
    >
      <Box
        maxWidth={'100%'}
        minWidth={{
          default: 'auto',
          lg: 350,
        }}
        display="flex"
        alignItems="center"
      >
        <Box
          minWidth={32}
          minHeight={32}
          borderRadius={5}
          backgroundColor={cart_icon_bg_color ?? 'brand.orange'}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight={5}
        >
          <Icon size="m" name={cart_icon ?? 'Cart'} fill="neutral.white" />
        </Box>
        <Box maxWidth={300} paddingRight={6} flex={1}>
          <Box marginBottom={2}>
            <Typography color="neutral.700" fontSize={16}>
              {title}
            </Typography>
          </Box>
          {freeTrial && (
            <Box marginBottom={3}>
              <Typography color="neutral.300" fontSize={14}>
                <b>100% de reembolso</b> em até 7 dias
              </Typography>
            </Box>
          )}
          {coupon && (
            <Box marginBottom={2}>
              <Chip
                variant={'red'}
                style={{
                  fontSize: 14,
                }}
              >
                Cupom <b>{coupon}</b> aplicado
              </Chip>
            </Box>
          )}
          <ProductItemPrice
            showAddSignal={showAddSignal}
            price={price}
            previousPrice={previousPrice}
          />
          {hasProductsPlanFeatures && (
            <Box maxWidth={250} marginTop={5}>
              <Typography fontSize={16}>{features.products?.join(', ')}</Typography>
            </Box>
          )}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginRight={2}
        >
          <Checkbox
            label=""
            checked={isOnCart}
            onChange={() => {
              if (isOnCart) {
                remove(id);
              } else {
                add(product);
              }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductItem;
