import Box from '@components/Box';
import Button from '@components/Button';
import Chip from '@components/Chip';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import ProgressBar from '@components/ProgressBar';
import Typography from '@components/Typography';

import Product from '@models/Product';

import { formatPrice } from '@utils/currency';

interface Props {
  is_special?: boolean;
  plan?: Product;
  percentage?: number;
  from?: boolean;
}

const CardPlan = ({ is_special, plan, percentage, from }: Props) => {
  if (!plan) {
    return null;
  }

  let [price, cents] = formatPrice(plan.price / (plan?.max_installments ?? 1)).split(',');
  price = price.replace('R$', '').trim();

  return (
    <Box
      backgroundColor="neutral.white"
      borderRadius={3}
      border={is_special ? '2px solid' : 'none'}
      borderColor="green.500"
      boxShadow={is_special ? '0px 4px 64px rgba(76, 188, 39, 0.4)' : 'none'}
      marginTop={{ default: 56, lg: 112 }}
      maxWidth={{ default: '100%', lg: is_special ? 452 : 370 }}
      flex={{ default: '0 0 100%', lg: is_special ? 2 : 1.6 }}
      width="100%"
      zIndex={is_special ? 1 : 0}
      position={'relative'}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        right: 30
      }}>
        {plan.id === '34aa3cba-309f-4bfd-8772-d226ec748ac1' ? (
          <img src={'imgs/20-off.png'}></img> 
        ) : plan.id === '419647f3-aa86-4872-a0ff-056652eeddf7' ? (
          <img src={'imgs/10-off.png'}></img>
        ) : null}
      </div>
      <Box
        height={{ default: 470, lg: 430 }}
        backgroundColor={is_special ? 'rgba(95, 210, 66, 0.2)' : 'neutral.50'}
        borderTopLeftRadius={3}
        borderTopRightRadius={3}
        paddingTop={{ default: 6, lg: 9 }}
        paddingX={{ default: 6, lg: is_special ? 8 : 7 }}
        paddingBottom={{ default: 6, lg: 7 }}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box display="flex" flexDirection="column" justifyContent="space-between">
          <Box display="flex" marginBottom={{ default: 12, lg: 9 }}>
            <Chip variant={is_special ? 'green' : 'primary'}>
              <Typography color="neutral.900" fontSize={12}>
                {is_special ? 'MELHOR OPÇÃO' : 'Oferta especial'}
              </Typography>
            </Chip>
          </Box>
          <Box>
            <Box marginBottom={3}>
              <Typography fontWeight="bold" fontSize={is_special ? 'h2' : 'xl'}>
                {plan?.title}
              </Typography>
            </Box>
            <Box>
              <Typography fontSize="s">{plan?.description}</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems={is_special ? 'center' : 'flex-start'}
        >
          {from && (
            <Box>
              <Typography fontSize="xs" color="neutral.700">
                De{' '}
                <Typography as="span" fontSize="xs" color="neutral.700">
                  <b style={{ textDecoration: 'line-through' }}>R$369,00</b>/ mês
                </Typography>
              </Typography>
            </Box>
          )}
          <Box display="flex" alignItems="baseline">
            <Box>
              <Typography fontSize="xs" color="neutral.700">
                {from ? 'Por R$' : 'R$'}&nbsp;
              </Typography>
            </Box>
            <Typography
              fontFamily="headline"
              fontSize={70}
              color="neutral.900"
              fontWeight="bold"
            >{price}</Typography>
            <Box>
              <Typography fontSize="xs" color="neutral.700">
                ,{cents}/ mês
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        paddingTop={{ default: 6, lg: 9 }}
        paddingX={{ default: 6, lg: 9 }}
        paddingBottom={{ default: 6, lg: 8 }}
      >
        <Box marginBottom={is_special ? 11 : 8}>
          <Box display="flex" marginBottom={3}>
            <Box flex="1">
              <Typography color="neutral.900" fontSize={12} fontWeight="500">
                Vagas disponíveis
              </Typography>
            </Box>
            <Typography color="neutral.900" fontSize={12} fontWeight="500">
              {`${percentage}% / 100%`}
            </Typography>
          </Box>
          <ProgressBar value={percentage || 0} />
        </Box>
        <Typography color="neutral.900" fontWeight="bold" fontSize="xs">
          Acesso a todos os nossos produtos:
        </Typography>
        <Box marginTop={6}>
          <Box display="flex" alignItems="center">
            <Box
              minWidth={32}
              minHeight={32}
              borderRadius={5}
              backgroundColor="brand.orange"
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginRight={4}
            >
              <Icon size="m" name="People" fill="neutral.white" />
            </Box>
            <Typography color="neutral.700" fontSize="s">
              Alpha Community
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginTop={5}>
            <Box
              minWidth={32}
              minHeight={32}
              borderRadius={5}
              backgroundColor="brand.red"
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginRight={4}
            >
              <Icon size="m" name="Live" fill="neutral.white" />
            </Box>
            <Typography color="neutral.700" fontSize="s">
              Sala ao vivo
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginTop={5}>
            <Box
              minWidth={32}
              minHeight={32}
              borderRadius={5}
              backgroundColor="brand.blue"
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginRight={4}
            >
              <Icon size="m" name="OfflineBolt" fill="neutral.white" />
            </Box>
            <Typography color="neutral.700" fontSize="s">
              Lighter
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginTop={5}>
            <Box
              minWidth={32}
              minHeight={32}
              borderRadius={5}
              backgroundColor="other.green"
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginRight={4}
            >
              <Icon size="m" name="Gauge" fill="neutral.white" />
            </Box>
            <Typography color="neutral.700" fontSize="s">
              Alpha Strategy
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" marginTop={5}>
            <Box
              minWidth={32}
              minHeight={32}
              borderRadius={5}
              display="flex"
              alignItems="center"
              justifyContent="center"
              marginRight={4}
              background="conic-gradient(from 180deg at 50% 50%, #FF8A00 0deg, #4942FF 291.65deg, #26ADD8 360deg)"
            >
              <Icon size="m" name="Mic" fill="neutral.white" />
            </Box>
            <Typography color="neutral.700" fontSize="s">
              AlphaCast
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Divider />
      </Box>
      <Box
        paddingTop={{ default: 6, lg: 9 }}
        paddingX={{ default: 6, lg: 9 }}
        paddingBottom={{ default: 6, lg: 8 }}
      >
        <Box display="flex" justifyContent="center">
          <Button
            variant="positive"
            size="large"
            href={`/cart?p=${plan?.slug}`}
            width="100%"
          >
            QUERO ME INSCREVER
          </Button>
        </Box>
        <Box
          marginTop={6}
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minWidth={16}
            minHeight={16}
            backgroundColor="other.yellow"
            borderRadius={5}
          >
            <Icon size="m" name="Clock" fill="brand.orange" />
          </Box>
          <Box marginLeft={3}>
            <Typography fontWeight="bold" fontSize="12px" color="brand.orange">
              Oferta por tempo limitado
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardPlan;
