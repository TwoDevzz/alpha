import Avatar from '@components/Avatar';
import AvatarGroup from '@components/AvatarGroup';
import Box from '@components/Box';
import Grid from '@components/Grid';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import Card from '@home/components/CardContributor';
import Contributor from '@home/components/Contributor';

export default function Contributors() {
  return (
    <Box backgroundColor="neutral.50" position="relative">
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        width="100%"
        minHeight="100%"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          maxWidth={1170}
          marginX="auto"
          flexWrap={{
            default: 'wrap',
            lg: 'nowrap',
          }}
        >
          <Box
            flex={{ default: '0 0 100%', lg: 1 }}
            maxWidth={{ default: 630, lg: 'initial' }}
            paddingY={{ default: 56, lg: 120 }}
            marginRight={{ default: 'auto', lg: 140 }}
            marginLeft="auto"
            paddingX={DEFAULT_PADDING_X}
          >
            <Box>
              <Typography variant="h2">
                Para todos <br /> os momentos que você precisar
              </Typography>
            </Box>
            <Box marginTop={64}>
              <Box marginBottom={5}>
                <Typography fontSize="m" fontFamily="headline" fontWeight="bold">
                  Investidores profissionais
                </Typography>
              </Box>
              <Box>
                <Typography variant="medium1" fontSize="m" color="neutral.400">
                  Perca o medo do mercado, acompanhe de perto as estratégias de
                  grandes investidores que gerenciam carteiras milionárias.
                </Typography>
              </Box>
            </Box>
            <Box marginTop={56}>
              <Box marginBottom={5}>
                <Typography fontSize="m" fontFamily="headline" fontWeight="bold">
                  Comunidade ativa
                </Typography>
              </Box>
              <Box>
                <Typography variant="medium1" fontSize="m" color="neutral.400">
                  Nunca esteja sozinho, troque informações e tenha apoio de uma
                  comunidade viva que vem crescendo cada dia mais.
                </Typography>
              </Box>
            </Box>
            <Box marginTop={56}>
              <Box marginBottom={5}>
                <Typography fontSize="m" fontFamily="headline" fontWeight="bold">
                  Conteúdo 24/7
                </Typography>
              </Box>
              <Box>
                <Typography variant="medium1" fontSize="m" color="neutral.400">
                  Aumente sua curva de aprendizado com conteúdos 24h por dia de
                  forma clara e direta sobre o mercado.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            paddingY={{ default: 56, lg: 120 }}
            flex={{ default: '0 0 100%', lg: 2 }}
            display="flex"
            flexDirection="column"
            alignItems={{ default: 'baseline', sm: 'center' }}
            position={{ default: 'relative', lg: 'initial' }}
            paddingX={{ default: 5, lg: 8 }}
          >
            <Box
              borderRadius="0 0 0 40px"
              backgroundColor="brand.default"
              height={290}
              width={{ default: '100%', lg: '60%' }}
              position="absolute"
              zIndex={1}
              right={0}
              top={0}
            />
            <Box
              paddingLeft={{ default: 5, lg: 8 }}
              paddingRight={{ default: 5, lg: 0 }}
              overflowX={{ default: 'scroll', lg: 'initial' }}
              display="flex"
              width={{ default: '100vw', lg: 'auto' }}
              marginLeft={{ default: -5, lg: 0 }}
            >
              <Box
                paddingRight={3}
                zIndex={2}
                minWidth={210}
                flex={{
                  default: '0 0 210px',
                  lg: '0 0 33.33%',
                }}
              >
                <Card
                  title="Vasco Mamede"
                  description="Head da Mesa de Câmbio e Futuros da Rio Reno Investimentos. Trader e especialista em Análise Técnica"
                  imageSrc="/imgs/contributors-card/vasco.png"
                  instagram="https://www.instagram.com/vascomamede/"
                  twitter="https://twitter.com/vascomamede"
                />
              </Box>
              <Box
                paddingRight={3}
                zIndex={2}
                minWidth={210}
                flex={{
                  default: '0 0 210px',
                  lg: '0 0 33.33%',
                }}
              >
                <Card
                  title="Eduardo Champs"
                  description="CEO da Rio Reno Investimentos e CEO da AlphaTrading. Trader atuante no mercado financeiro desde 2009"
                  imageSrc="/imgs/contributors-card/edu-champs.jpeg"
                  instagram="https://www.instagram.com/educhamps/"
                  twitter="https://twitter.com/educhamps"
                />
              </Box>
              <Box
                zIndex={2}
                minWidth={210}
                flex={{
                  default: '0 0 210px',
                  lg: '0 0 33.33%',
                }}
                marginRight={{ default: 5, lg: 0 }}
              >
                <Card
                  title="Thalis Yves"
                  description="Trader com 14 anos de experiência operando diversos mercados. Retornos anualizados de 87% em 14 anos."
                  imageSrc="/imgs/contributors-card/thalis.jpeg"
                  twitter="https://twitter.com/ThalisYves"
                />
              </Box>
            </Box>
            <Box maxWidth={630} marginTop={56}>
              <Box marginBottom={7}>
                <Typography fontSize="m" fontFamily="headline" fontWeight="bold">
                  Contribuidores
                </Typography>
              </Box>

              <Grid container>
                <Grid sm={4} xs={6}>
                  <Contributor
                    src="/imgs/contributors-card/gustavo-rocha.png"
                    name="Gustavo Rocha"
                  />
                </Grid>
                <Grid sm={4} xs={6}>
                  <Contributor
                    src="/imgs/contributors-card/eric.png"
                    name="Eric Gaigher"
                  />
                </Grid>
                <Grid sm={4} xs={6}>
                  <Contributor
                    src="/imgs/contributors-card/pedro-novaes.jpeg"
                    name="Pedro Novaes"
                  />
                </Grid>

                <Grid sm={4} xs={6}>
                  <Contributor
                    src="/imgs/contributors-card/rui-cavendish.png"
                    name="Rui Cavendish"
                  />
                </Grid>
                <Grid sm={4} xs={6}>
                  <Contributor
                    src="/imgs/contributors-card/eduardo-cavendish.jpg"
                    name="Eduardo Cavendish"
                  />
                </Grid>
                <Grid sm={4} xs={6}>
                  <Contributor
                    src="/imgs/contributors-card/lucas-salomon.jpg"
                    name="Lucas Salomon"
                  />
                </Grid>
              </Grid>
            </Box>

            <Box
              width="100%"
              maxWidth={630}
              marginTop={64}
            >
              <Box marginBottom={7}>
                <Typography fontSize="m" fontFamily="headline" fontWeight="bold">
                  A comunidade que mais cresce no Brasil
                </Typography>
              </Box>

              <AvatarGroup>
                {Array.from(Array(25).keys()).map((n) => (
                  <Box key={n+1} display={{ default: n > 9 ? 'none' : 'block', sm: 'block' }}>
                    <Avatar variant="small" src={`/imgs/people/person${n+1}.jpg`} />
                  </Box>
                ))}
                {/* <Avatar variant="small" src="/imgs/contributors/photo-1.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-2.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-4.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-5.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-1.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-2.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                <Avatar variant="small" src="/imgs/contributors/photo-4.png" />
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-5.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-1.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-2.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-4.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-5.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-1.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-2.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-4.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-5.png" />
                </Box>
                <Box display={{ default: 'none', sm: 'block' }}>
                  <Avatar variant="small" src="/imgs/contributors/photo-3.png" />
                </Box> */}
              </AvatarGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
