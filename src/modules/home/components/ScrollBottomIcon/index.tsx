import styled, { keyframes } from 'styled-components';

import Box from '@components/Box';
import Icon from '@components/Icon';

const scrollAnimation = keyframes`
    0% {
      transform: translateY(0);
    }
    
    100% {
      transform: translateY(-10px);
    }
`;

const ContainerAnimation = styled(Box)`
  animation: ${scrollAnimation} 1s infinite alternate;
`;

export default function ScrollBottomIcon() {
  return (
    <ContainerAnimation>
      <Icon size="xl" name="ScrollBottomIcon" />
    </ContainerAnimation>
  );
}
