'use client';

import { Box, Button, Typography } from '@mui/material';

const CallToActionSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: { xs: '40px 20px', md: '80px 20px' },
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        피스코의 매력에 빠져보세요!
      </Typography>
      <Typography variant="subtitle1" sx={{ mb: 4 }}>
        칠레의 국민 주, 피스코의 역사와 맛있는 칵테일 레시피를 지금 확인하세요.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://blog.naver.com/zauin/221008283469"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          backgroundColor: '#ffcc80',
          color: 'black',
          fontWeight: 'bold',
          padding: '10px 20px',
          '&:hover': {
            backgroundColor: '#ffaa33',
          },
        }}
      >
        피스코 더 알아보기
      </Button>
    </Box>
  );
};

export default CallToActionSection;
