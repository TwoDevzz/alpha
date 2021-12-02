import styled from 'styled-components';
import { variant } from 'styled-system';

import Box from '@components/Box';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

const variants = {
  success: {
    backgroundColor: 'other.positive',
  },
};

const variantIcons = {
  success: <Icon size="xl" name="Check" fill="neutral.white" />,
};

type Variants = typeof variants;

export interface Props {
  variant?: keyof Variants;
  message: string;
}

interface ContainerProps {
  variant?: keyof Variants;
}

const IconContainer = styled(Box)<ContainerProps>`
  ${variant({
    variants,
  })}
`;

export default function Alert({ variant = 'success', message }: Props) {
  return (
    <Box
      paddingY={{ default: 7, lg: 6 }}
      paddingX={{ default: 6, lg: 7 }}
      display="flex"
      flexWrap={{ default: 'wrap', lg: 'nowrap' }}
      justifyContent={{ default: 'center', lg: 'flex-start' }}
      alignItems="center"
      borderRadius={2}
      backgroundColor="neutral.50"
    >
      <IconContainer
        minWidth={70}
        minHeight={70}
        marginRight={5}
        marginBottom={{ default: 4, lg: 0 }}
        borderRadius="50%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        variant={variant}
      >
        {variantIcons[variant]}
      </IconContainer>
      <Typography
        fontSize="s"
        fontWeight="bold"
        textAlign={{ default: 'center', lg: 'left' }}
      >
        {message}
      </Typography>
    </Box>
  );
}
