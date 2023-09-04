import React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

 const SkeletonAnimation = ()=> {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export default SkeletonAnimation;