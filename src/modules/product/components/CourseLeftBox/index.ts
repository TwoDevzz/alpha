import styled from 'styled-components';

import Box from '@components/Box';

const LeftBox = styled(Box)`
  h2 {
    color: ${props => props.theme.colors.neutral[900]};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-family: ${props => props.theme.fonts.headline};
    font-size: ${props => props.theme.fontSizes.ml}px;
    ${props => props.theme.mediaQueries.lg} {
      font-size: ${props => props.theme.fontSizes.xl}px;
    }
    margin-top: ${props => props.theme.space[8]}px;
    ${props => props.theme.mediaQueries.lg} {
      margin-top: ${props => props.theme.space[10]}px;
    }
    :first-of-type {
      margin-top: 0;
    }
  }
  p {
    color: ${props => props.theme.colors.neutral[900]};
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: 18px;
    margin-top: ${props => props.theme.space[5]}px;
  }
`;

export default LeftBox;
