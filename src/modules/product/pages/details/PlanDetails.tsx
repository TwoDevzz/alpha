import { useRouter } from 'next/router';
import { useMemo } from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import { useDialog } from '@components/Dialog';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

import { useCart } from '@stores/cart/useCart';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import { Plan } from '@models/Product';

import AdhesionDialog from '@product/components/CourseAdhesionDialog';

import { formatPrice } from '@utils/currency';

export interface Props {
  plan: Plan;
}

export default function Details({ plan }: Props) {
  const { opened, toggleDialog } = useDialog(false);
  const router = useRouter();

  const add = useCart(state => state.add);
  const cart = useCart(state => state.cart);

  const cartProduct = useMemo(() => {
    const match = cart.products.find(product => product.id === plan.id);
    return match;
  }, [plan, cart]);

  return (
    <Box
      maxWidth={1186}
      marginX="auto"
      flexWrap={{ default: 'wrap', lg: 'nowrap' }}
      flexDirection={{ lg: 'row', default: 'column-reverse' }}
      display="flex"
    >
      <Box
        minWidth={{ lg: 518, default: '100%' }}
        borderLeft="1px solid"
        borderLeftColor="neutral.200"
      >
        <Box paddingBottom={{ lg: 13 }}>
          <Box
            minHeight={300}
            paddingTop={{ lg: 13, default: 10 }}
            marginBottom={{ lg: 5, default: 0 }}
            background="linear-gradient(180deg, #F0F0FF 0%, rgba(255, 255, 255, 0) 100%)"
          >
            <Box
              paddingX={{ default: DEFAULT_PADDING_X.default, lg: 0 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box marginBottom={7}>
                <Typography fontSize="xl" fontWeight="bold" fontFamily="headline">
                  Adquira agora
                </Typography>
              </Box>
              <Box marginBottom={5} display="flex" alignItems="center">
                <Box marginRight={4}>
                  <Typography fontSize={{ lg: 18 }}>
                    {formatPrice(plan.price)}
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize="xs">
                    em até {plan.max_installments}x no cartão
                  </Typography>
                </Box>
              </Box>
              <Box marginBottom={8} display="flex" alignItems="flex-end">
                <Box marginRight={4}>
                  <Typography fontSize={24} fontWeight="bold" color="brand.default">
                    {formatPrice(plan.price)}
                  </Typography>
                </Box>
                <Box marginBottom="5px">
                  <Typography fontSize="xs" color="brand.default">
                    à vista
                  </Typography>
                </Box>
              </Box>
              <Box width="100%" maxWidth={390} marginBottom={5}>
                <Button
                  onClick={() => {
                    add(plan);
                    router.push('/cart');
                  }}
                  width="100%"
                  disabled={!!cartProduct}
                >
                  {cartProduct ? 'Plano adicionado ao carrinho' : 'EU QUERO'}
                </Button>
              </Box>
              <Box marginBottom={13}>
                <StyledLink onClick={toggleDialog}>
                  Termos de adesão do serviço
                </StyledLink>
                <AdhesionDialog open={opened} onClose={toggleDialog} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
