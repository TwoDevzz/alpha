import Head from 'next/head';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import Box from '@components/Box';
import Loader from '@components/Loader';
import Tab from '@components/Tab';
import TabPanel from '@components/TabPanel';
import Tabs from '@components/Tabs';

import { APIError, getErrorMessage } from '@config/api';

import { useFeedback } from '@hooks/useFeedback';

import User from '@models/User';

import Password from '@user/components/Password';
import useMyProfile from '@user/hooks/useMyProfile';

import { adaptBirthDate, maskProfile } from '@utils/mask';

import services from '@services';
import { UpdateMyProfileRequest } from '@services/me/types';

import ProfileForm, { UserFormValues } from './form';

const Profile: React.FC = () => {
  const { data: user, isLoading, refetch: fetchProfile } = useMyProfile();

  const [activeTab, setActiveTab] = useState<number>(0);
  const { showErrorMessage, showSuccessMessage } = useFeedback();

  const form = useForm<UserFormValues>({});

  useEffect(() => {
    if (user) {
      const maskedUser = maskProfile(user);
      Object.keys(maskedUser).forEach(key => {
        form.setValue(key as any, (maskedUser as any)[key]);
      });
    }
  }, [user]);

  const handleChangeTab = useCallback((value: number) => {
    setActiveTab(value);
  }, []);

  const { mutate, isLoading: isLoadingSave } = useMutation<
    User,
    APIError,
    UpdateMyProfileRequest
  >('myProfile', form => services.me.updateMyProfile(form), {
    onSuccess: () => {
      showSuccessMessage('Usuário salvo com sucesso');
      fetchProfile();
    },
    onError: error => {
      const message = getErrorMessage(error.response);
      showErrorMessage(message);
    },
  });

  const onSubmit = (data: UserFormValues) => {
    const {
      full_name,
      email,
      birth_date,
      cellphone,
      cpf,
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

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" justifyContent="center">
        <Loader />
      </Box>
    );
  }

  return (
    <Box>
      <Head>
        <title>Alpha trading - Meu Perfil</title>
      </Head>
      <Tabs
        value={activeTab}
        onChange={(props, value) => handleChangeTab(Number(value))}
      >
        <Tab label="Dados pessoais e endereço" />
        <Tab label="Senha" />
      </Tabs>
      <TabPanel value={activeTab} index={0}>
        <ProfileForm
          form={form}
          onSubmit={onSubmit}
          isEditing={true}
          isLoadingSave={isLoadingSave}
        />
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
        <Password />
      </TabPanel>
    </Box>
  );
};

export default Profile;
