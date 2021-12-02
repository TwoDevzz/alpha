import Box from '@components/Box';
import Typography from '@components/Typography';

export interface Props {
  title: string;
  description: string;
}

export default function CourseSection({ title, description }: Props) {
  return (
    <Box>
      <Box marginBottom={5}>
        <Typography
          fontSize={{ lg: 'xl', default: 24 }}
          fontWeight="bold"
          fontFamily="headline"
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography fontSize={18}>{description}</Typography>
      </Box>
    </Box>
  );
}
