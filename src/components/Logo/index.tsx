import styled from 'styled-components';
import { system, TextColorProps } from 'styled-system';

import Box, { StyledSystemProps } from '@components/Box';

import * as Svgs from './svgs';

interface Props {
  name: keyof typeof Svgs;
  width: StyledSystemProps['width'];
  height: StyledSystemProps['height'];
  fill?: TextColorProps['color'];
}

interface ContainerProps {
  fill?: Props['fill'];
}

const Container = styled(Box)<ContainerProps>`
  ${system({
    fill: {
      property: 'fill',
      scale: 'colors',
    },
  })}
`;

const Logo = ({ name, fill, width, height }: Props) => {
  const LogoComponent = Svgs[name];

  return (
    <Container width={width} height={height} fill={fill}>
      <LogoComponent />
    </Container>
  );
};

Logo.defaultProps = {
  fill: 'brand.default',
};

export default Logo;
