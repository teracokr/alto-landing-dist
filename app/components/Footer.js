'use client';

import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        padding: '20px 0',
        mb: 20,
      }}
    >
      <Typography variant="body2">
        © 2024 Uvacellar Inc.
      </Typography>
    </Box>
  );
};

export default Footer;
