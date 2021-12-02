import Box from '@components/Box';
import Button from '@components/Button';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import { getToken } from '@config/auth';

import useDiscord from '@hooks/useDiscord';

import useMyProfile from '@user/hooks/useMyProfile';

const CommunityButton = () => {
  const { data: user } = useMyProfile();

  if (!user) return null;

  const handleClick = () => {
    window.location.href = `${
      process.env.NEXT_PUBLIC_COMMUNITY_URL
    }/?token=${getToken()}`;
  };

  return (
    <Button width="100%" onClick={handleClick}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box marginRight={5} marginTop={2}>
          <Icon size="ml" fill="neutral.white" name="Academy" />
        </Box>
        <Typography variant="h4" color="neutral.white">
          Acessar Community
        </Typography>
      </Box>
    </Button>
  );
};

export default CommunityButton;
