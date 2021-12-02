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

const AccordionsQuantitativas = () => {
  const { activeAccordion, toogleAccordion } = useAccordions('longshort');

  return (
    <>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Flag" fill="other.positive" />
              </Box>
              <Typography color="neutral.white">Long & Short</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'longshort'}
          onChange={toogleAccordion('longshort')}
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
                <Icon size="m" name="Grid" fill="other.positive" />
              </Box>
              <Typography color="neutral.white">Distorções</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'distorcoes'}
          onChange={toogleAccordion('distorcoes')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Analisa diversos dados real-time, e em um dashboard é capaz de analisar
            estratégias para daytrade pelo acompanhamento da variação de ativos a
            cada 1 e 5 minutos.
          </Typography>
        </Accordion>
      </Box>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Timer" fill="other.positive" />
              </Box>
              <Typography color="neutral.white">Fast trade</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'ações'}
          onChange={toogleAccordion('ações')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            É um sinal robotizado que aponta operações para daytrade nos timeframes
            de 5 ou 15 min, tem um percentual de 76% de assertividade apontado pelos
            backtests
          </Typography>
        </Accordion>
      </Box>
    </>
  );
};

const AccordionsQuanlitativas = () => {
  const { activeAccordion, toogleAccordion } = useAccordions('insider');

  return (
    <>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="BugReport" fill="other.positive" />
              </Box>
              <Typography color="neutral.white">Insider</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'insider'}
          onChange={toogleAccordion('insider')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Modelo rastreador de tendência que busca antecipar fortes movimentos de
            preço, capturando distorções de mercado. É calculado através de uma
            combinação de 10 indicadores usados preferencialmente no time-frame
            diário para swing trade.
          </Typography>
        </Accordion>
      </Box>
      <Box marginBottom={2}>
        <Accordion
          title={
            <Box display="flex">
              <Box marginRight={5}>
                <Icon size="m" name="Timeline" fill="other.positive" />
              </Box>
              <Typography color="neutral.white">WTrend</Typography>
            </Box>
          }
          expandIcon={<Icon fill="neutral.400" size="sm" name="Add" />}
          hiddenIcon={<Icon fill="neutral.white" size="sm" name="Remove" />}
          expanded={activeAccordion === 'wtrend'}
          onChange={toogleAccordion('wtrend')}
          backgroundColor="neutral.700"
        >
          <Typography color="neutral.300">
            Seguidor de tendência que utiliza volatilidade, cruzamentos de médias
            móveis e outros indicadores para definir a tendência de alta ou de baixa
            dos ativos.
          </Typography>
        </Accordion>
      </Box>
    </>
  );
};

export default function Strategy() {
  return (
    <Box
      id="strategy"
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
        {/* Graphic */}
        <Box width="100%" marginBottom={{ default: 8, lg: 80 }}>
          <Image src="/imgs/strategy-graphic.svg" width={1170} height={347} />
        </Box>

        {/* Grid and Testimonial */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
        >
          <Box
            marginRight={{ default: 0, lg: 100 }}
            maxWidth={{ default: '100%', lg: 570 }}
            flex={{ lg: 1, default: '100%' }}
          >
            <Box display="flex" alignItems="center" marginBottom={5}>
              <Box
                minWidth={6}
                minHeight={6}
                padding={4}
                marginRight={6}
                borderRadius="50%"
                backgroundColor="other.positive"
                display="flex"
              >
                <Icon size="m" name="Radar" fill="neutral.white" />
              </Box>
              <Typography variant="h3" color="neutral.white">
                Alpha Strategy
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
                A Alpha Strategy é um canal que ajuda você a identificar
                oportunidades de investimento e trade.
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
                São 7 estratégias desenvolvidas por um time de especialistas que
                irão impulsionar o seu rendimento no dia-a-dia.
              </Typography>
            </Box>
          </Box>
          <Box
            maxWidth={{ default: '100%', lg: 570 }}
            flex={{ lg: 1, default: '100%' }}
          >
            <Testimonial
              phrase="Até agora paguei 4 meses de Alpha com 2 operações da estratégia fast!"
              colors={{
                border: 'other.positive',
                name: 'neutral.white',
                profession: 'neutral.400',
              }}
              src="/imgs/testimonials/testimonial-1.png"
              name="Rafael Ferreira"
            />
          </Box>
        </Box>

        {/* Channels */}
        <Box width="100%" marginTop={{ default: 72, lg: 112 }}>
          <Box marginBottom={8}>
            <Typography fontSize={24} color="neutral.white" fontWeight="bold">
              Conheça nossas estratégias quantitativas
            </Typography>
          </Box>
          <Box display={{ default: 'none', lg: 'block' }} width="100%">
            <Grid spacing={8} container>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Compare" fill="other.positive" />}
                  title="Long & Short"
                  description="Análise de dados dos Pares cointegrados e correlacionados, bem como alguns indicadores que, combinados apontam se existe oportunidade para que sejam operados estes ativos."
                />
              </Grid>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Grid" fill="other.positive" />}
                  title="Long"
                  description="Analisa diversos dados real-time, e em um dashboard é capaz de analisar estratégias para daytrade pelo acompanhamento da variação de ativos a cada 1 e 5 minutos."
                />
              </Grid>
              <Grid xs={4}>
                <Channel
                  icon={<Icon size="m" name="Timer" fill="other.positive" />}
                  title="Fast trade"
                  description="É um sinal robotizado que aponta operações para daytrade nos time-frames de 5 ou 15 min, tem um percentual de 76% de assertividade apontado pelos backtests"
                />
              </Grid>
            </Grid>
          </Box>
          <Box display={{ default: 'block', lg: 'none' }} width="100%">
            <AccordionsQuantitativas />
          </Box>
        </Box>

        <Box width="100%" marginTop={{ default: 72, lg: 112 }}>
          <Box marginBottom={8}>
            <Typography fontSize={24} color="neutral.white" fontWeight="bold">
              Conheça nossas estratégias qualitativas
            </Typography>
          </Box>
          <Box display={{ default: 'none', lg: 'block' }} width="100%">
            <Grid spacing={8} container>
              <Grid sm={6} xs={12}>
                <Channel
                  icon={<Icon size="m" name="BugReport" fill="other.positive" />}
                  title="Insider"
                  description="Modelo rastreador de tendência que busca antecipar fortes movimentos de preço, capturando distorções de mercado. É calculado através de uma combinação de 10 indicadores usados preferencialmente no time-frame diário para swing trade."
                />
              </Grid>
              <Grid sm={6} xs={12}>
                <Channel
                  icon={<Icon size="m" name="Timeline" fill="other.positive" />}
                  title="WTrend"
                  description="Seguidor de tendência que utiliza volatilidade, cruzamentos de médias móveis e outros indicadores para definir a tendência de alta ou de baixa dos ativos."
                />
              </Grid>
            </Grid>
          </Box>
          <Box display={{ default: 'block', lg: 'none' }} width="100%">
            <AccordionsQuanlitativas />
          </Box>
        </Box>

        {/* Button */}
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
