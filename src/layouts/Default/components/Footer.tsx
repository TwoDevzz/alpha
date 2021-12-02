import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';

import Box from '@components/Box';
import Button from '@components/Button';
import Icon from '@components/Icon';
import StyledLink from '@components/Link';
import Logo from '@components/Logo';
import Textfield from '@components/Textfield';
import Typography from '@components/Typography';

import { useFeedback } from '@hooks/useFeedback';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import { ProductType } from '@models/Product';

import colors from '@themes/colors';

import services from '@services';

interface FormValues {
  email: string;
}

interface FooterProduct {
  title: string;
  anchor: string;
}

const Footer = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {},
  });
  const { showErrorMessage, showSuccessMessage } = useFeedback();

  const mutationCreateNewsletter = useMutation<FormValues, unknown, FormValues>(
    form => services.newsletter.createNewsletter(form),
    {
      onSuccess: () => {
        reset({ email: '' });
        showSuccessMessage(
          'Obrigado pelo interesse! Você foi adicionado em nossa lista de Novidades.',
        );
      },
    },
  );

  const onSubmit = (data: FormValues) => {
    mutationCreateNewsletter.mutate(data);
  };

  const footerProducts: FooterProduct[] = [
    {
      title: 'Alpha Community',
      anchor: '/#community',
    },
    {
      title: 'Sala ao vivo',
      anchor: '/#live',
    },
    {
      title: 'Lighter',
      anchor: '/#lighter',
    },
    {
      title: 'Alpha Strategy',
      anchor: '/#strategy',
    },
    {
      title: 'Alpha Academy',
      anchor: '/#academy',
    },
  ];

  return (
    <Box
      as="footer"
      backgroundColor="neutral.900"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingX={DEFAULT_PADDING_X}
      paddingBottom={{ default: 10, lg: 11 }}
      paddingTop={{ default: 10, lg: 13 }}
    >
      <Box
        display="flex"
        flexDirection={{ default: 'column', xl: 'row' }}
        justifyContent="space-between"
        width="100%"
        maxWidth={1192}
        marginBottom={{ default: 10, lg: 13 }}
      >
        <Box
          flex={1}
          marginBottom={9}
          alignSelf={{ default: 'center', lg: 'flex-start' }}
        >
          <Logo width={193} height={26} name="Horizontal" fill="neutral.white" />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection={{ default: 'column', lg: 'row' }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            flexWrap={{ default: 'wrap', lg: 'nowrap' }}
            minWidth={{ default: 0, lg: 640 }}
          >
            <Box
              display="flex"
              flexDirection="column"
              marginRight={{ default: 0, lg: 12 }}
              marginBottom={{ default: 10, lg: 0 }}
              flexShrink={0}
            >
              <Box>
                <Typography color="brand.light" variant="action2">
                  Produtos
                </Typography>
              </Box>
              {footerProducts.map(({ title, anchor }, i) => (
                <Box key={i} marginTop={5}>
                  <StyledLink variant="light" typography="regular" href={anchor}>
                    {title}
                  </StyledLink>
                </Box>
              ))}
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              marginRight={{ default: 0, lg: 12 }}
              marginBottom={{ default: 10, lg: 0 }}
              flexShrink={0}
            >
              <Box>
                <Typography color="brand.light" variant="action2">
                  Alpha Academy
                </Typography>
              </Box>
              <Box marginTop={5}>
                <StyledLink variant="light" typography="regular" href={'/#academy'}>
                  Cursos
                </StyledLink>
              </Box>
            </Box>

            {/* <Box
              display="flex"
              flexDirection="column"
              marginRight={{ default: 0, lg: 12 }}
              marginBottom={{ default: 10, lg: 0 }}
            >
              <Box>
                <Typography color="brand.light" variant="action2">
                  Alpha Academy
                </Typography>
              </Box>
              <Box marginTop={5}>
                <StyledLink variant="light" typography="regular" href="#">
                  Cursos
                </StyledLink>
              </Box>
              <Box marginTop={5}>
                <StyledLink variant="light" typography="regular" href="#">
                  E-books
                </StyledLink>
              </Box>
              <Box marginTop={5}>
                <StyledLink variant="light" typography="regular" href="#">
                  Materiais Grátis
                </StyledLink>
              </Box>
            </Box> */}
            <Box
              display="flex"
              flexDirection="column"
              marginRight={{ default: 0, lg: 12 }}
              marginBottom={{ default: 10, lg: 0 }}
            >
              {/* <Box>
                <Typography color="brand.light" variant="action2">
                  Alpha Trading
                </Typography>
              </Box>
              <Box marginTop={5}>
                <StyledLink variant="light" typography="regular" href="/about-us">
                  Sobre
                </StyledLink>
              </Box>
              <Box marginTop={5}>
                <StyledLink variant="light" typography="regular" href="/contact">
                  Contato
                </StyledLink>
              </Box> */}
              {/* <Box marginTop={5}>
                <StyledLink variant="light" typography="regular" href="#">
                  AlphaCast
                </StyledLink>
              </Box> */}
            </Box>
          </Box>
          <Box width={{ default: '100%', lg: 292 }}>
            <Box>
              <Typography color="brand.light" variant="action2">
                Alpha News
              </Typography>
            </Box>
            <Box width="100%" display="flex" alignItems="center" marginTop={5}>
              <Box marginRight={3}>
                <Textfield
                  InputLabelProps={{
                    style: {
                      color: colors.neutral.white,
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <Button size="small" onClick={handleSubmit(onSubmit)}>
                        Assinar
                      </Button>
                    ),
                  }}
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
                  label="E-mail"
                  placeholder="nome@email.com"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ default: 'column-reverse', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        maxWidth={1192}
      >
        <Box marginTop={{ default: 6, lg: 0 }}>
          <Typography
            color="neutral.400"
            variant="regular"
            textAlign={{ default: 'center', lg: 'left' }}
          >
            {`© ${new Date().getFullYear()} Alpha Trading (39.888.696/0001-70). All rights reserved.`}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent={{ default: 'center', lg: 'flex-end' }}
          alignItems="center"
          width={{ default: '100%', lg: 292 }}
        >
          <Link href="https://www.instagram.com/alphatrading.app/">
            <a target="_blank">
              <Box display="flex" alignItems="center">
                <Icon size="l" name="Instagram" fill="neutral.400" />
              </Box>
            </a>
          </Link>
          <Link href="https://twitter.com/alphatradingApp">
            <a target="_blank">
              <Box display="flex" alignItems="center" marginX={1}>
                <Icon size="l" name="Twitter" fill="neutral.400" />
              </Box>
            </a>
          </Link>
          <Link href="https://www.facebook.com/alphatradingapp/">
            <a target="_blank">
              <Box display="flex" alignItems="center">
                <Icon size="l" name="Facebook" fill="neutral.400" />
              </Box>
            </a>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
