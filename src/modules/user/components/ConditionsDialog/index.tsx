import React from 'react';
import PerfectScrollBar from 'react-perfect-scrollbar';

import Box from '@components/Box';
import Dialog from '@components/Dialog';
import Divider from '@components/Divider';
import Typography from '@components/Typography';

export interface Props {
  opened: boolean;
  closeDialog: () => void;
}

export default function ConditionsDialog({ opened, closeDialog }: Props) {
  const onClose = React.useCallback(() => {
    closeDialog();
  }, []);

  return (
    <Dialog maxWidth={970} open={opened} onClose={onClose}>
      <Typography variant="h3" color="neutral.900">
        Condições gerais e termos de uso
      </Typography>
      <Box marginTop={6} marginBottom={11}>
        <Typography fontSize={{ lg: 18, default: 's' }} color="neutral.900">
          Ao aceitar os termos deste documento eletronicamente, o MEMBROS declara e
          concorda expressamente que:
        </Typography>
      </Box>
      <Box maxHeight={397}>
        <PerfectScrollBar style={{ maxHeight: 397 }}>
          <Box paddingRight={7}>
            <Box marginBottom={6}>
              <Typography fontSize={{ lg: 18, default: 's' }} color="neutral.900">
                Não utilizar os serviços da Plataforma ALPHA TRADING, objeto deste
                Termo, para quaisquer transações ilícitas e/ou serviços ilícitos;
              </Typography>
            </Box>
            <Divider />
            <Box marginY={6}>
              <Typography fontSize={{ lg: 18, default: 's' }} color="neutral.900">
                Ter maioridade legal de 18 anos, ou ser emancipado, e ainda possuir
                capacidade jurídica;
              </Typography>
            </Box>
            <Divider />
            <Box marginY={6}>
              <Typography fontSize={{ lg: 18, default: 's' }} color="neutral.900">
                Que reconhece este TERMO que se formaliza, produzindo vínculo entre
                as Partes, com a sua aceitação eletrônica;
              </Typography>
            </Box>
            <Divider />
            <Box marginY={6}>
              <Typography fontSize={{ lg: 18, default: 's' }} color="neutral.900">
                Que está ciente, leu, e está de pleno acordo com todos os termos e
                condições deste TERMO, razão pela qual o aceita de livre e
                espontânea vontade;
              </Typography>
            </Box>
            <Divider />
            <Box marginY={6}>
              <Typography fontSize={{ lg: 18, default: 's' }} color="neutral.900">
                Notificar imediatamente os Responsáveis pela plataforma, através do
                 canal de “SUPORTE” caso tome ciência de qualquer violação relacionada 
                 ao serviço ou uso não autorizado de seu nome de MEMBROS e SENHA;
              </Typography>
            </Box>
          </Box>
        </PerfectScrollBar>
      </Box>
    </Dialog>
  );
}
