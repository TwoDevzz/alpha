import Image from 'next/image';

import Accordion, { useAccordions } from '@components/Accordion';
import Box from '@components/Box';
import Button from '@components/Button';
import Grid from '@components/Grid';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import Channel from '@home/components/Channel';
import Testimonial from '@home/components/Testimonial';

const Accordions = () => {
  const { activeAccordion, toogleAccordion } = useAccordions('insights');

  return (
    <>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Flag" fill="brand.orange" />
              </Box>
              <Typography color="neutral.white">Alpha Insights</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'insights'}
          onChange={toogleAccordion('insights')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Canal restrito aos ADM’s e sponsors que enviarão mensagens sobre ideias
            de investimento e movimentações em seus portfolios
          </Typography>
        </Accordion>
      </Box>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="AccountBalance" fill="brand.orange" />
              </Box>
              <Typography color="neutral.white">Fundos Imobiliários</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'fundos'}
          onChange={toogleAccordion('fundos')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Canal aberto a todos os membros para discussão relacionadas a analise
            fundamentalista de ativos brasileiros e internacionais
          </Typography>
        </Accordion>
      </Box>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Assistant" fill="brand.orange" />
              </Box>
              <Typography color="neutral.white">Ações</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'ações'}
          onChange={toogleAccordion('ações')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Canal aberto a todos os membros para discussão relacionadas a ações do
            mercado brasileiro e internacional
          </Typography>
        </Accordion>
      </Box>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Brightness" fill="brand.orange" />
              </Box>
              <Typography color="neutral.white">Futuro</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'futuro'}
          onChange={toogleAccordion('futuro')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Canal aberto a todos os membros para discussão relacionadas aos ativos
            futuros negociados na BM&F
          </Typography>
        </Accordion>
      </Box>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Category" fill="brand.orange" />
              </Box>
              <Typography color="neutral.white">Opções</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'opções'}
          onChange={toogleAccordion('opções')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Canal aberto a todos os membros para discussão relacionadas ao mercado
            de Opções e Derivativos, bem como operações estruturadas
          </Typography>
        </Accordion>
      </Box>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Beenhere" fill="brand.orange" />
              </Box>
              <Typography color="neutral.white">Fundamentalista</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'fundamentalista'}
          onChange={toogleAccordion('fundamentalista')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Canal aberto a todos os membros para discussão relacionadas a analise
            fundamentalista de ativos brasileiros e internacionais
          </Typography>
        </Accordion>
      </Box>
    </>
  );
};

export default function Products() {
  return (
    <Box
      id="community"
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
        <Box width="100%">
          <Typography
            color="neutral.white"
            variant="h2"
            fontSize="h2"
            textAlign="center"
          >
            Conheça nossos produtos
          </Typography>
          <Box margin={6} maxWidth={770} marginX="auto">
            <Typography
              variant="medium1"
              fontSize="m"
              color="neutral.300"
              textAlign="center"
            >
              70% dos assinantes dizem recuperar o valor investido em até duas semanas
            </Typography>
          </Box>
        </Box>
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
            <Image src="/imgs/discord.png" width={570} height={517} />
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
                  backgroundColor="brand.orange"
                  display="flex"
                >
                  <Icon size="m" name="People" fill="neutral.white" />
                </Box>
                <Typography variant="h3" color="neutral.white">
                  Alpha Community
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
                  A Comunidade Alpha é feita para você que busca a mais completa
                  plataforma de informações e quer ter{' '}
                  <Typography
                    as="span"
                    color="brand.orange"
                    fontSize={{
                      default: 's',
                      sm: '18',
                    }}
                  >
                    contato direto com gestores que administram milhões.
                  </Typography>
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
                  Receba análises dos mais assertivos analistas do mercado, tome{' '}
                  <Typography
                    as="span"
                    color="brand.orange"
                    fontSize={{
                      default: 's',
                      sm: '18',
                    }}
                  >
                    decisões mais seguras
                  </Typography>{' '}
                  e compartilhe informações com grandes investidores e profissionais
                  em{' '}
                  <Typography
                    as="span"
                    color="brand.orange"
                    fontSize={{
                      default: 's',
                      sm: '18',
                    }}
                  >
                    salas de debate exclusivas.
                  </Typography>
                </Typography>
              </Box>
            </Box>

            <Box marginTop={{ default: 7, lg: 6 }}>
              <Testimonial
                phrase="Calma e Elegância! Alpha é TOP! Resultado da operação 410 pontos. Meta batida!"
                colors={{
                  border: '#FFB762',
                  name: 'neutral.white',
                  profession: 'neutral.400',
                }}
                src="/imgs/testimonials/testimonial-1.png"
                name="Bruno Miranda"
              />
            </Box>
          </Box>
        </Box>
        <Box width="100%" marginTop={{ default: 72, lg: 112 }}>
          <Box marginBottom={8}>
            <Typography fontSize={24} color="neutral.white" fontWeight="bold">
              Todos os canais que você terá acesso
            </Typography>
          </Box>
          <Box display={{ default: 'none', lg: 'block' }}>
            <Grid spacing={8} container>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Flag" fill="brand.orange" />}
                  title="Alpha Insights"
                  description="As melhores oportunidades sobre ideias de investimentos e movimentações em seus portfólios são compartilhadas no Alpha Insights"
                />
              </Grid>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="AccountBalance" fill="brand.orange" />}
                  title="Fundos Imobiliários"
                  description="Canal sobre fundos imobiliários e as oportunidades mais rentáveis apresentadas por contribuidores e assinantes"
                />
              </Grid>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Assistant" fill="brand.orange" />}
                  title="Ações"
                  description="Canal aberto a todos os membros para discussões relacionadas a estratégias e oportunidades na Bolsa de Valores Brasileira"
                />
              </Grid>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Brightness" fill="brand.orange" />}
                  title="Futuro"
                  description="Canal ao vivo com Vasco Mamede e contribuidores discutindo em tempo real operações e análises sobre os mercados de contratos futuros de dólar e índice"
                />
              </Grid>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Category" fill="brand.orange" />}
                  title="Opções"
                  description="As estratégias mais rentáveis são discutidas neste canal sobre Opções, Derivativos e também operações estruturadas"
                />
              </Grid>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Beenhere" fill="brand.orange" />}
                  title="Fundamentalista"
                  description="Canal aberto a todos os membros para discussão relacionadas a analise fundamentalista de ativos brasileiros e internacionais"
                />
              </Grid>
            </Grid>
          </Box>
          <Box display={{ default: 'block', lg: 'none' }}>
            <Accordions />
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
