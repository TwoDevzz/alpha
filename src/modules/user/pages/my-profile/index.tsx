import { useCallback, useState } from 'react';

import Box from '@components/Box';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import PageWrapper from '@components/PageWrapper';
import Typography from '@components/Typography';

import MyCards from '@user/components/MyCards';
import MyProducts from '@user/components/MyProducts';
import Profile from '@user/components/Profile';
import SideBar from '@user/components/SideBar';

export type TProfilePages = 'Meus dados' | 'Meus produtos' | 'Cartões cadastrados';

export default function UserPage() {
  const [activePage, setActivePage] =
    useState<TProfilePages | undefined>('Meus dados');
  const handleClickActivePage = useCallback(
    (page?: TProfilePages) => setActivePage(page),
    [],
  );

  const isProfilePage = activePage === 'Meus dados';
  const isProductsPage = activePage === 'Meus produtos';
  const isCardsPage = activePage === 'Cartões cadastrados';

  return (
    <PageWrapper>
      <Box display="flex" alignItems="center">
        {Boolean(activePage) && (
          <Box
            onClick={() => handleClickActivePage()}
            display={{ default: 'flex', lg: 'none' }}
            marginRight={{ default: 4, lg: 0 }}
          >
            <Icon size="s" name="ChevronLeft" />
          </Box>
        )}
        <Typography variant="h3">Meu perfil</Typography>
      </Box>
      <Box display="flex" marginTop={{ default: 5, lg: 8 }}>
        <SideBar
          activePage={activePage}
          onClickActivePage={handleClickActivePage}
        />
        <Box display={{ default: 'none', lg: 'initial' }}>
          <Divider variant="vertical" />
        </Box>
        {Boolean(activePage) && (
          <Box flex={'1 0'} marginLeft={{ default: 0, lg: 15 }}>
            {isProfilePage && <Profile />}
            {isProductsPage && <MyProducts />}
            {isCardsPage && <MyCards />}
          </Box>
        )}
      </Box>
    </PageWrapper>
  );
}
