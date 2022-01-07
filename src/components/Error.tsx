import { Container, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

const Error: React.FC = (): ReactElement => (
  <Container sx={{
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    width: '100%',
  }}
  >
    <Typography
      variant="h4"
      sx={{
        color: 'primary.main',
        fontWeight: 600,
        margin: 2,
      }}
    >
      :(
    </Typography>
    <Typography variant="body1" sx={{ textAlign: 'center' }}>
      Something is wrong. Please, reload the page or try later.
    </Typography>
  </Container>
);

export default Error;
