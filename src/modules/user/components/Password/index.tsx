import { Controller, useForm } from 'react-hook-form';

import Box from '@components/Box';
import Button from '@components/Button';
import { useDialog } from '@components/Dialog';
import Textfield from '@components/Textfield';
import Typography from '@components/Typography';

import { getErrorMessage } from '@config/api';

import PasswordSuccessDialog from '@user/components/Password/dialog';
import useUpdatePassword from '@user/hooks/useUpdatePassword';

interface PasswordFormData {
  password: string;
  old_password: string;
  confirm_password: string;
}

const Password = () => {
  const { openDialog, closeDialog, opened } = useDialog(false);

  const { mutate, isLoading } = useUpdatePassword({
    onSuccess: () => openDialog(),
    onError: error => {
      const errorMessage = getErrorMessage(
        error?.response,
        'Não foi possivel alterar a senha.',
      );

      handleError(errorMessage);
    },
  });

  const { handleSubmit, control, getValues, setError, clearErrors } =
    useForm<PasswordFormData>({
      defaultValues: {},
    });

  const onSubmit = (data: PasswordFormData) => {
    mutate({ password: data.password, old_password: data.old_password });
  };

  const handleError = (error: string) => {
    setError('old_password', { message: error });

    setTimeout(() => {
      clearErrors('old_password');
    }, 4000);
  };

  return (
    <Box onSubmit={handleSubmit(onSubmit)} as="form">
      <PasswordSuccessDialog open={opened} onClose={closeDialog} />
      <Typography fontFamily="headline" fontSize={24} fontWeight="bold">
        Senha
      </Typography>

      <Box display="flex" flexWrap="wrap" paddingTop={{ default: 6 }}>
        <Box
          paddingRight={{ default: 0, lg: 5 }}
          marginBottom={{ default: 5, lg: 6 }}
          flex={{ default: '1 0 100%', lg: '1 0 50%' }}
        >
          <Controller
            name="old_password"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Textfield
                label="Senha atual"
                value={value || ''}
                onChange={onChange}
                error={!!error}
                helperText={error?.message}
                type="password"
              />
            )}
            rules={{
              required: 'Senha atual é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter no mínimo 6 caracteres',
              },
            }}
          />
        </Box>
        <Box
          paddingLeft={{ default: 0, lg: 5 }}
          marginBottom={{ default: 0, lg: 6 }}
          flex={{ default: '1 0 100%', lg: '1 0 50%' }}
        />
        <Box
          paddingRight={{ default: 0, lg: 5 }}
          marginBottom={{ default: 5, lg: 6 }}
          flex={{ default: '1 0 100%', lg: '1 0 50%' }}
        >
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Textfield
                label="Nova senha"
                value={value || ''}
                onChange={onChange}
                error={!!error}
                helperText={error?.message}
                type="password"
              />
            )}
            rules={{
              required: 'Nova senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter no mínimo 6 caracteres',
              },
            }}
          />
        </Box>
        <Box
          paddingLeft={{ default: 0, lg: 5 }}
          marginBottom={{ default: 5, lg: 6 }}
          flex={{ default: '1 0 100%', lg: '1 0 50%' }}
        >
          <Controller
            name="confirm_password"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Textfield
                label="Confirme a nova senha"
                value={value || ''}
                onChange={onChange}
                error={!!error}
                helperText={error?.message}
                type="password"
              />
            )}
            rules={{
              required: 'Confirmação de senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter no mínimo 6 caracteres',
              },
              validate: value =>
                value !== getValues('password')
                  ? 'As senhas devem ser iguais'
                  : true,
            }}
          />
        </Box>
        <Box flex={{ default: '1 0 100%', lg: 'initial' }}>
          <Button
            loading={isLoading}
            type="submit"
            width={{ default: '100%', lg: 'auto' }}
          >
            SALVAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Password;
