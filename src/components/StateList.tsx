/* eslint-disable react/no-array-index-key */
import { Box, Grid, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import states from '../mocks/state-list.mock.json';

const StateList: React.FC = (): ReactElement => (
  <Box>
    <Typography
      variant="h5"
      sx={{
        paddingBottom: 2,
        paddingTop: 3,
      }}
    >
      By State
    </Typography>
    <Grid sx={{ margin: 0 }} container spacing={2}>
      {states.map((item, id) => (
        <Grid item key={id} xs={6} sm={4} md={3}>
          <Link to={`/${item.trim().replace(/\s/g, '-')}`}>
            <Typography
              sx={{
                textTransform: 'capitalize',
                color: 'primary.main',
                lineHeight: 2,
              }}
              variant="body1"
            >
              {item}
            </Typography>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Box>
);
export default StateList;
