import React from 'react';

import Box from '@components/Box';
import CardList from '@components/CardList';

const MyCards = () => {
  return (
    <Box>
      <Box maxWidth={570}>
        <CardList showRemoveCard={true} />
      </Box>
    </Box>
  );
};

export default MyCards;
