import React, { ReactElement } from 'react';
import { Container, Spinner } from './styles';

const Loader: React.FC = (): ReactElement => (
  <Container>
    <Spinner />
  </Container>
);

export default Loader;
