import React, { ReactElement } from 'react';
import { Link as InternalLink } from 'react-router-dom';
import {
  Box, Container, Link as ExternalLink,
} from '@mui/material';
import {
  Equalizer, GitHub,
} from '@mui/icons-material';

const Header: React.FC = (): ReactElement => (
  <Box
    component="header"
    role="banner"
    sx={{
      transition: 'all 0.15s ease-in-out',
      backgroundColor: 'secondary.main',
      boxSizing: 'border-box',
      position: 'sticky',
      zIndex: 999,
      top: 0,
    }}
  >
    <Container
      sx={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        minHeight: 56,
      }}
    >
      <InternalLink
        to="/"
        style={{
          border: '1px solid secondary.main',
          justifyContent: 'center',
          color: 'primary.main',
          alignItems: 'center',
          minWidth: 'auto',
          display: 'flex',
          height: 34,
          width: 34,
        }}
      >
        <Equalizer sx={{ color: 'primary.main' }} />
      </InternalLink>
      <ExternalLink
        target="_blank"
        href="https://github.com/rorazliev/covid-19"
        sx={{
          border: '1px solid secondary.main',
          justifyContent: 'center',
          color: 'primary.main',
          alignItems: 'center',
          display: 'flex',
          marginLeft: 2,
          height: 34,
          width: 34,
        }}
      >
        <GitHub />
      </ExternalLink>
    </Container>
  </Box>
);
export default Header;
