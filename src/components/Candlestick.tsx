import React, { ReactElement } from 'react';
import { Box } from '@mui/material';

type PropsType = {
  readonly data: number,
  readonly scale: number,
}

const Candlestick: React.FC<PropsType> = (
  { data, scale },
):ReactElement => (
  <Box
    sx={{
      transition: 'opacity 0.15s ease-in-out',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      position: 'relative',
      display: 'flex',
      margin: '0 1px',
      height: 300,
      width: 8,

      '&:hover': {
        opacity: 0.5,
      },
    }}
  >
    <Box
      sx={{
        height: `${data / (scale / 300)}px`,
        backgroundColor: 'primary.main',
        borderRadius: 1,
        width: 8,
      }}
    />
  </Box>
);

export default Candlestick;
