import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

export default function AlphaCast() {
  return (
    <Box
      backgroundColor="neutral.white"
      paddingY={{
        default: 10,
        md: 17,
      }}
      paddingX={DEFAULT_PADDING_X}
    >
      <Box
        width="100%"
        maxWidth={1170}
        margin="0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box maxWidth={770}>
          <Typography variant="h2" textAlign="center">
            Um ambiente preparado para trazer informação
          </Typography>
        </Box>
        <Box
          marginTop={{
            default: 8,
            md: 13,
          }}
          padding={{
            default: 6,
            md: 13,
          }}
          width="100%"
          backgroundColor="neutral.50"
          borderRadius={5}
        >
          <Box
            display="flex"
            alignItems="center"
            marginBottom={{
              default: 6,
              md: 8,
            }}
          >
            <Box
              minWidth={48}
              minHeight={48}
              borderRadius={6}
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginRight={6}
              background="conic-gradient(from 180deg at 50% 50%, #FF8A00 0deg, #4942FF 291.65deg, #26ADD8 360deg)"
            >
              <Icon size="l" name="Mic" fill="neutral.white" />
            </Box>
            <Typography fontSize="xl" fontWeight="bold" color="neutral.900">
              AlphaCast
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection={{
              default: 'column',
              lg: 'row',
            }}
            justifyContent="space-between"
            width="100%"
          >
            <Box
              opacity={0.6}
              width={{ default: '100%', lg: '55%' }}
              maxWidth={590}
              marginBottom={{
                default: 6,
                lg: 0,
              }}
            >
              <Typography color="neutral.900">
                Ocorre semanalmente, um bate papo descontraído com os principais
                contribuidores Alpha, conduzido por Edu Champs e Thalis Leon, eles
                comentam o cenário macro, e seus portfolios de investimento, e abrem
                a discussão com os membros, que podem tirar dúvidas e perguntar
                sobre a opinião de nossos contribuidores e seus convidados.
                <br />
                <br />
                Ideias fantásticas de investimentos saem desse Podcast que conta com
                os insights e todo conhecimento de quem entende de mercado e opera
                de verdade.
              </Typography>
            </Box>
            <Box
              maxWidth={{
                default: '100%',
                lg: 350,
              }}
            >
              <Box display="flex">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  flex={1}
                  backgroundColor="neutral.white"
                  borderRadius={5}
                  marginRight={3}
                  paddingY={6}
                  paddingX={{
                    default: 0,
                    md: 2,
                  }}
                >
                  <Box marginBottom={5}>
                    <Avatar variant="medium2" src="/imgs/contributors-card/edu-champs.jpeg" />
                  </Box>
                  <Typography
                    fontSize={{ default: 's', md: 'm' }}
                    fontWeight="bold"
                    color="neutral.900"
                    textAlign="center"
                  >
                    Edu Champs
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  flex={1}
                  backgroundColor="neutral.white"
                  borderRadius={5}
                  paddingY={6}
                  paddingX={{
                    default: 0,
                    md: 2,
                  }}
                >
                  <Box marginBottom={5}>
                    <Avatar
                      variant="medium2"
                      src="/imgs/contributors-card/thalis.jpeg"
                    />
                  </Box>
                  <Typography
                    fontSize={{
                      default: 's',
                      md: 'm',
                    }}
                    fontWeight="bold"
                    color="neutral.900"
                    textAlign="center"
                  >
                    Thalis Yves
                  </Typography>
                </Box>
              </Box>
              <Box
                backgroundColor="#EBEDF0"
                marginTop={5}
                paddingY={6}
                paddingX={{
                  default: 6,
                  md: 8,
                }}
                width="100%"
                borderRadius={5}
              >
                <Typography variant="medium1">
                  Todas quarta-feiras às{' '}
                  <Typography as="span" variant="medium2" color="brand.default">
                    18:00
                  </Typography>
                </Typography>
                <Typography
                  color="neutral.500"
                  fontSize={{
                    default: 'xs',
                    md: 's',
                  }}
                >
                  (Exclusivo para membros Alpha)
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
