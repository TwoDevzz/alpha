import styled from 'styled-components';
import { system, TextColorProps } from 'styled-system';

import Box, { StyledSystemProps } from '@components/Box';

import * as Svgs from './svgs';

export type SvgNames = keyof typeof Svgs;

interface Props {
  name: SvgNames;
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

const CardBrand = ({ name, fill, width, height }: Props) => {
  const LogoComponent = Svgs[name];

  return (
    <Container display="inline-flex" width={width} height={height} fill={fill}>
      <LogoComponent />
    </Container>
  );
};

CardBrand.defaultProps = {
  fill: 'brand.default',
};

export default CardBrand;
