import React, { ReactElement } from 'react';
import {
  Container, Box, Copyright, LinkedinLink,
} from './styles';

const Footer: React.FC = (): ReactElement => (
  <Container role="contentinfo">
    <Box>
      <Copyright>
        Made with ❤️ by
        {' '}
        <LinkedinLink
          href="https://linkedin.com/in/rorazliev"
          target="_blank"
          rel="noreferrer"
        >
          Ruslan Orazliev
        </LinkedinLink>
      </Copyright>
    </Box>
  </Container>
);

export default Footer;
