import Link from 'next/link';
import { useMemo, useState } from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';

import Box from '@components/Box';
import Button from '@components/Button';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import StyledLink from '@components/Link';
import Logo from '@components/Logo';

import { useCart } from '@stores/cart/useCart';

import Cart from '@layouts/Default/components/Cart';
import Dropdown, { DropdownItem } from '@layouts/Default/components/Dropdown';
import Menu from '@layouts/Default/components/Menu';
import { DEFAULT_PADDING_X } from '@layouts/Default/constants';

import { GetMyProfileResponse } from '@services/me/types';

const variants = {
  primary: {
    backgroundColor: 'neutral.white',
    color: 'neutral.900',
  },
  secondary: {
    backgroundColor: 'brand.default',
    color: 'neutral.white',
  },
};

export type Variants = typeof variants;

export interface Props {
  variant: keyof Variants;
  user?: GetMyProfileResponse;
}

interface ExpandMoreProps {
  expanded?: boolean;
}

const ExpandMore = styled(Box)<ExpandMoreProps>`
  transition: all 0.2s ease-in-out;

  ${({ expanded }) => expanded && `transform: rotate(180deg);`}
`;

const HeaderStyle = styled(Box)<Props>`
  ${variant({
    variants,
    prop: 'variant',
  })}
`;

const Header = ({ variant, user }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const items: DropdownItem[] = [
    {
      cart_icon_bg_color: '#FFA411',
      cart_icon: 'People',
      title: 'Alpha Community',
      anchor: '/#community',
    },
    {
      cart_icon_bg_color: '#FF4646',
      cart_icon: 'Live',
      title: 'Sala ao vivo',
      anchor: '/#live',
    },
    {
      cart_icon_bg_color: '#26ADD8',
      cart_icon: 'Lighter',
      title: 'Lighter',
      anchor: '/#lighter',
    },
    {
      cart_icon_bg_color: '#4CBC27',
      cart_icon: 'Radar',
      title: 'Alpha Strategy',
      anchor: '/#strategy',
    },
    {
      cart_icon_bg_color: '#FFA411',
      cart_icon: 'Academy',
      title: 'Alpha Academy',
      anchor: '#academy',
    },
  ];

  const cart = useCart(state => state.cart);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const {
    logoColor,
    iconColors,
    linkVariant,
    isSecondary,
    buttonVariant,
    buttonTextColorVariant,
    shevronColors,
  } = useMemo(() => {
    const isSecondary = variant === 'secondary';
    const logoColor: 'neutral.white' | 'brand.default' = isSecondary
      ? 'neutral.white'
      : 'brand.default';
    const iconColors: 'neutral.white' | 'neutral.300' = isSecondary
      ? 'neutral.white'
      : 'neutral.300';
    const linkVariant: 'light' | 'secondary' = isSecondary ? 'light' : 'secondary';
    const buttonVariant: 'secondary' | 'primary' = isSecondary
      ? 'secondary'
      : 'primary';
    const buttonTextColorVariant: 'brand.default' | undefined = isSecondary
      ? 'brand.default'
      : undefined;
    const shevronColors: 'neutral.white' | 'neutral.900' = isSecondary
      ? 'neutral.white'
      : 'neutral.900';

    return {
      isSecondary,
      logoColor,
      iconColors,
      linkVariant,
      buttonVariant,
      buttonTextColorVariant,
      shevronColors,
    };
  }, [variant]);

  return (
    <HeaderStyle
      as="header"
      position="fixed"
      zIndex={999}
      top={0}
      left={0}
      right={0}
      display="flex"
      flexShrink={0}
      justifyContent="space-between"
      alignItems="center"
      height={{
        default: 60,
        lg: 82,
      }}
      paddingX={DEFAULT_PADDING_X}
      variant={variant}
    >
      <Box alignItems="center" display={{ default: 'flex', lg: 'none' }}>
        <Box minWidth={20} height={20} onClick={toggleMenu}>
          {showMenu ? (
            <Icon size="s" fill={iconColors} name="Close" />
          ) : (
            <Icon size="m" fill={iconColors} name="Menu" />
          )}
        </Box>
      </Box>
      <Link href="/">
        <a>
          <Logo width={193} height={26} name="Horizontal" fill={logoColor} />
        </a>
      </Link>
      <Box display="flex" alignItems="center">
        <Box display={{ default: 'none', lg: 'flex' }} alignItems="center">
          <Box marginRight={9} position="relative">
            <Box
              display="flex"
              alignItems="flex-end"
              onClick={toggleDropdown}
              position="relative"
              onMouseEnter={() => {
                if (!showDropdown) {
                  toggleDropdown();
                }
              }}
            >
              <Box marginRight="10px">
                <StyledLink
                  textTransform="uppercase"
                  variant={linkVariant}
                  typography="action2"
                  href="#"
                >
                  Produtos
                </StyledLink>
              </Box>
              <ExpandMore expanded={showDropdown}>
                <Icon size={12} name="ExpandMore" fill={shevronColors} />
              </ExpandMore>
            </Box>
            <Dropdown
              expanded={showDropdown}
              onHide={toggleDropdown}
              items={items}
            />
          </Box>
          <Box height={45} marginRight={9}>
            <Divider variant="vertical" />
          </Box>
          {user ? (
            <>
              <Box marginRight={9}>
                <StyledLink
                  textTransform="uppercase"
                  variant={linkVariant}
                  typography="action2"
                  href="/user"
                >
                  {user.full_name.split(' ')[0]} {user.full_name.split(' ')[1]}
                </StyledLink>
              </Box>
              <Box>
                <StyledLink
                  textTransform="uppercase"
                  variant={linkVariant}
                  typography="action2"
                  href="/logout"
                >
                  Sair
                </StyledLink>
              </Box>
            </>
          ) : (
            <>
              <Box marginRight={9}>
                <StyledLink
                  textTransform="uppercase"
                  variant={linkVariant}
                  typography="action2"
                  href="/sign-in"
                >
                  Entrar
                </StyledLink>
              </Box>
              <Button
                href="/sign-up"
                variant={buttonVariant}
                textColor={buttonTextColorVariant}
                size="small"
              >
                EXPERIMENTE GRÁTIS
              </Button>
            </>
          )}
        </Box>
        {cart.products.length > 0 && (
          <Cart
            color={iconColors}
            itemsLenght={cart.products.length}
            showBorder={!isSecondary}
          />
        )}
      </Box>
      <Menu
        open={showMenu}
        items={items}
        user={user}
        onCloseMenu={() => setShowMenu(false)}
      />
    </HeaderStyle>
  );
};

Header.defaultProps = {
  variant: 'primary',
};

export default Header;
