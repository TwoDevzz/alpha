import Link from 'next/link';
import styled from 'styled-components';

import Box from '@components/Box';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

import Product from '@models/Product';

import { GetMyProfileResponse } from '@services/me/types';

import { DropdownItem } from './Dropdown';

interface MenuItemProps {
  item: DropdownItem;
  onCloseMenu?: () => void;
}

const MenuItem = ({ item, onCloseMenu }: MenuItemProps) => (
  <Link href={item.anchor}>
    <Box paddingY={5} display="flex" alignItems="center" onClick={onCloseMenu}>
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
        <Icon fill="neutral.white" size={22} name={item.cart_icon ?? 'Cart'} />
      </Box>
      <Typography fontSize="s">{item.title}</Typography>
    </Box>
  </Link>
);

export interface Props {
  open?: boolean;
  items: DropdownItem[];
  user?: GetMyProfileResponse;
  onCloseMenu?: () => void;
}

const MenuStyled = styled(Box)<Pick<Props, 'open'>>`
  transition: all 0.19s ease-in;
  transform: translateX(-100vw);

  ${({ open }) => open && `transform: translateX(0);`}
`;

const LeaveStyledLink = styled(StyledLink)`
  text-decoration: none;
  font-weight: 500;
`;

export default function Menu({ open, items, user, onCloseMenu }: Props) {
  return (
    <MenuStyled
      open={open}
      display={{ default: 'flex', lg: 'none' }}
      flexDirection="column"
      justifyContent="space-between"
      position="fixed"
      width="100%"
      height="100%"
      maxHeight="calc(100% - 50px)"
      backgroundColor="neutral.white"
      overflowY="auto"
      top={50}
      left={0}
      zIndex={9999}
    >
      <Box paddingY={7} paddingX={5}>
        <Box marginBottom={6}>
          <Box marginBottom={5}>
            <StyledLink variant="secondary" typography="action1" href="#">
              Produtos
            </StyledLink>
          </Box>
          {items.map((item, index) => (
            <MenuItem key={index} item={item} onCloseMenu={onCloseMenu} />
          ))}
        </Box>
      </Box>
      {user ? (
        <Box width="100%">
          <Divider />
          <Box padding={5} onClick={onCloseMenu}>
            <StyledLink variant="secondary" typography="action1" href="/user">
              Meu Perfil
            </StyledLink>
          </Box>
          <Box padding={5} onClick={onCloseMenu}>
            <LeaveStyledLink variant="primary" typography="action1" href="/logout">
              Sair
            </LeaveStyledLink>
          </Box>
        </Box>
      ) : (
        <Box width="100%">
          <Divider />
          <Button
            onClick={onCloseMenu}
            href="/sign-in"
            width="100%"
            size="large"
            variant="secondary"
            square
          >
            Entrar
          </Button>
          <Button
            onClick={onCloseMenu}
            href="/sign-up"
            width="100%"
            size="large"
            variant="primary"
            square
          >
            Faça sua inscrição agora
          </Button>
        </Box>
      )}
    </MenuStyled>
  );
}
