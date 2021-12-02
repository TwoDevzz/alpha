import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import Box from '@components/Box';
import Button from '@components/Button';
import Dialog from '@components/Dialog';
import Textfield from '@components/Textfield';
import Typography from '@components/Typography';

import services from '@services';
import { useFeedback } from '@hooks/useFeedback';
import Product from '@models/Product';
import MaskInput from '@components/MaskInput';

export interface Props {
  opened: boolean;
  closeDialog: () => void;
  product?: Product;
}

interface FormValues {
  name: string;
  email: string;
  cellphone: string;
}

export default function LeadDialog({ opened, closeDialog, product }: Props) {
  const { showErrorMessage, showSuccessMessage } = useFeedback();

  const mutationCreateLead = useMutation<FormValues, unknown, FormValues>(
    ({ email, name, cellphone }) => services.lead.createLead({ email, name, cellphone, product_id: product?.id || '' }),
    {
      onSettled: () => {
        showSuccessMessage('Obrigado pelo interesse! Em breve entraremos em contato.');
        closeDialog();
        reset({ email: '', name: '', cellphone: '' });
      }
    },
  );

  const {
    reset,
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      name: '',
      cellphone: ''
    },
  });

  const onSubmit = (data: FormValues) => {
    mutationCreateLead.mutate(data);
  };

  return (
    <Dialog maxWidth={970} open={opened} onClose={closeDialog}>
      <Box marginBottom={6}>
        <Typography variant="h3" color="neutral.900">
          Tenho interesse
        </Typography>
      </Box>
      <Box maxWidth={626}>
        <Typography fontSize={{ lg: 18, default: 's' }} color="neutral.900">
          <b>{product?.title}</b> será lançado em breve, inscreva-se em
          nossa lista e seja avisado com antecedência.
        </Typography>
      </Box>
      <Box width="100%" marginTop={{ default: 7, lg: 56 }}>
        <Box
          display="flex"
          flexWrap={{ default: 'wrap', lg: 'nowrap' }}
          alignItems={{ default: 'center', lg: 'flex-end' }}
        >
          <Box
            marginRight={{ default: 0, lg: 3 }}
            flex={{ default: '100%', lg: 3 }}
          >
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="Nome"
                  placeholder="Digite seu nome"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: 'Nome é obrigatorio',
              }}
            />
          </Box>
          <Box
            marginRight={{ default: 0, lg: 3 }}
            marginTop={{ default: 5, lg: 0 }}
            flex={{ default: '100%', lg: 4 }}
          >
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textfield
                  label="E-mail"
                  placeholder="Digite seu e-mail"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{
                required: 'E-mail é obrigatorio',
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'E-mail invalido',
                },
              }}
            />
          </Box>
          <Box
            marginRight={{ default: 0, lg: 3 }}
            marginTop={{ default: 5, lg: 0 }}
            flex={{ default: '100%', lg: 4 }}
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
                  label="Celular"
                  mask={'(99) 99999-9999'}
                  helperText={error?.message}
                />
              )}
              rules={{
                required: 'Celular é obrigatório',
                pattern: {
                  value: /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/,
                  message: 'Celular inválido',
                },
              }}
            />
          </Box>
          <Box
            marginTop={{ default: 6, lg: 0 }}
            minWidth={{ default: '100%', lg: 'max-content' }}
            maxWidth={{ default: '100%', lg: 'max-content' }}
            flex={{ default: '100%', lg: 1 }}
          >
            <Button
              size="medium"
              onClick={handleSubmit(onSubmit)}
              loading={mutationCreateLead.isLoading}
              width={{ default: '100%', lg: 'initial' }}
            >
              ME INSCREVER
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
