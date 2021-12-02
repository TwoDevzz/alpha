import React from 'react';
import styled from 'styled-components';

import Box from '@components/Box';

export interface Props {
  value: number;
}

const BarStyled = styled(Box)`
  transition: width 0.2s ease-in;
`;

const ProgressBar = ({ value = 0 }: Props) => (
  <Box height={8} width="100%" borderRadius="10px" backgroundColor="neutral.100">
    <BarStyled
      backgroundColor="other.positive"
      borderRadius={3}
      height="100%"
      width={`${value}%`}
    />
  </Box>
);

export default ProgressBar;
