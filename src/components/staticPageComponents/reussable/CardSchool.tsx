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
        flexWrap: 'nowrap',
        border:'1px solid #000000',
        borderRadius: '30px',
        padding: '15px'
      }}
    >
      <Box component="div">
        <img
          src={schoolLogo}
          alt={accronyme}
          style={{
            width: '7vw',
            height: '7vw',
            borderRadius: '50%',
            objectFit: "cover"
          }}
        />
      </Box>
      <Box>
        <Typography variant="h3">{accronyme}</Typography>
        <Typography variant="h5">{schoolName}</Typography>
        <Typography variant="body1">{schoolLocalisation}</Typography>
      </Box>
    </div>
  );
}

export default CardSchool;
