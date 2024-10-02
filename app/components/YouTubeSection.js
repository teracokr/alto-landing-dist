'use client';

import { Box, Typography } from '@mui/material';

const YouTubeSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: { xs: '40px 20px', md: '80px 20px' },
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        칠레에서는, 하이볼대신 Pisco를
      </Typography>
      <Box sx={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', margin: '0 auto' }}>
        <iframe
          src="https://www.youtube.com/embed/uZeZ9-vV450"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default YouTubeSection;
