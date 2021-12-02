import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import Box from '@components/Box';
import Typography from '@components/Typography';

import { APIError, getErrorMessage } from '@config/api';
import { setToken } from '@config/auth';

import { useFeedback } from '@hooks/useFeedback';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import User from '@models/User';

import ProfileForm, { UserFormValues } from '@user/components/Profile/form';

import { adaptBirthDate } from '@utils/mask';

import services from '@services';
import { SignUpRequest } from '@services/user/types';

export default function SignUp() {
  const router = useRouter();
  const { showErrorMessage, showSuccessMessage } = useFeedback();

  const { refetch: fetchProfile } = useQuery(
    'myProfile',
    services.me.getMyProfile,
    {
      enabled: false,
    },
  );

  const form = useForm<UserFormValues>({
    defaultValues: {
      checked: false,
    },
  });

  const { mutate, isLoading } = useMutation<User, APIError, SignUpRequest>(
    form => services.user.signUp(form),
    {
      onSuccess: data => {
        if (data.token) {
          setToken(data.token);
          fetchProfile();
          if (router.query.redirect) {
            return router.replace(
              decodeURIComponent(router.query.redirect as string),
            );
          } else {
            return router.replace('/user');
          }
        } else if (router.query.redirect) {
          return router.replace(
            `/sign-in?redirect=${encodeURIComponent(
              router.query.redirect as string,
            )}`,
          );
        }
        router.replace('/sign-in');
      },
      onError: error => {
        const message = getErrorMessage(error.response);
        showErrorMessage(message);
      },
    },
  );

  const onSubmit = (data: UserFormValues) => {
    const {
      full_name,
      email,
      birth_date,
      cellphone,
      cpf,
      password,
      cep,
      street,
      house_number,
      appartament_number,
      neighborhood,
      city,
      state,
    } = data;

    mutate({
      full_name,
      email,
      cellphone,
      cpf,
      password,
      cep,
      street,
      house_number,
      neighborhood,
      city,
      state,
      appartament_number: appartament_number || ' ',
      birth_date: adaptBirthDate(birth_date),
    });
  };

  return (
    <Box
      paddingX={DEFAULT_PADDING_X}
      width="100%"
      paddingY={{ default: 11, md: 17 }}
    >
      <Head>
        <title>Cadastro | Alpha Trading</title>
      </Head>

      <Box width="100%" maxWidth={570} margin="0 auto">
        <Box marginBottom={{ default: 6, lg: 8 }}>
          <Typography variant="h2" textAlign="center">
            Quase lá! Vamos fazer o seu cadastro!
          </Typography>
        </Box>
        <Typography variant="medium1" textAlign="center">
          Leva menos de 1 minuto.
        </Typography>
      </Box>
      <Box marginTop={{ default: 11, lg: 15 }}>
        <Box maxWidth={770} margin="0 auto" width="100%">
          <ProfileForm
            onSubmit={onSubmit}
            form={form}
            isEditing={false}
            isLoadingSave={isLoading}
          />
        </Box>
      </Box>
    </Box>
  );
}
