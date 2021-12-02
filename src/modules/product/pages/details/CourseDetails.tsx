import { useRouter } from 'next/router';
import { useMemo } from 'react';

import Box from '@components/Box';
import Button from '@components/Button';
import { useDialog } from '@components/Dialog';
import Divider from '@components/Divider';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

import { useCart } from '@stores/cart/useCart';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import { Course } from '@models/Product';

import AdhesionDialog from '@product/components/CourseAdhesionDialog';
import CourseLeftBox from '@product/components/CourseLeftBox';
import CourseModule from '@product/components/CourseModule';
import CourseRightBox from '@product/components/CourseRightBox';

import { formatPrice } from '@utils/currency';

export interface Props {
  course: Course;
}

export default function Details({ course }: Props) {
  const { opened, toggleDialog } = useDialog(false);
  const router = useRouter();

  const add = useCart(state => state.add);
  const cart = useCart(state => state.cart);

  const cartProduct = useMemo(() => {
    const match = cart.products.find(product => product.id === course.id);
    return match;
  }, [course, cart]);

  return (
    <Box
      maxWidth={1186}
      marginX="auto"
      flexWrap={{ default: 'wrap', lg: 'nowrap' }}
      flexDirection={{ lg: 'row', default: 'column-reverse' }}
      display="flex"
    >
      <Box
        position="relative"
        left={{ lg: -6, default: 0 }}
        maxWidth={{ lg: '100%', default: 518 }}
        marginRight={{ lg: 14, default: 0 }}
        paddingY={{ lg: 13, default: 10 }}
        paddingLeft={DEFAULT_PADDING_X}
        marginX="auto"
      >
        <CourseLeftBox marginBottom={{ default: 7, lg: 8 }}>
          <Box dangerouslySetInnerHTML={{ __html: course.sections || '' }} />
        </CourseLeftBox>
        {course.modules
          .filter(({ is_active }) => is_active)
          .map((module, iModule) => (
            <Box key={module.id} marginBottom={6}>
              <CourseModule
                name={`Módulo ${iModule + 1} - ${module.name}`}
                lessons={module.lessons
                  .filter(({ is_active }) => is_active)
                  .map((lesson, iLesson) => `Aula ${iLesson + 1} - ${lesson.name}`)}
              />
            </Box>
          ))}
      </Box>
      <Box marginTop={10} width="100%" display={{ lg: 'none', default: 'block' }}>
        <Divider />
      </Box>
      <Box
        minWidth={{ lg: 518, default: '100%' }}
        borderLeft="1px solid"
        borderLeftColor="neutral.200"
      >
        <Box paddingBottom={{ lg: 13 }}>
          <Box
            minHeight={300}
            paddingTop={{ lg: 13, default: 10 }}
            marginBottom={{ lg: 5, default: 0 }}
            background="linear-gradient(180deg, #F0F0FF 0%, rgba(255, 255, 255, 0) 100%)"
          >
            <Box
              paddingX={{ default: DEFAULT_PADDING_X.default, lg: 0 }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box marginBottom={7}>
                <Typography fontSize="xl" fontWeight="bold" fontFamily="headline">
                  Adquira agora
                </Typography>
              </Box>

              <Box marginBottom={5} display="flex" alignItems="center">
                <Box>
                  <Typography fontSize="xs" color="brand.default">
                    {course.max_installments}x de
                  </Typography>
                </Box>
                <Box marginX={4}>
                  <Typography fontSize={24} fontWeight="bold" color="brand.default">
                    {formatPrice(course.price / (course.max_installments || 1))}
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize="xs" color="brand.default">
                    no cartão
                  </Typography>
                </Box>
              </Box>
              <Box marginBottom={8} display="flex" alignItems="flex-end">
                <Box marginBottom="5px">
                  <Typography fontSize="xs">ou</Typography>
                </Box>
                <Box marginX={4}>
                  <Typography fontSize={{ lg: 18 }}>
                    {formatPrice(course.price)}
                  </Typography>
                </Box>
                <Box marginBottom="5px">
                  <Typography fontSize="xs">à vista</Typography>
                </Box>
              </Box>
              <Box width="100%" maxWidth={390} marginBottom={5}>
                <Button
                  onClick={() => {
                    add(course);
                    router.push('/cart');
                  }}
                  width="100%"
                  disabled={!!cartProduct}
                >
                  {cartProduct ? 'Curso adicionado ao carrinho' : 'EU QUERO'}
                </Button>
              </Box>
              <Box marginBottom={13}>
                <StyledLink onClick={toggleDialog}>
                  Termos de adesão do serviço
                </StyledLink>
                <AdhesionDialog open={opened} onClose={toggleDialog} />
              </Box>
            </Box>
          </Box>
          <Box paddingX={DEFAULT_PADDING_X} maxWidth={518} marginX="auto">
            <CourseRightBox>
              <Box dangerouslySetInnerHTML={{ __html: course.details || '' }} />
            </CourseRightBox>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
