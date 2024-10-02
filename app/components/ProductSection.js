'use client';

import { Box, Typography, Paper } from '@mui/material';

const ProductSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        color: 'white',
        padding: { xs: '40px 20px', md: '80px 20px' }, // 모바일과 PC에 맞춘 여백
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        피스코란 무엇인가요?
      </Typography>
      <Paper
        sx={{
          backgroundColor: '#ffcc80', // 색이 들어간 박스 (연한 주황색)
          padding: '20px',
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'left',
          lineHeight: 1.8,
        }}
      >
        <Typography variant="body1">
          피스코는 와인을 증류하여 만든 브랜디로,
          칠레와 페루에서 깊은 역사를 자랑합니다.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          알토 델 카르멘은 부드럽고 과일향이 풍부한 맛으로
          칠레에서 국민주로 사랑받고 있습니다.
        </Typography>
      </Paper>
    </Box>
  );
};

export default ProductSection;
