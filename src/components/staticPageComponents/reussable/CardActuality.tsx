import { Typography, Box } from '@mui/material';
import React from 'react';
import UnistafRoundedButton from 'src/components/reusable/UnistafRoundedButton';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import { colors } from 'src/utils/colors';
import moment from 'moment';

interface MyDateProps {
  seconds: number;
  nanoseconds: number;
}

interface CardActualityProps {
  cover: string;
  userProfil: string;
  userName: string;
  actuality_date: Date;
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
          //background: `#f00`,
          backgroundPosition: 'cente center',
          backgroundSize: 'cover',
          maxHeight: '210px',
          //maxWidth: '350px',
          width: '100%',
          height: '100%',
          borderRadius: '10px'
        }}
      />
      <Box
        sx={{
          //position: 'relative',
          //top: '-50px',
          //left:'50%',
          //transform: 'translateX(-50%)',
          width: '80%',
          m: '-50px auto 15px auto',
          backgroundColor: `${colors.primary}`,
          p: 3,
          borderRadius: '10px',
          minHeight: '210px'
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
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            flexWrap: 'no-wrap',
            '@media (max-width: 600px)': {
              fontSize: '12px'
            }
          }}
        >
          <Box display="flex" sx={{ gap: 1, alignItems: 'flex-end' }}>
            <img
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
              }}
              src={userProfil}
              alt={userName}
            />
            <Typography variant="body1"
              sx={{
                fontSize: '12px',
                '@media (max-width: 600px)': {
                  fontSize: '6px'
                }
              }}
            >{userName}</Typography>
          </Box>
          <Box display="flex" sx={{ gap: 1, alignItems: 'flex-end' }}>
            <DateRangeOutlinedIcon />
            {moment(actuality_date).format('DD/MM/YYYY')}
          </Box>
        </Box>
        <Typography sx={{ m: '15px 0' }}>{resume}</Typography>
        <UnistafRoundedButton isOutlined={true} size="small">
          Lire plus...
        </UnistafRoundedButton>
      </Box>
    </>
  );
}

export default CardActuality;
