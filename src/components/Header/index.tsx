import React, { ReactElement } from 'react';
import {
  Container, Box, HomeLink, GithubLink,
} from './styles';
import { Chart, Github } from '../Icons';

const Header: React.FC = (): ReactElement => (
  <Container role="navigation">
    <Box>
      <HomeLink to="/" data-testid="home-link">
        <Chart />
      </HomeLink>
      <GithubLink
        href="https://github.com/rorazliev/covid-19"
        target="_blank"
        rel="noreferrer"
        data-testid="github-link"
      >
        <Github />
      </GithubLink>
    </Box>
  </Container>
);

export default Header;
