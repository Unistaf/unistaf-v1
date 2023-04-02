import { Typography } from '@mui/material';
import React from 'react';
import UnistafRoundedButton from 'src/components/reusable/UnistafRoundedButton';
import { colors } from 'src/utils/colors';
import 

interface MyDateProps {
  seconds: number;
  nanoseconds: number;
}

interface CardActualityProps {
  cover: string;
  userProfil: string;
  userName;
  actuality_date: MyDateProps | undefined;
  resume: string;
  actuality_id: string;
  actuality_title: string;
}

function CardActuality({
  cover,
  userProfil,
  userName,
  actuality_date,
  resume,
  actuality_id,
  actuality_title
}: CardActualityProps) {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${cover})`,
          backgroundPosition: 'top center',
          maxHeight: '210px',
          maxWidth: '350px',
          width: '100%',
          height: '100%'
        }}
      />
      <Box
        sx={{
          position: 'relative',
          top: '-30px',
          width: '80%',
          backgroundColor: `${colors.primary}`,
          p: 3
        }}
      >
        <Typography
          sx={{
            fontSize: '15px',
            fontWeight: 'bold'
          }}
        >
          {actuality_title}
        </Typography>
        <Box display="grid" gridTemplateColumn="1fr 1fr">
          <Box display="flex" sx={{ gap: 2 }}>
            <img src={userProfil} alt={userName} />
            <Typography>{userName}</Typography>
          </Box>
          <Box display="flex" sx={{ gap: 2 }}>
            <img src={userProfil} alt={userName} />
            <Typography>{userName}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CardActuality;
