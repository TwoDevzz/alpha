import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Typography from '@components/Typography';

export interface Props {
  phrase: string;
  colors: {
    border: string;
    name: string;
    profession: string;
  };
  src: string;
  name: string;
  profession?: string;
}

export default function Testimonial({
  phrase,
  colors,
  src,
  name,
  profession,
}: Props) {
  return (
    <Box paddingLeft={6} position="relative">
      <Box
        backgroundColor={colors.border}
        width="7px"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        borderRadius={6}
      />
      <Typography color="neutral.300" fontStyle="italic" fontSize="s">
        {'"'}
        {phrase}
        {'"'}
      </Typography>
      <Box marginTop={5} display="flex" alignItems="center">
        {/* <Box marginRight={5}>
          <Avatar src={src} variant="small" />
        </Box> */}
        <Box>
          <Box marginBottom={2}>
            <Typography color={colors.name} fontSize="xs" fontWeight="bold">
              {name}
            </Typography>
          </Box>
          { profession && (
            <Typography color={colors.profession} fontSize="xs">
              {profession}
            </Typography> 
          )}
        </Box>
      </Box>
    </Box>
  );
}
