import { CircularProgress, Container } from '@mui/material';
import React, { ReactElement } from 'react';

const Loader: React.FC = (): ReactElement => (
  <Container sx={{
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    width: '100%',
  }}
  >
    <CircularProgress />
  </Container>
);

export default Loader;
