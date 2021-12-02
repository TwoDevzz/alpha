import Box from '@components/Box';
import Typography from '@components/Typography';

import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import { Plan } from '@models/Product';

export interface Props {
  plan: Plan;
}

export default function Header({ plan }: Props) {
  return (
    <Box paddingY={{ default: 8, lg: 13 }} backgroundColor="brand.default">
      <Box
        display="flex"
        justifyContent={{ default: 'center', lg: 'space-between' }}
        maxWidth={1170}
        paddingX={DEFAULT_PADDING_X}
        flexWrap={{ default: 'wrap', lg: 'nowrap' }}
        marginX="auto"
      >
        <Box width="100%" maxWidth={570} marginRight={{ default: 0, lg: 5 }}>
          <Box marginBottom={6}>
            <Typography
              color="neutral.white"
              fontWeight="bold"
              fontSize={{ default: 'h2', lg: 56 }}
              fontFamily="headline"
              textAlign={{ default: 'center', lg: 'left' }}
            >
              {plan.title}
            </Typography>
          </Box>
          <Box marginBottom={9}>
            <Typography
              fontSize="m"
              color="neutral.white"
              textAlign={{ default: 'center', lg: 'left' }}
            >
              {plan.description}
            </Typography>
          </Box>
        </Box>
        <Box
          width="100%"
          maxWidth={480}
          display={{ default: 'flex', lg: 'none' }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Box marginBottom={1}>
              <Typography
                fontSize={12}
                color="neutral.200"
                textTransform="uppercase"
              >
                Duração:
              </Typography>
            </Box>
            <Typography fontSize={18} color="neutral.white">
              {plan.duration} dias
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
