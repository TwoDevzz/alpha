import styled from 'styled-components';
import {
  background,
  color,
  space,
  layout,
  flexbox,
  border,
  position,
  shadow,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  BackgroundProps,
  ShadowProps,
} from 'styled-system';

export type StyledSystemProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  BackgroundProps &
  ShadowProps;

const Box = styled.div<StyledSystemProps>`
  box-sizing: border-box; // Ensure that padding is included in width. Never remove it.
  min-width: 0; // Ensure the Box can shrink below its minimum content size when used as a flex item. Never remove it.​

  ${background}
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  ${shadow}
`;

export default Box;
