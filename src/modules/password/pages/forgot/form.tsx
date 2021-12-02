import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import Box from '@components/Box';
import Button from '@components/Button';
import Loader from '@components/Loader';
import Textfield from '@components/Textfield';

import { APIError, getErrorMessage } from '@config/api';

import services from '@services';

interface FormValues {
  email: string;
}

export interface Props {
  onSuccess: () => void;
}

const Form = ({ onSuccess }: Props) => {
  const {
    register,
    setError,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {},
  });

  const handleError = (error: string) => {
    setError('email', { message: error });

    setTimeout(() => {
      clearErrors('email');
    }, 4000);
  };

  const mutationForgotPassword = useMutation<FormValues, APIError, FormValues>(
    ({ email }) => services.password.forgotPassword({ email }),
    {
      onSuccess,
      onError: ({ response }) => {
        const message = getErrorMessage(
          response,
          'Não foi possível enviar o e-mail',
        );
        handleError(message);
      },
    },
  );

  const onSubmit = (data: FormValues) => {
    mutationForgotPassword.mutate({ email: data.email });
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={4}>
        <Textfield
          {...register('email', {
            required: 'E-mail é obrigatorio',
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'E-mail invalido',
            },
          })}
          error={!!errors.email}
          helperText={errors.email?.message}
          label="E-mail"
        />
      </Box>
      <Box width="100%">
        <Button
          loading={mutationForgotPassword.isLoading}
          loader={<Loader variant="small" color="neutral.white" />}
          width="100%"
          type="submit"
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
