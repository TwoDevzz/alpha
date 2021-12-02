import React from 'react';

import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Button from '@components/Button';
import Chip from '@components/Chip';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import ProgressBar from '@components/ProgressBar';
import Typography from '@components/Typography';

import useEarlyAdopter from '@home/hooks/useEarlyAdopter';

import { formatPrice } from '@utils/currency';

const EarlyAdopter = () => {
  const { data, isLoading } = useEarlyAdopter();

  if (isLoading || !data) return null;

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      minHeight="100%"
      alignItems="center"
      backgroundColor="brand.default"
      paddingX={5}
      paddingY={{ default: 56, lg: 120 }}
    >
      <Box maxWidth={771}>
        <Typography
          variant="h2"
          textAlign="center"
          color="neutral.white"
          fontWeight="bold"
        >
          Faça sua inscrição e tenha acesso a muito mais por muito menos.
        </Typography>
      </Box>
      <Box display="flex" flexDirection={{ default: 'column', lg: 'row' }}>
        <Box
          backgroundColor="neutral.white"
          borderRadius={3}
          marginTop={{ default: 56, lg: 112 }}
          width={{ default: '100%', lg: 470 }}
        >
          <Box paddingTop={6} paddingX={6} paddingBottom={7} padding={{ lg: 9 }}>
            <Box display="flex" marginBottom={6}>
              <Chip>
                <Typography color="neutral.900" fontSize={12}>
                  Oferta especial
                </Typography>
              </Chip>
            </Box>
            <Typography variant="h3" color="neutral.900">
              {data.title}
            </Typography>
            <Box marginTop={5}>
              <Typography color="neutral.700" fontSize="s">
                Tenha {Math.floor(data.duration / 30)}{' '}
                {Math.floor(data.duration / 30) > 1 ? 'meses' : 'mês'} de acesso a
                todos os produtos abaixo. Uma oportunidade por{' '}
                <b>tempo limitado. </b>
                Seja um dos primeiros a fazer parte.
              </Typography>
            </Box>
            <Box marginTop={7}>
              <Box display="flex" marginBottom={3}>
                <Box flex="1">
                  <Typography color="neutral.900" fontSize={12} fontWeight="500">
                    Vagas disponíveis
                  </Typography>
                </Box>
                <Typography color="neutral.900" fontSize={12} fontWeight="500">
                  98% / 100%
                </Typography>
              </Box>
              <ProgressBar value={98} />
            </Box>
            <Box marginTop={7}>
              <Typography color="neutral.900" fontWeight="bold" fontSize="xs">
                Acesso a todos os nossos produtos:
              </Typography>
              <Box marginTop={6}>
                <Box display="flex" alignItems="center">
                  <Box
                    minWidth={32}
                    minHeight={32}
                    borderRadius={5}
                    backgroundColor="brand.orange"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginRight={4}
                  >
                    <Icon size="m" name="People" fill="neutral.white" />
                  </Box>
                  <Typography color="neutral.700" fontSize="s">
                    Alpha Community
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginTop={5}>
                  <Box
                    minWidth={32}
                    minHeight={32}
                    borderRadius={5}
                    backgroundColor="brand.red"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginRight={4}
                  >
                    <Icon size="m" name="Live" fill="neutral.white" />
                  </Box>
                  <Typography color="neutral.700" fontSize="s">
                    Sala ao vivo
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginTop={5}>
                  <Box
                    minWidth={32}
                    minHeight={32}
                    borderRadius={5}
                    backgroundColor="brand.blue"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginRight={4}
                  >
                    <Icon size="m" name="OfflineBolt" fill="neutral.white" />
                  </Box>
                  <Typography color="neutral.700" fontSize="s">
                    Lighter
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginTop={5}>
                  <Box
                    minWidth={32}
                    minHeight={32}
                    borderRadius={5}
                    backgroundColor="other.green"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginRight={4}
                  >
                    <Icon size="m" name="Gauge" fill="neutral.white" />
                  </Box>
                  <Typography color="neutral.700" fontSize="s">
                    Alpha Strategy
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginTop={5}>
                  <Box
                    minWidth={32}
                    minHeight={32}
                    borderRadius={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    marginRight={4}
                    background="conic-gradient(from 180deg at 50% 50%, #FF8A00 0deg, #4942FF 291.65deg, #26ADD8 360deg)"
                  >
                    <Icon size="m" name="Mic" fill="neutral.white" />
                  </Box>
                  <Typography color="neutral.700" fontSize="s">
                    AlphaCast
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Divider />
          </Box>
          <Box paddingX={6} paddingTop={7} paddingBottom={6} padding={{ lg: 9 }}>
            <Box display="flex" alignItems="baseline">
              <Box marginRight={2}>
                <Typography fontSize="xs" color="neutral.700">
                  R$
                </Typography>
              </Box>
              <Typography
                fontFamily="headline"
                fontSize="xl"
                color="neutral.900"
                fontWeight="bold"
              >
                {formatPrice(data.price / (data.max_installments ?? 1)).replace(
                  'R$',
                  '',
                )}
              </Typography>
              <Box marginLeft={2}>
                <Typography fontSize="xs" color="neutral.700">
                  / mês
                </Typography>
              </Box>
            </Box>
            <Box marginTop={3}>
              <Typography fontSize="xs" color="neutral.700">
                Desconto de <b>R$1.440,00</b>
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" marginTop={6}>
              <Button
                variant="positive"
                size="large"
                href={process.env.NEXT_PUBLIC_PRODUCT_DEFAULT}
                width="100%"
              >
                FAÇA SUA INSCRIÇÃO AGORA
              </Button>
            </Box>
            <Box
              marginTop={6}
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minWidth={16}
                minHeight={16}
                backgroundColor="other.yellow"
                borderRadius={5}
              >
                <Icon size="m" name="Clock" fill="brand.orange" />
              </Box>
              <Box marginLeft={3}>
                <Typography fontWeight="bold" fontSize="12px" color="brand.orange">
                  Oferta por tempo limitado
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          backgroundColor="other.gray"
          borderRadius={3}
          padding={{ default: 6, lg: 64 }}
          marginTop={{ default: 5, lg: 144 }}
          borderTopLeftRadius={{ lg: 0 }}
          borderBottomLeftRadius={{ lg: 0 }}
          maxWidth={{ default: '100%', lg: 500 }}
          maxHeight={580}
        >
          <Box>
            <Typography
              color="neutral.500"
              fontSize={{ default: 'xs', lg: 'm' }}
              fontStyle="italic"
            >
              “Operação cirúrgica by Alpha Trading... Meta batida! 460 pontos...”
            </Typography>
            <Box marginTop={5} display="flex" alignItems="center">
              {/* <Avatar variant="small" src="/imgs/testimonials/testimonial-1.png" /> */}
              <Box marginLeft={5}>
                <Box marginBottom={2}>
                  <Typography
                    color="netraul.500"
                    fontWeight="bold"
                    fontSize="xs"
                    lineHeight="xxl"
                  >
                    Bruno Miranda
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box marginTop={{ default: 8, lg: 64 }}>
            <Typography
              color="neutral.500"
              fontSize={{ default: 'xs', lg: 'm' }}
              fontStyle="italic"
            >
              “Entrei PETR4 e já estou com 5% de lucro!”
            </Typography>
            <Box marginTop={5} display="flex" alignItems="center">
              {/* <Avatar variant="small" src="/imgs/testimonials/testimonial-1.png" /> */}
              <Box marginLeft={5}>
                <Box marginBottom={2}>
                  <Typography
                    color="netraul.500"
                    fontWeight="bold"
                    fontSize="xs"
                    lineHeight="xxl"
                  >
                    Gabriel Winter
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default EarlyAdopter;
