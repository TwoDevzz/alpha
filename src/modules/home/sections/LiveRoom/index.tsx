import Image from 'next/image';

import Accordion from '@components/Accordion';
import Box from '@components/Box';
import Button from '@components/Button';
import Grid from '@components/Grid';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import Testimonial from '@home/components/Testimonial';

export default function LiveRoom() {
  return (
    <Box
      id="live"
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
            <Image src="/imgs/vasco-graphic.png" width={570} height={517} />
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
                  backgroundColor="brand.red"
                  display="flex"
                >
                  <Icon size="m" name="Live" fill="neutral.white" />
                </Box>
                <Typography variant="h3" color="neutral.white">
                  Sala ao vivo
                </Typography>
              </Box>
              <Box marginBottom={{ default: 7, lg: 9 }}>
                <Typography
                  fontSize={{
                    default: 's',
                    sm: '18',
                  }}
                  color="neutral.300"
                >
                  Sala de estudos de operações ao vivo, com alguns dos maiores
                  Traders do Mercado Brasileiro. Além dos nossos mestres Vasco
                  Mamede e Henrique Pena, diversos convidados e contribuidores estão
                  na sala todos os dias.
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
                  Assine o pacote com a Sala ao vivo e acompanhe na prática do dia a
                  dia, como operam Traders profissionais e das mesas institucionais
                  de fundos de investimentos, compartilhando suas análises,
                  cenários, e análise de risco, troca de experiências muito rica
                  durante o andamento dos pregões.
                </Typography>
              </Box>
            </Box>

            <Box marginTop={{ default: 7, lg: 6 }}>
              <Testimonial
                phrase="Peguei essa graças a Deus! Graças ao Vasco rsrs. Eu fiz 12 pontos no dólar!"
                colors={{
                  border: 'brand.red',
                  name: 'neutral.white',
                  profession: 'neutral.400',
                }}
                src="/imgs/testimonials/testimonial-1.png"
                name="Vitorio Boettcher"
              />
            </Box>
          </Box>
        </Box>
        <Box width="100%" marginTop={{ default: 72, lg: 112 }}>
          <Box marginBottom={8}>
            <Typography fontSize={24} color="neutral.white" fontWeight="bold">
              Sala focada em operações com futuros, moedas, juros e ações para
              daytrade e swing trade.
            </Typography>
          </Box>
          <Box width="100%">
            <Grid spacing={1} container>
              <Grid xs={12} lg={6}>
                <Accordion
                  title={
                    <Box
                      marginY={4}
                      marginX={3}
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <Box
                        padding={3}
                        backgroundColor="brand.red"
                        borderRadius="50%"
                        marginRight={6}
                      />
                      <Typography fontSize="s" color="neutral.300">
                        Vídeo de fechamento de mercado diário
                      </Typography>
                    </Box>
                  }
                  backgroundColor="neutral.700"
                  expanded={false}
                />
              </Grid>
              <Grid xs={12} lg={6}>
                <Accordion
                  title={
                    <Box
                      marginY={4}
                      marginX={3}
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <Box
                        padding={3}
                        backgroundColor="brand.red"
                        borderRadius="50%"
                        marginRight={6}
                      />
                      <Typography fontSize="s" color="neutral.300">
                        Canal de estudos gráficos de ativos, futuros e moedas
                      </Typography>
                    </Box>
                  }
                  backgroundColor="neutral.700"
                  expanded={false}
                />
              </Grid>
              <Grid xs={12} lg={6}>
                <Accordion
                  title={
                    <Box
                      marginY={4}
                      marginX={3}
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <Box
                        padding={3}
                        backgroundColor="brand.red"
                        borderRadius="50%"
                        marginRight={6}
                      />
                      <Typography fontSize="s" color="neutral.300">
                        Análises de mercado, tendências, projeções, em Ações,
                        Índice, Dólar e Juros
                      </Typography>
                    </Box>
                  }
                  backgroundColor="neutral.700"
                  expanded={false}
                />
              </Grid>
              <Grid xs={12} lg={6}>
                <Accordion
                  title={
                    <Box
                      marginY={4}
                      marginX={3}
                      width="100%"
                      height="100%"
                      display="flex"
                      alignItems="center"
                    >
                      <Box
                        padding={3}
                        backgroundColor="brand.red"
                        borderRadius="50%"
                        marginRight={6}
                      />
                      <Typography fontSize="s" color="neutral.300">
                        Radar Alpha, é uma live semanal com análise dos papéis mais
                        promissores para semana
                      </Typography>
                    </Box>
                  }
                  backgroundColor="neutral.700"
                  expanded={false}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box width="100%" marginTop={104}>
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
