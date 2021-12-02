import Box from '@components/Box';
import Button from '@components/Button';
import Icon from '@components/Icon';
import Typography from '@components/Typography';

import useDiscord from '@hooks/useDiscord';

import useMyProfile from '@user/hooks/useMyProfile';

const AcademyButton = () => {
  const handleClick = () => {
    window.location.href = process.env.NEXT_PUBLIC_ACADEMY_URL;
  };

  return (
    <Button width="100%" variant="yellow" onClick={handleClick}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box marginRight={5} marginTop={2}>
          <Icon size="ml" fill="neutral.white" name="Academy" />
        </Box>
        <Typography variant="h4" color="neutral.white">
          Acessar Academy
        </Typography>
      </Box>
    </Button>
  );
};

export default AcademyButton;
