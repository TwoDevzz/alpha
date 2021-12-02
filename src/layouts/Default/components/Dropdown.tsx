import Link from 'next/link';
import styled from 'styled-components';

import Box from '@components/Box';
import Icon, { IconNames } from '@components/Icon';
import Typography from '@components/Typography';

export interface DropdownItem {
  cart_icon_bg_color: string;
  cart_icon: IconNames;
  title: string;
  anchor: string;
}

const DropDownItemStyled = styled(Box)`
  transition: background-color 0.2s ease-in;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral['50']};
  }
`;

interface DropdownItemProps {
  item: DropdownItem;
}

const DropdownItem = ({ item }: DropdownItemProps) => (
  <Link href={item.anchor}>
    <DropDownItemStyled
      paddingY={5}
      paddingX={6}
      display="flex"
      alignItems="center"
    >
      <Box
        width={32}
        height={32}
        marginRight={5}
        borderRadius="50%"
        backgroundColor={item.cart_icon_bg_color ?? 'brand.orange'}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon fill="neutral.white" size={20} name={item.cart_icon} />
      </Box>
      <Typography fontSize="s">{item.title}</Typography>
    </DropDownItemStyled>
  </Link>
);

interface DropdownStyledProps {
  expanded: boolean;
}

const DropdownStyled = styled(Box)<DropdownStyledProps>`
  box-shadow: 0 20px 28px rgba(0, 0, 0, 0.16);
  transition: all 0.19s ease-in;
  height: 0;
  opacity: 1;
  overflow: hidden;
  transform: translateY(5px) scale(0.5);
  border-radius: 8px;

  ${({ expanded }) =>
    expanded &&
    ` 
      height: fit-content;
      opacity: 1;
      transform: translateY(0) scale(1);
  `}
`;

export interface Props {
  expanded: boolean;
  onHide: () => void;
  items: DropdownItem[];
}

export default function Dropdown({ expanded, onHide, items }: Props) {
  return (
    <Box
      minWidth={242}
      marginTop={expanded ? 0 : 10}
      right={0}
      top={0}
      position="absolute"
      zIndex={9999}
      onMouseLeave={onHide}
    >
      <DropdownStyled
        marginTop={7}
        minWidth={242}
        backgroundColor="neutral.white"
        expanded={expanded}
      >
        {items.map((item, index) => (
          <DropdownItem key={index} item={item} />
        ))}
      </DropdownStyled>
    </Box>
  );
}
