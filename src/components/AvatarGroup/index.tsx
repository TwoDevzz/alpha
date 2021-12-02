import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Typography from '@components/Typography';

export interface Props {
  children: React.ReactElement<typeof Avatar>[];
  append?: string;
}

export default function AvatarGroup({ children, append }: Props) {
  return (
    <Box display="flex" alignItems="center" maxWidth="100%">
      <Box width="100%" display="flex" flex={3} alignItems="center">
        {children.map((avatar, index) => (
          <Box key={`avatar-box-${index}`} zIndex={index} marginLeft={index && -18}>
            {avatar}
          </Box>
        ))}
      </Box>
      {append && (
        <Box marginBottom={3} flex={1} marginLeft={{ default: 3, lg: 5 }}>
          <Typography variant="medium1" fontSize="s" color="neutral.400">
            {append}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
