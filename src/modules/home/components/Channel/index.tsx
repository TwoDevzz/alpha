import Box from '@components/Box';
import Typography from '@components/Typography';

export interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Channel({ icon, title, description }: Props) {
  return (
    <Box>
      <Box display={{ default: 'flex', lg: 'block' }}>
        <Box marginBottom={5} marginRight={5}>
          {icon}
        </Box>
        <Box marginBottom={3}>
          <Typography fontSize="xs" fontWeight="bold" color="neutral.white">
            {title}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Typography fontSize="xs" color="neutral.300">
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
