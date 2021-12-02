import styled from 'styled-components';
import { layout, LayoutProps } from 'styled-system';

interface ThumbnailProps extends LayoutProps {
  thumbnail: string;
}

export const Thumbnail = styled.div<ThumbnailProps>`
  background-image: url(${({ thumbnail }) => thumbnail});
  background-position: center;
  background-size: cover;

  ${layout}
`;
