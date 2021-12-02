import Alert from '@material-ui/lab/Alert';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

import { getErrorMessage } from '@config/api';
import { getToken, isAuthenticated } from '@config/auth';

import { useCart } from '@stores/cart/useCart';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import CartProductList from '@cart/components/CartProductList';
import CartSummary from '@cart/components/CartSummary';
import useCartTotal from '@cart/hooks/useCartTotal';

import services from '@services';

export default function Cart() {
  const router = useRouter();
  const { p } = router.query;
  const add = useCart(state => state.add);
  const clean = useCart(state => state.clean);
  const cart = useCart(state => state.cart);
  const removeMany = useCart(state => state.removeMany);
  const token = getToken();
  const [errors, setErrors] = useState<string[]>([]);

  const { data, refetch, error, isLoading } = useCartTotal(cart);

  useEffect(() => {
    if (cart.products.length > 0) {
      refetch();
    }
  }, [cart.products, cart.coupons]);

  useEffect(() => {
    if (data?.products_ignore?.length) {
      const productIds = data.products_ignore.map(productsIgnore => {
        setErrors([...errors, productsIgnore.reason]);
        return productsIgnore.product.id;
      });
      removeMany(productIds);
    }
  }, [data]);

  useEffect(() => {
    const addProduct = async (id: string) => {
      const product = await services.product.getByIdOrSlug(id);
      add(product);
    };

    if (p) {
      clean();
      if (Array.isArray(p)) {
        for (const productId of p) {
          addProduct(productId);
        }
      } else if (p) {
        addProduct(p);
      }

      router.replace('/cart');
    }
  }, [p]);

  return (
    <Box
      paddingX={DEFAULT_PADDING_X}
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100%"
      paddingY={30}
    >
      <Head>
        <title>Carrinho</title>
      </Head>

      <Box minHeight={700}>
        <Box marginBottom={10}>
          <Typography variant="h2">Carrinho de compras</Typography>
          {error && (
            <Box marginTop={5}>
              <Alert severity="error">{getErrorMessage(error.response)}</Alert>
            </Box>
          )}
          {errors && (
            <Box marginTop={5}>
              {errors.map(error => (
                <Alert severity="error">{error}</Alert>
              ))}
            </Box>
          )}
        </Box>
        <Box marginBottom={6}>
          <Typography variant="medium2">Produtos selecionados</Typography>
        </Box>
        <Box display="flex" flexDirection={{ default: 'column', lg: 'row' }}>
          <CartProductList />

          {!error && (
            <Box
              display="flex"
              flexDirection="column"
              flex={1}
              paddingLeft={{ lg: 12 }}
              marginTop={{
                default: 6,
                lg: 0,
              }}
              paddingBottom={10}
            >
              <CartSummary />
              {!token && (
                <Box marginTop={4} marginBottom={6}>
                  <Typography variant="regular2">
                    Para ver descontos exclusivos para assinantes,{' '}
                    <StyledLink
                      href={`/sign-in?redirect=${encodeURIComponent('/cart')}`}
                    >
                      faça login
                    </StyledLink>
                    .
                  </Typography>
                </Box>
              )}
              <Box
                marginTop={6}
                display="flex"
                justifyContent="flex-start"
                maxWidth={'100%'}
                width={{ default: '100%', lg: 470 }}
              >
                {!isLoading && cart.products.length > 0 && (
                  <Button
                    width={{
                      default: '100%',
                      lg: 'auto',
                    }}
                    variant={'positive'}
                    href={
                      isAuthenticated()
                        ? '/checkout'
                        : `/sign-up?redirect=${encodeURIComponent('/checkout')}`
                    }
                  >
                    FECHAR PEDIDO
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
