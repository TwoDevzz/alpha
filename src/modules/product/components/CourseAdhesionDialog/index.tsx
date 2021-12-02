import ScrollBar from 'react-perfect-scrollbar';

import Box from '@components/Box';
import Dialog from '@components/Dialog';
import Divider from '@components/Divider';
import Typography from '@components/Typography';

export interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AdhesionDialog({ open, onClose }: Props) {
  return (
    <Dialog maxWidth={970} open={open} onClose={onClose} showIconClose>
      <Box marginBottom={6}>
        <Typography variant="h3">Termos de adesão do curso</Typography>
      </Box>
      <Box maxWidth={626} marginBottom={{ default: 7, lg: 11 }}>
        <Typography fontSize={18}>
          Ao aceitar os termos deste documento eletronicamente, o MEMBROS declara e
          concorda expressamente que:
        </Typography>
      </Box>
      <Box maxHeight={397}>
        <ScrollBar style={{ maxHeight: 397 }}>
          <Box paddingRight={7}>
            <Box marginBottom={6}>
              <Typography fontSize="s">
                Não utilizar os serviços da Plataforma ALPHA TRADING, objeto deste
                Termo, para quaisquer transações ilícitas e/ou serviços ilícitos;
              </Typography>
            </Box>
            <Box marginBottom={6}>
              <Divider />
            </Box>
            <Box marginBottom={6}>
              <Typography fontSize="s">
                Ter maioridade legal de 18 anos, ou ser emancipado, e ainda possuir
                capacidade jurídica;
              </Typography>
            </Box>
            <Box marginBottom={6}>
              <Divider />
            </Box>
            <Box marginBottom={6}>
              <Typography fontSize="s">
                Que reconhece este TERMO que se formaliza, produzindo vínculo entre
                as Partes, com a sua aceitação eletrônica;
              </Typography>
            </Box>
            <Box marginBottom={6}>
              <Divider />
            </Box>
            <Box marginBottom={6}>
              <Typography fontSize="s">
                Que está ciente, leu, e está de pleno acordo com todos os termos e
                condições deste TERMO, razão pela qual o aceita de livre e
                espontânea vontade;
              </Typography>
            </Box>
            <Box marginBottom={6}>
              <Divider />
            </Box>
            <Box marginBottom={6}>
              <Typography fontSize="s">
                Notificar imediatamente os Responsáveis pela plataforma, através do
                canal de “SUPORTE” caso tome ciência de qualquer violação
                relacionada ao serviço ou uso não autorizado de seu nome de MEMBROS
                e SENHA;
              </Typography>
            </Box>
          </Box>
        </ScrollBar>
      </Box>
    </Dialog>
  );
}
