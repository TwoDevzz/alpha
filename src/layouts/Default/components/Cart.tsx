import Box from '@components/Box';
import Icon from '@components/Icon';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

export interface Props {
  color: string;
  itemsLenght: number;
  showBorder: boolean;
}

export default function Cart({ color, itemsLenght, showBorder }: Props) {
  return (
    <Box
      marginTop={2}
      marginLeft={{ default: 0, lg: 9 }}
      display="flex"
      alignItems="center"
      position="relative"
      width="20px"
      height="20px"
    >
      <StyledLink href="/cart">
        <Icon size="m" name="Cart" fill={color} />
        <Box
          width={22}
          height={22}
          borderRadius="50%"
          backgroundColor="other.positive"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          left="8px"
          top="-15px"
          border="2px solid"
          borderColor={showBorder ? 'neutral.white' : 'other.positive'}
        >
          <Typography fontSize={12} color="neutral.white">
            {itemsLenght}
          </Typography>
        </Box>
      </StyledLink>
    </Box>
  );
}
