import styled from 'styled-components';
import { system, TextColorProps, WidthProps } from 'styled-system';

import Box from '@components/Box';

import * as Svgs from './svgs';

export type IconNames = keyof typeof Svgs;

interface Props {
  name: IconNames;
  size: WidthProps['width'];
  fill?: TextColorProps['color'];
}

interface ContainerProps {
  size?: Props['size'];
  fill?: Props['fill'];
}

const Container = styled(Box)<ContainerProps>`
  ${system({
    fill: {
      property: 'fill',
      scale: 'colors',
    },
  })}
  ${system({
    size: {
      property: 'fontSize',
      scale: 'fontSizes',
    },
  })}
  
  & svg {
    width: 1em !important;
    height: 1em !important;
  }
`;

const Icon = ({ name, size, fill }: Props) => {
  const IconComponent = Svgs[name];

  return (
    <Container display="inline-flex" size={size} fill={fill}>
      <IconComponent />
    </Container>
  );
};

Icon.defaultProps = {
  fill: 'neutral.900',
};

export default Icon;
