import AcademyButton from '@components/AcademyButton';
import Box from '@components/Box';
import CommunityButton from '@components/CommunityButton';
import DiscordButton from '@components/DiscordButton';
import Divider from '@components/Divider';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import useDiscord from '@hooks/useDiscord';

import { ProductType } from '@models/Product';
import { Features } from '@models/UserFeatures';

import useMyProducts from '@user/hooks/useMyActiveProducts';
import useMyFeatures from '@user/hooks/useMyFeatures';
import useMyProfile from '@user/hooks/useMyProfile';
import { TProfilePages } from '@user/pages/my-profile';

interface SideBarProps {
  activePage?: TProfilePages;
  onClickActivePage: (page: TProfilePages) => void;
}

const SideBar: React.FC<SideBarProps> = ({ activePage, onClickActivePage }) => {
  const { data } = useMyProducts();
  const { hasFeature } = useMyFeatures();
  const { data: user } = useMyProfile();
  const { data: discord } = useDiscord(user?.id);
  const pages: TProfilePages[] = [
    'Meus dados',
    'Meus produtos',
    'Cartões cadastrados',
  ];

  const hasCourses = data?.products.some(
    ({ product }) => product.type === ProductType.Course,
  );

  return (
    <Box
      flex={{ default: 1, lg: '0 0 280px' }}
      marginRight={{ default: 0, lg: 6 }}
      display={activePage ? { default: 'none', lg: 'flex' } : 'flex'}
      flexDirection="column"
    >
      {pages.map((page, i) => {
        const isActivePage = page === activePage;

        return (
          <Box key={i}>
            <Box display={['auto', 'none', 'none']} marginX={[-5, 0, 0]}>
              <Divider />
            </Box>
            <Box
              padding={['28px 16px 28px 0', '13px 24px', '13px 24px']}
              borderRadius={2}
              backgroundColor={
                isActivePage ? ['neutral.white', 'brand.50', 'brand.50'] : undefined
              }
              marginRight={[0, 6, 6]}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              onClick={() => onClickActivePage(page)}
              style={{
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <Typography
                fontSize="sm"
                color={isActivePage ? 'brand.default' : undefined}
                fontWeight={isActivePage ? 'bold' : undefined}
              >
                {page}
              </Typography>
              <Box display={['initial', 'none', 'none']}>
                <Icon size="s" name="ChevronRight" />
              </Box>
            </Box>
          </Box>
        );
      })}
      <Box marginTop={12}>
        <DiscordButton />
      </Box>
      {hasFeature(Features.COMMUNITY) && (
        <Box marginTop={5}>
          <CommunityButton />
        </Box>
      )}
      {hasCourses && (
        <Box marginTop={5}>
          <AcademyButton />
        </Box>
      )}
      {discord?.url && (
        <Box marginTop={6}>
          <Typography
            fontSize={15}
            color={'neutral.400'}
            textAlign={{ default: 'center', lg: 'left' }}
          >
            Sua conta está validada.
            <br />
            Para acessar o Discord clique no botão acima.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default SideBar;
