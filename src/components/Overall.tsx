import React, { ReactElement } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useSelector } from '../redux/store';

type PropsType = {
  name: string,
}

const Overall: React.FC<PropsType> = ({ name }): ReactElement => {
  // Get overall data
  const data = useSelector((state) => state.data.overall);

  // Render
  return (
    <Box
      sx={{
        paddingBottom: 1,
        paddingTop: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textTransform: 'capitalize',
          paddingBottom: 1,
          fontWeight: 500,
        }}
      >
        {name}
      </Typography>
      <Grid container spacing={2} sx={{ paddingTop: 2 }}>
        <Grid item xs={6}>
          <Typography>Total Cases:</Typography>
          <Typography variant="h6">
            {data.cases.toLocaleString()}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>Total Deaths:</Typography>
          <Typography variant="h6">
            {data.deaths.toLocaleString()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overall;
