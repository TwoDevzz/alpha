import styled from 'styled-components';

import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Typography from '@components/Typography';

export interface Props {
  src?: string;
  name: string;
}

const AvatarContainer = styled(Box)`
  border: 4px solid rgba(255, 255, 255, 0.3);
`;

export default function Minister({ name, src }: Props) {
  return (
    <Box display="flex" alignItems="center">
      {src && (
        <AvatarContainer width={48} height={48} marginRight={5} borderRadius="50%">
          <Avatar variant="small" src={src} />
        </AvatarContainer>
      )}
      <Box>
        <Box marginBottom={1}>
          <Typography fontSize={12} color="neutral.200" textTransform="uppercase">
            Ministrado por:
          </Typography>
        </Box>
        <Typography fontSize={18} color="neutral.white">
          {name}
        </Typography>
      </Box>
    </Box>
  );
}
