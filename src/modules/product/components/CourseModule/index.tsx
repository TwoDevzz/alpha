import Box from '@components/Box';
import Typography from '@components/Typography';

export interface Props {
  name: string;
  lessons: string[];
}

export default function CourseModule({ name, lessons }: Props) {
  return (
    <Box>
      <Box marginBottom={3}>
        <Typography fontSize={18} fontFamily="headline" color="neutral.400">
          {name}
        </Typography>
      </Box>
      {lessons.map(lesson => (
        <Box key={lesson} marginBottom={1}>
          <Typography fontSize={{ default: 16, lg: 18 }} color="neutral.900">
            {lesson}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
