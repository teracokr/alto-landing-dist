'use client';

import Slider from 'react-slick';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from 'next/image';

const images = [
  '/images/02-card01@2x.png',
  '/images/02-card02@2x.png',
  '/images/02-card03@2x.png',
  '/images/02-card04@2x.png',
  '/images/02-card05@2x.png',
  '/images/02-card06@2x.png',
  '/images/02-card07@2x.png',
  '/images/02-card08@2x.png',
  '/images/02-card09@2x.png',
  '/images/02-card10@2x.png',
  '/images/02-card11@2x.png',
  '/images/02-card12@2x.png',
];

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{ position: 'absolute', top: '50%', right: 0, zIndex: 1, color: 'white' }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{ position: 'absolute', top: '50%', left: 0, zIndex: 1, color: 'white' }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
}

const CarouselSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // PC에서 3개씩
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768, // 모바일
        settings: {
          slidesToShow: 1, // 모바일에서 1개씩
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ position: 'relative', padding: '40px 0', backgroundColor: 'black' }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} sx={{ padding: '0 10px' }}>
            <Image src={src} alt={`Slide ${index + 1}`} width={600} height={400} layout="responsive" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselSection;
