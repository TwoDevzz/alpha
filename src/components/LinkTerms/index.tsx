import { InputProps } from '@material-ui/core';

import Box from '@components/Box';
import Checkbox from '@components/Checkbox';
import { useDialog } from '@components/Dialog';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

import ConditionsDialog from '@user/components/ConditionsDialog';

type LinkTermsProps = InputProps & {
  value: boolean;
};

const LinkTerms = ({ onChange, value }: LinkTermsProps) => {
  const { closeDialog, openDialog, opened } = useDialog(false);

  return (
    <Box display="flex" alignItems="center" marginBottom={6} marginTop={5}>
      <ConditionsDialog opened={opened} closeDialog={closeDialog} />
      <Checkbox label="" onChange={onChange} checked={value} />
      <Typography variant="small">
        Declaro que li e concordo com as{' '}
        <StyledLink fontSize={12} onClick={openDialog}>
          Condições gerais de uso da plataforma Alpha Trading e o Codigo de ética e
          conduta.
        </StyledLink>
      </Typography>
    </Box>
  );
};

export default LinkTerms;
