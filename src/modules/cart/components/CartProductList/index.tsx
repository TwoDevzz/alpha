import Box from '@components/Box';
import Typography from '@components/Typography';

import { useCart } from '@stores/cart/useCart';

import Product from '@models/Product';

import ProductItem from '@cart/components/ProductItem';
import ProductItemEmpty from '@cart/components/ProductItem/Empty';
import useCartTotal from '@cart/hooks/useCartTotal';
import useProductsUpsell from '@cart/hooks/useProductsUpsell';

import colors from '@themes/colors';

const filterProductInCart = (products: Product[]) => (product: Product) => {
  return !products.find(cartProduct => {
    return cartProduct.id === product.id;
  });
};

const CartProductList = () => {
  const { cart } = useCart();
  const { data } = useProductsUpsell(cart);
  const { data: simulateData } = useCartTotal(cart);

  const products = data?.products ?? [];

  const productsUpsell = products.filter(filterProductInCart(cart.products));

  return (
    <Box
      paddingBottom={{ lg: 40 }}
      borderRight={{ lg: `1px solid ${colors.neutral[100]}` }}
      paddingRight={{ lg: 12 }}
    >
      <Box>
        {cart.products.map(product => {
          const cartProduct = simulateData?.products.find(
            cartProductData => cartProductData.id === product.id,
          );

          return (
            <ProductItem
              key={product.id}
              product={product}
              previousPrice={product.price}
              price={cartProduct?.current_price_one_installment ?? product.price}
              coupon={cartProduct?.coupon}
              freeTrial={cartProduct?.free_trial}
            />
          );
        })}

        {cart.products.length === 0 && <ProductItemEmpty />}
      </Box>
      {productsUpsell.length ? (
        <Box marginTop={8} marginBottom={6}>
          <Box marginBottom={6}>
            <Typography variant={'regular3'}>Aproveite e leve também</Typography>
          </Box>
          <Box>
            {productsUpsell.map(product => (
              <Box key={product.id} marginBottom={4}>
                <ProductItem
                  product={product}
                  price={product.price}
                  freeTrial={7}
                  showAddSignal
                />
              </Box>
            ))}
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default CartProductList;
