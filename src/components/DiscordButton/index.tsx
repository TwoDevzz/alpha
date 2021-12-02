import Box from '@components/Box';
import Button from '@components/Button';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import useDiscord from '@hooks/useDiscord';

import useMyProfile from '@user/hooks/useMyProfile';

const DiscordButton = () => {
  const { data: user } = useMyProfile();
  const { data: discord } = useDiscord(user?.id);

  if (!user || !discord?.url) return null;

  const handleClick = () => {
    if (discord.url) {
      window.location.href = discord.url;
    }
  };

  return (
    <Button width="100%" onClick={handleClick}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box marginRight={5} marginTop={2}>
          <Icon size="ml" name="Discord" />
        </Box>
        <Typography variant="h4" color="neutral.white">
          Acessar Discord
        </Typography>
      </Box>
    </Button>
  );
};

export default DiscordButton;
