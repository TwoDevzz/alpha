import { useCallback, useState } from 'react';

import Alert from '@components/Alert';
import Box from '@components/Box';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import Form from '@password/pages/reset/form';

function ResetPassword() {
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
          <Typography variant="h2" textAlign="center">
            Cadastre uma nova senha
          </Typography>
        </Box>
        <Box width="100%" maxWidth={370} marginBottom={11}>
          {success ? (
            <Alert message="Senha alterada com sucesso." />
          ) : (
            <Form onSuccess={onSuccess} />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default ResetPassword;
