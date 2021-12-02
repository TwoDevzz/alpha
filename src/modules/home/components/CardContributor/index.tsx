import Avatar from '@components/Avatar';
import Box from '@components/Box';
import Icon from '@components/Icon';
import StyledLink from '@components/Link';
import Typography from '@components/Typography';

export interface Props {
  imageSrc: string;
  title: string;
  description: string;
  instagram?: string;
  twitter?: string;
}

export default function CardContributor({
  imageSrc,
  title,
  description,
  instagram,
  twitter,
}: Props) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      borderRadius={5}
      backgroundColor="neutral.white"
      paddingX={5}
      paddingTop={6}
      paddingBottom={4}
    >
      <Avatar variant="large" src={imageSrc} />
      <Box marginTop={5}>
        <Typography variant="h4">{title}</Typography>
      </Box>
      <Box marginTop={3} maxWidth={170}>
        <Typography fontSize="s" textAlign="center" color="neutral.400">
          {description}
        </Typography>
      </Box>
      <Box marginTop={5} display="flex" justifyContent="space-around">
        { Boolean(instagram) && <StyledLink as="a" target="_blank" href={instagram}>
          <Icon size="xl" name="Instagram" fill="brand.dark" />
        </StyledLink> }
        { Boolean(twitter) && <StyledLink as="a" target="_blank" href={twitter}>
          <Icon size="xl" name="Twitter" fill="brand.dark" />
        </StyledLink> }
      </Box>
    </Box>
  );
}
