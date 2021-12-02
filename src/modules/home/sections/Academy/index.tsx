import { useState } from 'react';
import { useQuery } from 'react-query';

import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Button from '@components/Button';
import { useDialog } from '@components/Dialog';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import Product, { ProductType } from '@models/Product';

import LeadDialog from '@home/components/LeadDialog';

import services from '@services';

import { Thumbnail } from './styles';

export default function Academy() {
  const { opened, closeDialog, openDialog } = useDialog(false);
  const { data } = useQuery('products', services.product.find);
  const [popupProduct, setPopupProduct] = useState<Product>();

  return (
    <Box
      id="academy"
      backgroundColor="neutral.50"
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      minHeight="100%"
      paddingX={DEFAULT_PADDING_X}
      paddingY={{ default: 10, lg: 17 }}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginX="auto"
      >
        <Box
          minWidth={48}
          minHeight={48}
          borderRadius={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginBottom={6}
          background="conic-gradient(from 180deg at 50% 50%, #26ADD8 0deg, #4942FF 291.65deg, #26ADD8 360deg)"
        >
          <Icon size="l" name="Academy" fill="neutral.white" />
        </Box>
        <Typography
          fontSize={{ default: 'xl', lg: 'h2' }}
          fontWeight="bold"
          color="neutral.900"
        >
          Alpha Academy
        </Typography>
        <Box marginTop={{ default: 6, lg: 5 }} maxWidth={610}>
          <Typography
            fontSize="s"
            fontWeight="regular"
            color="neutral.900"
            textAlign="center"
          >
            A Alpha Academy, é uma plataforma educacional 100% proprietária, e foi
            criada para trazer aos investidores os melhores cursos e conteúdo
            educacional do mercado financeiro.
          </Typography>
        </Box>
        <Box
          marginTop={{ default: 10, lg: 16 }}
          width="100%"
          display="flex"
          overflowX="auto"
          justifyContent={{ default: 'initial', lg: 'center' }}
          paddingBottom={6}
        >
          {data?.products
            .filter(
              product => product.type === ProductType.Course && product.is_active,
            )
            .slice(0, 3)
            .map(product => (
              <Box
                key={product.id}
                display="flex"
                flexDirection="column"
                backgroundColor={
                  product.is_active_sell ? 'neutral.white' : 'neutral.100'
                }
                borderRadius={5}
                overflow="hidden"
                width={{ default: 297, lg: 370 }}
                minWidth={{ default: 297, lg: 370 }}
                marginX={{ default: 3, lg: 5 }}
                position="relative"
              >
                {!product.is_active_sell && (
                  <Box
                    paddingY={2}
                    paddingX={3}
                    backgroundColor="other.yellow"
                    borderRadius={2}
                    position="absolute"
                    top={6}
                    right={6}
                    zIndex={10}
                  >
                    <Typography
                      fontSize="xs"
                      fontWeight="regular"
                      color="neutral.900"
                    >
                      Em breve
                    </Typography>
                  </Box>
                )}
                <Box
                  backgroundColor="neutral.700"
                  borderTopLeftRadius={5}
                  borderTopRightRadius={5}
                >
                  <Thumbnail
                    thumbnail={product.thumbnail}
                    width={{ default: 297, lg: 370 }}
                    height={144}
                  />
                </Box>
                <Box
                  padding={{ default: 5, lg: 7 }}
                  display="flex"
                  flex={1}
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box flex={1} maxHeight={290}>
                    <Typography
                      fontSize={{ default: 'm', lg: 24 }}
                      fontWeight="bold"
                      color="neutral.900"
                    >
                      {product.title}
                    </Typography>
                    <Box marginY={3}>
                      <Typography
                        fontSize="s"
                        fontWeight="regular"
                        color="neutral.300"
                      >
                        <div
                          dangerouslySetInnerHTML={{ __html: product.description }}
                          style={{
                            height: '200px',
                            overflow: 'hidden',
                            marginBottom: 20,
                          }}
                        />
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginBottom={6}
                    >
                      {product.partner && (
                        <Box display="flex" alignItems="center">
                          <Avatar
                            variant="small"
                            src={product.partner.avatar ?? ''}
                          />
                          <Box marginLeft={5} maxWidth={150}>
                            <Typography
                              fontSize={12}
                              fontWeight="regular"
                              color="neutral.300"
                            >
                              MINISTRADO POR
                            </Typography>
                            <Typography
                              fontSize="s"
                              fontWeight="regular"
                              color="neutral.700"
                            >
                              {product.partner.full_name}
                            </Typography>
                          </Box>
                        </Box>
                      )}
                      <Box>
                        <Typography
                          fontSize={12}
                          fontWeight="regular"
                          color="neutral.300"
                        >
                          DURAÇÃO
                        </Typography>
                        <Typography
                          fontSize="s"
                          fontWeight="regular"
                          color="neutral.700"
                        >
                          {!product.is_active
                            ? ' Em breve'
                            : `${product.duration / 60} horas`}
                        </Typography>
                      </Box>
                    </Box>
                    {product.is_active_sell ? (
                      <Button href={`/product/${product.slug}`} variant="primary">
                        SAIBA MAIS
                      </Button>
                    ) : (
                      <Button
                        variant="light"
                        onClick={() => {
                          openDialog();
                          setPopupProduct(product);
                        }}
                        style={{ border: 'none' }}
                      >
                        TENHO INTERESSE
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
      <LeadDialog
        product={popupProduct}
        opened={opened}
        closeDialog={closeDialog}
      />
    </Box>
  );
}
