import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Typography from '@components/Typography';

export interface Props {
  src: string;
  name: string;
}

export default function Contributor({ src, name }: Props) {
  return (
    <Box display="flex" alignItems="center">
      <Box display="flex" alignItems="center" flex={1} marginRight={5}>
        <Avatar src={src} variant="medium" />
      </Box>
      <Box display="flex" alignItems="center" flex={2} maxWidth={125}>
        <Typography fontSize="xs" color="neutral.400">
          {name}
        </Typography>
      </Box>
    </Box>
  );
}
