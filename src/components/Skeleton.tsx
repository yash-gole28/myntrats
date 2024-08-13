import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box'; // Box component can be used to align Skeleton items

const Loading = () => {
  // Generate an array of Skeleton components
  const skeletons = Array.from({ length: 4 }, (_, index) => (
    <Skeleton key={index} variant="rectangular" width={210} height={118} />
  ));

  return (
    <Box display="flex" flexDirection="row" gap={2}>
      {skeletons}
    </Box>
  );
};

export default Loading;
