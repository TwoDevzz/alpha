import Box from '@components/Box';
import Dialog from '@components/Dialog';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

export interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PasswordSuccessDialog({ open, onClose }: Props) {
  return (
    <Dialog maxWidth={770} open={open} onClose={onClose} showIconClose>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={9}
      >
        <Box
          minWidth={80}
          minHeight={80}
          marginBottom={8}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor="other.positive"
        >
          <Icon size="h2" name="Check" fill="neutral.white" />
        </Box>
        <Box maxWidth={500} marginX="auto">
          <Typography textAlign="center" fontSize="xl" fontWeight="bold">
            Senha alterada com sucesso
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}
