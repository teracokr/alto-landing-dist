'use client';

import { useState } from 'react';
import { Box, Button, CircularProgress, TextField, Typography, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import Image from 'next/image';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Gmail 전송 로직 구현
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      alert('문의가 성공적으로 전송되었습니다.');
    } catch (error) {
      console.error('메일 전송 실패:', error);
      alert('메일 전송에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: '40px 20px', md: '80px 20px' },
        backgroundColor: 'black', // 배경을 검은색으로 설정
      }}
    >
      {/* Left Side: Logo */}
      <Box sx={{ flex: 1, textAlign: 'center', mb: { xs: 4, md: 0 } }}>
        <Image
          src="/images/04-logo02.png"
          alt="Logo"
          width={140}
          height={330}
          objectFit="contain"
        />
      </Box>

      {/* Right Side: Contact Form */}
      <Box sx={{ flex: 1, maxWidth: '600px', padding: { xs: '20px', md: '40px' }, backgroundColor: 'black', borderRadius: '8px', boxShadow: 3, border: '1px solid #ffffff' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
          문의하기
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="이름"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2, border: '1px solid #ffffff', borderRadius: '4px' }}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white', borderColor: 'white' } }}
          />
          <TextField
            label="이메일"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            sx={{ mb: 2, border: '1px solid #ffffff', borderRadius: '4px' }}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white', borderColor: 'white' } }}
          />
          <TextField
            label="전화번호 (선택)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2, border: '1px solid #ffffff', borderRadius: '4px' }}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white', borderColor: 'white' } }}
          />
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <Typography sx={{ color: 'white' }}>문의 유형</Typography>
            <RadioGroup
              name="type"
              value={formData.type}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="personal"
                control={<Radio sx={{ color: 'white' }} />}
                label="개인"
                sx={{ color: 'white' }}
              />
              <FormControlLabel
                value="store"
                control={<Radio sx={{ color: 'white' }} />}
                label="매장"
                sx={{ color: 'white' }}
              />
            </RadioGroup>
          </FormControl>
          <TextField
            label="문의 내용"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={3}
            sx={{ mb: 4, border: '1px solid #ffffff', borderRadius: '4px' }}
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white', borderColor: 'white' } }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : '문의하기'}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUsSection;
