import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import Box from '@components/Box';
import Button from '@components/Button';
import Divider from '@components/Divider';
import StyledLink from '@components/Link';
import Textfield from '@components/Textfield';
import Typography from '@components/Typography';

import { APIError, getErrorMessage } from '@config/api';
import { setToken } from '@config/auth';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import User from '@models/User';

import services from '@services';

interface FormValues {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
  user: User;
}

export default function SignIn() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FormValues>({
    defaultValues: {},
  });
  const router = useRouter();

  const { refetch: fetchProfile } = useQuery(
    'myProfile',
    services.me.getMyProfile,
    {
      enabled: false,
    },
  );

  const { mutate, isLoading } = useMutation<SignInResponse, APIError, FormValues>(
    form => services.user.signIn(form),
    {
      onSuccess: data => {
        setToken(data.token);
        fetchProfile();
        if (router.query.redirect) {
          router.replace(decodeURIComponent(router.query.redirect as string));
        } else {
          router.replace('/user');
        }
      },
      onError: error => {
        const message = getErrorMessage(
          error.response,
          'Usuário e/ou senha inválidos.',
        );
        setError('email', { message: undefined });
        setError('password', { message });
      },
    },
  );

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  const getUrlSignUp = () => {
    if (router.query.redirect)
      return `/sign-up?redirect=${encodeURIComponent(
        router.query.redirect as string,
      )}`;
    return '/sign-up';
  };

  return (
    <Box
      paddingX={DEFAULT_PADDING_X}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flex={1}
      width="100%"
      minHeight="100%"
      paddingY={17}
    >
      <Head>
        <title>Entrar | Alpha Trading</title>
      </Head>

      <Typography variant="h2" textAlign="center">
        Bem-vindo de volta!
      </Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        as="form"
        width="100%"
        maxWidth={370}
        display="flex"
        flexDirection="column"
        marginTop={{ default: 10, lg: 11 }}
      >
        <Box>
          <Textfield
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'E-mail inválido',
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
            type="email"
            label="E-mail"
          />
        </Box>
        <Box marginTop={8}>
          <Textfield
            {...register('password', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha deve ter no mínimo 6 caracteres',
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            type="password"
            label="Senha"
          />
        </Box>
        <Box marginBottom={7}>
          <StyledLink
            variant="primary"
            typography="regular"
            href="/forgot-password"
          >
            Esqueceu sua senha?
          </StyledLink>
        </Box>
        <Button loading={isLoading}>Entrar</Button>
        <Box marginTop={7}>
          <Divider />
          <Box marginTop={7}>
            <Typography variant="regular">
              Ainda não possui cadastro?{' '}
              <StyledLink href={getUrlSignUp()} typography="regular">
                Criar conta
              </StyledLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
