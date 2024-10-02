'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const RecipeSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("/images/03-recipe-02-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: { xs: '40px 20px', md: '80px 20px' },
        color: 'white',
      }}
    >
      {/* Background overlay for opacity */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 불투명도 적용
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          완벽한 피스코 사워 만들기
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Left Image */}
          <Box sx={{ flex: 1, textAlign: 'center', mb: { xs: 4, md: 0 } }}>
            <Image
              src="/images/03-recipe-01-main.png"
              alt="Pisco Sour"
              width={400}
              height={500}
              style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }} // 비율 유지
            />
          </Box>
          {/* Right Recipe Text */}
          <Box
            sx={{
              flex: 1,
              color: 'white',
              padding: { xs: '20px', md: '40px' },
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '8px',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              재료
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              - 피스코 2 oz
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              - 라임 주스 1 oz
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              - 설탕 시럽 1 oz
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              - 계란 흰자 1개
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              - 얼음
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              - 비터스 한 방울
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipeSection;
