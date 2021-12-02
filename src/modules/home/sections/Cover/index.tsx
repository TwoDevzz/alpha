import Box from '@components/Box';
import Button from '@components/Button';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import ScrollBottomIcon from '@home/components/ScrollBottomIcon';

export default function Cover() {
  return (
    <Box
      paddingX={DEFAULT_PADDING_X}
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      paddingY={30}
    >
      <Box
        flex={1}
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box marginX="auto" maxWidth={950}>
          <Typography textAlign="center" variant="h1">
            A mais completa plataforma de inteligência de mercado para investidores
          </Typography>
        </Box>
        <Box marginX="auto" maxWidth={770} marginTop={9}>
          <Typography color="neutral.400" textAlign="center" variant="medium1">
            A Alpha trading conecta você a uma comunidade viva de investidores
            liderada por grandes nomes do mercado. Faça networking, consulte e
            encontre a oportunidade certa para investir.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginTop={9}>
          <Button size="large" href={process.env.NEXT_PUBLIC_PRODUCT_DEFAULT}>
            FAÇA SUA INSCRIÇÃO AGORA
          </Button>
        </Box>
        <Box marginTop={5}>
          <Typography
            color="neutral.400"
            textAlign="center"
            fontSize="xs"
            lineHeight="s"
            fontWeight="regular"
          >
            <b>100% de reembolso</b> em até 7 dias
          </Typography>
        </Box>
      </Box>
      <Box marginTop={50} display="flex" justifyContent="center" width="100%">
        <ScrollBottomIcon />
      </Box>
    </Box>
  );
}
