import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Typography from '@components/Typography';

import { useOrder } from '@hooks/useOrder';

import colors from '@themes/colors';

import { formatPrice } from '@utils/currency';

const Thanks = () => {
  const route = useRouter();
  const { data } = useOrder(route.query.id as string);
  const order = data?.order;
  const products = data?.order.products || [];

  const router = useRouter();
  const isBankSlip = router.query.type === 'bank-slip';

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      height="100%"
      width="100%"
      paddingY={30}
      minHeight={`calc(100vh - 120px)`}
    >
      <Box
        flex={1}
        width="100%"
        display="flex"
        flexDirection="column"
        height="100%"
        paddingTop={40}
      >
        <Box marginX="auto" maxWidth={570} justifyContent="center">
          <Typography textAlign="center" variant="h2">
            Obrigado <br /> pela sua compra!
          </Typography>
          <Box marginTop={8} marginBottom={8}>
            <Typography
              textAlign="center"
              variant="regular3"
              color={colors.neutral[500]}
            >
              {isBankSlip ? (
                <b>
                  Seu boleto será enviado no seu email em até 1 hora, verifique sua
                  a caixa de entrada e spam.
                </b>
              ) : (
                'Seu pagamento foi aprovado.'
              )}
            </Typography>
          </Box>
          <Typography
            textAlign="center"
            variant="regular2"
            color={colors.neutral[900]}
          >
            {isBankSlip
              ? [
                  `Pague seu boleto agora e desfrute dos benefícios de ser membro da comunidade que foi feita para você`,
                  `que busca a mais completa plataforma de informações e quer ter contato direto com gestores`,
                  `que administram milhões. Muito obrigado!`,
                ].join('\n')
              : [
                  `Agora é só desfrutar dos benefícios de ser membro da comunidade que foi feita para você`,
                  `que busca a mais completa plataforma de informações e quer ter contato direto com gestores`,
                  `que administram milhões. Muito obrigado!`,
                ].join('\n')}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            marginTop={30}
            paddingX={{
              default: 6,
              lg: 0,
            }}
          >
            <Box marginTop={6} marginBottom={4}>
              <Typography variant="regular3">
                <b>Resumo do pedido</b>
              </Typography>
            </Box>
            <Box width={'100%'} justifyContent="center">
              {products.map(orderProduct => (
                <Fragment key={orderProduct.id}>
                  <Box display="flex" justifyContent="space-between">
                    <Box marginBottom={3} marginTop={3}>
                      <Typography
                        variant="regular2"
                        id={`order-item-title-${orderProduct.id}`}
                      >
                        {orderProduct.product.title}
                      </Typography>
                    </Box>
                    <Box marginBottom={3} marginTop={3} minWidth={100}>
                      <Typography
                        variant="regular2"
                        textAlign="end"
                        id={`order-item-price-${orderProduct.id}`}
                      >
                        {formatPrice(orderProduct.total)}
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                </Fragment>
              ))}
              {order && (
                <Box display="flex" justifyContent="space-between">
                  <Box marginBottom={3} marginTop={3}>
                    <Typography variant="regular2">
                      <b>Total:</b>
                    </Typography>
                  </Box>
                  <Box marginBottom={3} marginTop={3}>
                    <Typography
                      variant="regular2"
                      textAlign="end"
                      id="order-total"
                      data-price={order.transactions[0].total / 100}
                    >
                      <b>{formatPrice(order.transactions[0].total)}</b>
                    </Typography>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          marginX="auto"
          maxWidth={570}
          marginTop={10}
          paddingBottom={30}
        >
          {!isBankSlip && (
            <Box display="flex" margin={3} justifyContent="center">
              <Button href="/user">VER MEUS PRODUTOS</Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Thanks;
