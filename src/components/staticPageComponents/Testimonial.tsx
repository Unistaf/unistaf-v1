import { Box, Typography } from '@mui/material';
import React from 'react';
import { colors } from 'src/utils/colors';

interface TestimonialProps {
  testimonialRole: string;
  testimonial: string;
  testimonialProfile: string;
  testimonialFullName: string;
  testimonialFonction: string;
}

function Testimonial({
  testimonial,
  testimonialFonction,
  testimonialFullName,
  testimonialProfile,
  testimonialRole
}: TestimonialProps) {
  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.primary,
          borderRadius: '10px',
          position: 'relative',
          padding: '24px',
          marginBottom: '15px',
          textAlign: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '15px',
            height: '15px',
            backgroundColor: colors.primary,
            left: '50%',
            top: '100%',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            borderRadius: '0 0 2px 0'
          }
        }}
      >
        <Typography variant="h4">{testimonialRole}</Typography>
        <p>{testimonial}</p>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            objectPosition: "top center",
            width: '50px', 
            height: '50px',
            borderRadius: '50%'
          }}
          src={testimonialProfile}
          alt={testimonialFullName}
        />
        <Box>
          <Typography variant="h5">{testimonialFullName}</Typography>
          <Typography>{testimonialFonction}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Testimonial;
