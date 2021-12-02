import Image from 'next/image';

import Box from '@components/Box';
import Button from '@components/Button';
import Grid from '@components/Grid';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import Channel from '@home/components/Channel';
import Testimonial from '@home/components/Testimonial';

export default function Lighter() {
  return (
    <Box
      id="lighter"
      backgroundColor="neutral.900"
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      minHeight="100%"
      paddingX={DEFAULT_PADDING_X}
    >
      <Box
        width="100%"
        marginY={{ default: 56, lg: 112 }}
        maxWidth={1170}
        marginX="auto"
      >
        <Box
          width="100%"
          marginTop={{ default: 56, lg: 112 }}
          display="flex"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
          justifyContent={{ default: 'center', lg: 'initial' }}
        >
          <Box
            flex={{ default: '100%', lg: 'initial' }}
            maxWidth={570}
            marginRight={{ default: 0, lg: 130 }}
            marginBottom={{ default: 9, lg: 'initial' }}
          >
            <Image src="/imgs/lighter-graphic.png" width={570} height={517} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            flex={{ default: '100%', lg: 'initial' }}
            maxWidth={{ default: '100%', lg: 470 }}
          >
            <Box>
              <Box
                display="flex"
                alignItems="center"
                marginBottom={{ default: 7, lg: 6 }}
              >
                <Box
                  minWidth={24}
                  minHeight={24}
                  padding={4}
                  marginRight={6}
                  borderRadius="50%"
                  backgroundColor="brand.blue"
                  display="flex"
                >
                  <Icon size="m" name="OfflineBolt" fill="neutral.white" />
                </Box>
                <Typography variant="h3" color="neutral.white">
                  Lighter
                </Typography>
              </Box>
              <Box marginBottom={{ default: 7, lg: 5 }}>
                <Typography
                  fontSize={{
                    default: 's',
                    sm: '18',
                  }}
                  color="neutral.300"
                >
                  O Lighter traz em tempo real os principais fatos e notícias que influenciam o ambiente do Mercado Financeiro.
                </Typography>
              </Box>
              <Box marginBottom={{ default: 7, lg: 5 }}>
                <Typography
                  fontSize={{
                    default: 's',
                    sm: '18',
                  }}
                  color="neutral.300"
                >
                  Ativo 24 horas ao dia, é o algoritmo de notícias mais inteligente do mercado.
                </Typography>
              </Box>
              <Box>
                <Typography
                  fontSize={{
                    default: 's',
                    sm: '18',
                  }}
                  color="neutral.300"
                >
                  No Lighter nosso algoritmo classifica as noticias por cores para
                  facilitar sua interpretação e leitura.
                </Typography>
              </Box>
            </Box>

            <Box marginTop={{ default: 7, lg: 6 }}>
              <Testimonial
                phrase="Acabei de ver a notícia no Lighter, entrei comprado e fiz 300 ponts no índice!"
                colors={{
                  border: 'brand.blue',
                  name: 'neutral.white',
                  profession: 'neutral.400',
                }}
                src="/imgs/testimonials/testimonial-1.png"
                name="Matheus Rocha"
              />
            </Box>
          </Box>
        </Box>
        <Box width="100%" marginTop={{ default: 72, lg: 112 }}>
          <Box marginBottom={8}>
            <Typography fontSize={24} color="neutral.white" fontWeight="bold">
              O que representa cada cor de tag
            </Typography>
          </Box>
          <Box width="100%" overflow="hidden">
            <Grid spacing={8} container>
              <Grid md={4} sm={6} xs={12}>
                <Channel
                  icon={<Icon size="m" name="Bookmark" fill="brand.blue" />}
                  title="Tag Azul"
                  description="São as notícias do dia-a-dia e servem para o investidor ficar informado e por dentro de tudo que se passa no Brasil."
                />
              </Grid>
              <Grid md={4} sm={6} xs={12}>
                <Channel
                  icon={<Icon size="m" name="Bookmark" fill="brand.yellow" />}
                  title="Tag Amarela"
                  description="São notícias do dia-a-dia, informações e indicadores que acontecem no mundo todo e são fornecidas pelas agências internacionais."
                />
              </Grid>
              <Grid md={4} sm={6} xs={12}>
                <Channel
                  icon={<Icon size="m" name="Bookmark" fill="brand.red" />}
                  title="Tag Vermelha"
                  description="São notícias que movem o mercado, furos de reportagem, dados econômicos e indicadores. Estas informações têm a capacidade de dar a direção ou mudar o rumo dos acontecimentos, fique ligado!"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box width="100%" marginTop={{ default: 8, lg: 104 }}>
          <Box display="flex" justifyContent="center" marginTop={9}>
            <Button
              variant="secondary"
              size="large"
              href={process.env.NEXT_PUBLIC_PRODUCT_DEFAULT}
            >
              FAÇA SUA INSCRIÇÃO AGORA
            </Button>
          </Box>
          <Box marginTop={5}>
            <Typography
              color="neutral.300"
              textAlign="center"
              fontSize="xs"
              lineHeight="s"
              fontWeight="regular"
            >
              <b>100% de reembolso</b> em até 7 dias
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
