import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import Box from '@components/Box';
import Button from '@components/Button';
import Loader from '@components/Loader';
import Textfield from '@components/Textfield';

import { APIError, getErrorMessage } from '@config/api';

import services from '@services';

interface FormValues {
  newPassword: string;
  password: string;
}

export interface Props {
  onSuccess: () => void;
}

const Form = ({ onSuccess }: Props) => {
  const router = useRouter();

  const { token } = router.query;

  const {
    register,
    setError,
    getValues,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {},
  });

  const handleError = (error: string) => {
    setError('password', { message: error });

    setTimeout(() => {
      clearErrors('password');
    }, 4000);
  };

  const mutationResetPassword = useMutation<FormValues, APIError, FormValues>(
    ({ password }) =>
      services.password.resetPassword({
        password,
        token: String(token),
      }),
    {
      onSuccess,
      onError: ({ response }) => {
        const message = getErrorMessage(
          response,
          'Não foi possivel alterar a senha',
        );

        handleError(message);
      },
    },
  );

  const newPassword = getValues('newPassword');

  const onSubmit = ({ newPassword, password }: FormValues) => {
    mutationResetPassword.mutate({ newPassword, password });
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={1}>
        <Textfield
          {...register('newPassword', {
            required: 'Nova senha é obrigatorio',
          })}
          error={!!errors.newPassword}
          helperText={errors.newPassword?.message}
          label="Nova senha"
          type="password"
        />
      </Box>
      <Box marginBottom={4}>
        <Textfield
          {...register('password', {
            required: 'Senha é obrigatorio',
            validate: value =>
              value !== newPassword ? 'As senhas devem ser iguais' : true,
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Repita a nova senha"
          type="password"
        />
      </Box>
      <Box width="100%">
        <Button
          loading={mutationResetPassword.isLoading}
          loader={<Loader variant="small" color="neutral.white" />}
          width="100%"
          type="submit"
        >
          Cadastrar
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
