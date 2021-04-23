import React, { ReactElement } from 'react';
import {
  Container, Heading, Description,
} from './styles';

const Error: React.FC = (): ReactElement => (
  <Container>
    <Heading>:(</Heading>
    <Description>
      Something is wrong. Please, reload the page or try later.
    </Description>
  </Container>
);

export default Error;
