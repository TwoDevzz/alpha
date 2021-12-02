import styled from 'styled-components';

import Box from '@components/Box';

const RightBox = styled(Box)`
  h2 {
    color: ${props => props.theme.colors.neutral[400]};
    font-weight: ${props => props.theme.fontWeights.regular};
    font-family: ${props => props.theme.fonts.headline};
    font-size: 18px;
    margin-top: ${props => props.theme.space[10]}px;
    ${props => props.theme.mediaQueries.lg} {
      margin-top: ${props => props.theme.space[13]}px;
    }
    :first-of-type {
      margin-top: 0;
    }
  }
  p {
    color: ${props => props.theme.colors.neutral[900]};
    font-weight: ${props => props.theme.fontWeights.regular};
    font-size: ${props => props.theme.fontSizes.s}px;
    margin-top: ${props => props.theme.space[5]}px;
  }
`;

export default RightBox;
