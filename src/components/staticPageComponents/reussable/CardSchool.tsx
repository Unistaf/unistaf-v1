import { Box, Typography } from '@mui/material';
import React from 'react';

interface SchollCardProps {
  schoolLogo: string;
  accronyme: string;
  schoolName: string;
  schoolLocalisation: string;
}

function CardSchool({
  schoolLogo,
  accronyme,
  schoolName,
  schoolLocalisation
}: SchollCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: "24px",
        flexWrap: 'nowrap',
        border: '1px solid rgba(0,0,0,0.2)',
        borderRadius: '30px',
        padding: '15px',
      }}
    >
      <Box
        component="div"
        sx={{
          width: '7vw',
          height: '7vw',
          borderRadius: '15px'
        }}
      >
        <img
          src={schoolLogo}
          alt={accronyme}
          style={{
            width: "100%",
            objectFit: 'cover'
          }}
        />
      </Box>
      <Box>
        <Typography variant="h3" sx={{fontSize: "22px", fontWeight: 500}}>{accronyme}</Typography>
        <Typography variant="h5" sx={{fontSize: "16px", fontWeight: 500}} >{schoolName}</Typography>
        <Typography variant="body1" sx={{fontSize: "12px", fontWeight: 500, color: "rgba(0,0,0,0.5)"}}>{schoolLocalisation}</Typography>
      </Box>
    </div>
  );
}

export default CardSchool;
