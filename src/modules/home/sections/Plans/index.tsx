import Box from '@components/Box';
import Typography from '@components/Typography';

import CardPlan from '@home/components/CardPlan';
import usePlans from '@home/hooks/usePlans';

const Plans = () => {
  const { data } = usePlans();

  const mensal = data?.filter(item =>
    item.title.toLowerCase().includes('mensal'),
  )[0];
  const semestral = data?.filter(item =>
    item.title.toLowerCase().includes('semestral'),
  )[0];
  const prime = data?.filter(item => item.title.toLowerCase().includes('prime'))[0];

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      width="100%"
      minHeight="100%"
      alignItems="center"
      backgroundColor="brand.default"
      paddingX={5}
      paddingY={{ default: 56, lg: 120 }}
    >
      <Box maxWidth={771}>
        <Typography
          variant="h2"
          textAlign="center"
          color="neutral.white"
          fontWeight="bold"
        >
          Faça sua inscrição e tenha acesso a muito mais por muito menos.
        </Typography>
      </Box>
      <Box maxWidth={1170} position="relative">
        <Box
          width="100%"
          maxWidth={1170}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={{ default: 'column', lg: 'row' }}
        >
          <CardPlan plan={mensal} percentage={46} />
          <CardPlan is_special plan={prime} percentage={64} from />
          <CardPlan plan={semestral} percentage={49} from />
        </Box>
      </Box>
    </Box>
  );
};

export default Plans;
