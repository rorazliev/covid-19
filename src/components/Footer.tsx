import React, { ReactElement } from 'react';
import {
  Box, Container, Link, Typography,
} from '@mui/material';

const Footer: React.FC = (): ReactElement => {
  // Get the current year
  const date = new Date();
  const year = date.getFullYear();

  // Render
  return (
    <Box component="footer" role="contentinfo">
      <Container
        sx={{
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          display: 'flex',
          minHeight: 56,
        }}
      >
        <Typography variant="body2">
          {`${year} © Made with ❤️ by `}
          <Link
            href="https://linkedin.com/in/rorazliev"
            target="_blank"
            rel="noreferrer"
          >
            Ruslan Orazliev
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
