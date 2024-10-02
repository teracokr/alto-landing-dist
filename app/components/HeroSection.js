'use client';

import { Box, Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '400px', md: '100vh' }, // 모바일에서는 400px, PC에서는 전체 화면 높이
        backgroundImage: 'url("/images/01-hero01.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 텍스트 가독성을 높이기 위한 어두운 배경
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Alto del Carmen
        </Typography>
        <Typography variant="subtitle1">
          전 세계에서 사랑받는 칠레의 맛
        </Typography>
        <Typography variant="subtitle1">
          이제 한국에서 만날 수 있습니다.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
