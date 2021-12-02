import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Controller, UseFormReturn } from 'react-hook-form';

import Box from '@components/Box';
import Button from '@components/Button';
import Checkbox from '@components/Checkbox';
import { useDialog } from '@components/Dialog';
import StyledLink from '@components/Link';
import MaskInput from '@components/MaskInput';
import Textfield from '@components/Textfield';
import Typography from '@components/Typography';

import services from '@services';

import ConditionsDialog from '../ConditionsDialog';

export interface UserFormValues {
  full_name: string;
  email: string;
  birth_date: string;
  cellphone: string;
  cpf: string;
  password: string;
  password_confirmation?: string;
  cep: string;
  street: string;
  house_number: string;
  appartament_number?: string;
  neighborhood: string;
  city: string;
  state: string;
  checked?: boolean;
  token?: string;
}

export interface Props {
  onSubmit: (data: UserFormValues) => void;
  isEditing: boolean;
  form: UseFormReturn<UserFormValues>;
  isLoadingSave: boolean;
}

const ProfileForm = ({ onSubmit, isEditing, form, isLoadingSave }: Props) => {
  const router = useRouter();

  const {
    handleSubmit,
    getValues,
    clearErrors,
    setError,
    setValue,
    watch,
    control,
  } = form;

  const watchCep = watch('cep');
  const watchChecked = watch('checked');

  const { opened, closeDialog, openDialog } = useDialog(false);

  useEffect(() => {
    const getAddressByCep = async (cep: string) => {
      const response = await services.viacep.getAddress(cep.replace(/\D/g, ''));
      setValue('street', response.street);
      setValue('neighborhood', response.neighborhood);
      setValue('city', response.city);
      setValue('state', response.state);
      if (response.error) {
        setError('cep', { message: 'Insira um cep válido' });
      } else {
        clearErrors('cep');
      }
    };

    if (watchCep && !watchCep?.includes('_')) {
      getAddressByCep(watchCep);
    }
  }, [watchCep]);

  const getUrlSignIn = () => {
    if (router.query.redirect)
      return `/sign-in?redirect=${encodeURIComponent(
        router.query.redirect as string,
      )}`;
    return '/sign-in';
  };

  return (
    <Box onSubmit={handleSubmit(onSubmit)} as="form">
      <Typography fontFamily="headline" fontSize={24} fontWeight="bold">
        Dados Pessoais
      </Typography>
      <Box marginTop={{ default: 6, lg: 7 }} marginBottom={12}>
        <Box marginBottom={5}>
          <Controller
            name="full_name"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Textfield
                label="Nome completo"
                placeholder="Nome e sobrenome"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error?.message}
              />
            )}
            rules={{ required: 'Nome é obrigatório' }}
          />
        </Box>
        <Box
          display="flex"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
          marginBottom={5}
        >
          <Box
            paddingRight={{ default: 0, lg: 5 }}
            marginBottom={{ default: 5, lg: 0 }}
            flex={{ default: '1 0 100%', lg: '1 0 50%' }}
          >
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="E-mail"
                  placeholder="nome@email.com"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                  type="email"
                />
              )}
              rules={{
                required: 'E-mail é obrigatório',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'E-mail inválido',
                },
              }}
            />
          </Box>
          <Box
            paddingLeft={{ default: 0, lg: 5 }}
            flex={{ default: '1 0 100%', lg: '1 0 50%' }}
          >
            <Controller
              name="birth_date"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <MaskInput
                  placeholder="__/__/____"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  label="Data de nascimento"
                  mask="99/99/9999"
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Data de nascimento é obrigatória',
                pattern: {
                  value:
                    /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/,
                  message: 'Data de nascimento inválida',
                },
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
          marginBottom={5}
        >
          <Box
            paddingRight={{ default: 0, lg: 5 }}
            marginBottom={{ default: 5, lg: 0 }}
            flex={{ default: '1 0 100%', lg: '1 0 50%' }}
          >
            <Controller
              name="cellphone"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <MaskInput
                  placeholder="(__)_____-____"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  label="Telefone"
                  mask={'(99) 99999-9999'}
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Número telefone é obrigatório',
                pattern: {
                  value: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
                  message: 'Número de telefone inválido',
                },
              }}
            />
          </Box>
          <Box
            paddingLeft={{ default: 0, lg: 5 }}
            flex={{ default: '1 0 100%', lg: '1 0 50%' }}
          >
            <Controller
              name="cpf"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <MaskInput
                  placeholder="000.000.000-00"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  label="CPF"
                  mask="999.999.999-99"
                  helperText={error?.message}
                  readOnly={isEditing}
                />
              )}
              rules={{
                required: 'CPF é obrigatório',
                ...(isEditing
                  ? {}
                  : {
                      pattern: {
                        value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                        message: 'CPF inválido',
                      },
                    }),
              }}
            />
          </Box>
        </Box>
        {!isEditing && (
          <Box display="flex" flexWrap={{ default: 'wrap', lg: 'nowrap' }}>
            <Box
              paddingRight={{ default: 0, lg: 5 }}
              marginBottom={{ default: 5, lg: 0 }}
              flex={{ default: '1 0 100%', lg: '1 0 50%' }}
            >
              <Controller
                name="password"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <Textfield
                    label="Senha"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error?.message}
                    type="password"
                  />
                )}
                rules={{
                  required: 'Senha é obrigatória',
                  minLength: {
                    value: 6,
                    message: 'A senha deve ter no mínimo 6 caracteres',
                  },
                }}
              />
            </Box>
            <Box
              paddingLeft={{ default: 0, lg: 5 }}
              flex={{ default: '1 0 100%', lg: '1 0 50%' }}
            >
              <Controller
                name="password_confirmation"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <Textfield
                    label="Confirmar senha"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error?.message}
                    type="password"
                  />
                )}
                rules={{
                  required: 'Confirme a senha',
                  minLength: {
                    value: 6,
                    message: 'A senha deve ter no mínimo 6 caracteres',
                  },
                  validate: {
                    matchesPreviousPassword: value => {
                      const { password } = getValues();
                      return value === password || 'As senhas devem ser iguais';
                    },
                  },
                }}
              />
            </Box>
          </Box>
        )}
      </Box>
      <Typography fontFamily="headline" fontSize={24} fontWeight="bold">
        Endereço
      </Typography>
      <Box marginTop={{ default: 6, lg: 7 }}>
        <Box maxWidth={{ default: undefined, lg: 170 }} marginBottom={5}>
          <Controller
            name="cep"
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <MaskInput
                placeholder="__.___-___"
                value={value}
                onChange={onChange}
                error={!!error}
                label="CEP"
                mask="99.999-999"
                helperText={error?.message}
              />
            )}
            rules={{
              required: 'CEP é obrigatório',
              pattern: {
                value: /^\d{2}.\d{3}\-\d{3}$/,
                message: 'CEP inválido',
              },
            }}
          />
        </Box>
        <Box
          display="flex"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
          marginBottom={5}
        >
          <Box
            flex={{ default: '1 0 100%', lg: '1 0 50%' }}
            marginBottom={{ default: 5, lg: 0 }}
            paddingRight={{ default: 0, lg: 5 }}
          >
            <Controller
              name="street"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="Rua"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Rua é obrigatória',
              }}
            />
          </Box>
          <Box
            flex={{ default: '1 0 100%', lg: '1 0 25%' }}
            marginBottom={{ default: 5, lg: 0 }}
            paddingLeft={{ default: 0, lg: 5 }}
            paddingRight={{ default: 0, lg: 5 }}
          >
            <Controller
              name="house_number"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="Número"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Número é obrigatório',
              }}
            />
          </Box>
          <Box
            flex={{ default: '1 0 100%', lg: '1 0 25%' }}
            paddingLeft={{ default: 0, lg: 5 }}
          >
            <Controller
              name="appartament_number"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="Complemento"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
          marginBottom={5}
        >
          <Box
            flex={{ default: '1 0 100%', lg: '0 0 75%' }}
            paddingRight={{ default: 0, lg: 5 }}
          >
            <Controller
              name="neighborhood"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="Bairro"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Bairro é obrigatório',
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
          marginBottom={{ default: 6, lg: 5 }}
        >
          <Box
            flex={{ default: '1 0 100%', lg: '1 0 75%' }}
            marginBottom={{ default: 5, lg: 0 }}
            paddingRight={{ default: 0, lg: 5 }}
          >
            <Controller
              name="city"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="Cidade"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Cidade é obrigatória',
              }}
            />
          </Box>
          <Box
            flex={{ default: '1 0 100%', lg: '1 0 25%' }}
            paddingLeft={{ default: 0, lg: 5 }}
          >
            <Controller
              name="state"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="Estado"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Estado é obrigatória',
              }}
            />
          </Box>
        </Box>
        {!isEditing && (
          <Box display="flex" flexWrap={{ default: 'wrap', lg: 'nowrap' }}>
            <Box
              flex={{ default: '1 0', lg: '0 0 75%' }}
              paddingRight={{ default: 0, lg: 5 }}
            >
              <Controller
                name="checked"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    label={
                      <Typography variant="regular" style={{ lineHeight: '20px' }}>
                        Declaro que li e concordo com as{' '}
                        <StyledLink typography="regular" onClick={openDialog}>
                          Condições gerais de uso da plataforma Alpha Trading e o
                          Código de Ética e Conduta
                        </StyledLink>
                      </Typography>
                    }
                    checked={value}
                    onChange={onChange}
                  />
                )}
              />
            </Box>
          </Box>
        )}
      </Box>

      <Box
        display="flex"
        alignItems="center"
        marginTop={{ default: 6, lg: 11 }}
        flexWrap={{ default: 'wrap', lg: 'nowrap' }}
      >
        <Box flex={{ default: '1 0 100%', lg: 'initial' }}>
          <Button
            type="submit"
            width={{ default: '100%', lg: 'auto' }}
            loading={isLoadingSave}
            disabled={!isEditing && !watchChecked}
          >
            {isEditing ? 'SALVAR' : 'CADASTRAR'}
          </Button>
        </Box>
        {!isEditing && (
          <Box
            marginLeft={{ default: 0, md: 9 }}
            marginTop={{ default: 6, md: 0 }}
            flex={{ default: '1 0 100%', lg: 'initial' }}
          >
            <Typography
              variant="regular"
              textAlign={{ default: 'center', lg: 'initial' }}
            >
              Você já possui cadastro?{' '}
              <Box as="span" display={{ default: 'none', md: 'inline' }}>
                <Typography as="span" variant="regular">
                  Faça seu{' '}
                </Typography>
              </Box>
              <StyledLink typography="regular" href={getUrlSignIn()}>
                Login
              </StyledLink>
            </Typography>
          </Box>
        )}
      </Box>
      <ConditionsDialog opened={opened} closeDialog={closeDialog} />
    </Box>
  );
};

export default ProfileForm;
