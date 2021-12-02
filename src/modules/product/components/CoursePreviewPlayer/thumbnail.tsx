import styled from 'styled-components';

import Box from '@components/Box';

const Container = styled(Box)`
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.25);
`;

export interface Props {
  thumbnail: string;
}

export default function Thumbnail({ thumbnail }: Props) {
  return (
    <Container
      width="100%"
      maxWidth={480}
      minHeight={{ default: 190, sm: 270 }}
      borderRadius={3}
      position="relative"
      backgroundImage={`url(${thumbnail})`}
      backgroundSize="cover"
    />
  );
}
