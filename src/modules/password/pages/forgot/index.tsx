import { useCallback, useState } from 'react';

import Alert from '@components/Alert';
import Box from '@components/Box';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import Form from '@password/pages/forgot/form';

function ForgotPassword() {
  const [success, setSuccess] = useState(false);

  const onSuccess = useCallback(() => {
    setSuccess(true);
  }, [success]);

  return (
    <Box
      paddingX={DEFAULT_PADDING_X}
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      minHeight="100%"
      paddingY={30}
    >
      <Box
        flex={1}
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box marginBottom={8}>
          <Typography variant="h2">Redefinir senha</Typography>
        </Box>
        <Box maxWidth={570} marginBottom={8}>
          <Typography textAlign="center" fontSize="20">
            Coloque seu e-mail cadastrado para enviarmos os próximos para você
            redefinir sua senha.
          </Typography>
        </Box>
        <Box width="100%" maxWidth={370} marginBottom={11}>
          {success ? (
            <Alert message="E-mail enviado, verifique sua caixa de entrada." />
          ) : (
            <Form onSuccess={onSuccess} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ForgotPassword;
