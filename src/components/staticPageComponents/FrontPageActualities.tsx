import { Grid, Typography } from '@mui/material';
import React from 'react';
import CardActuality from './reussable/CardActuality';
import UnistafRoundedButton from '../reusable/UnistafRoundedButton';
function FrontPageActualities() {
  const actualityDatas = [
    {
      cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      userProfil:
        'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png',
      userName: 'Alkaly BADJI',
      actuality_date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, est',
      actuality_id: '1',
      actuality_title: 'Lorem ipsum dolor sit amet'
    },
    {
      cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      userProfil:
        'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png',
      userName: 'Alkaly BADJI',
      actuality_date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, est',
      actuality_id: '1',
      actuality_title: 'Lorem ipsum dolor sit amet'
    },
    {
      cover: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
      userProfil:
        'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png',
      userName: 'Alkaly BADJI',
      actuality_date: new Date(),
      resume:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui, est',
      actuality_id: '1',
      actuality_title: 'Lorem ipsum dolor sit amet'
    }
  ];

  return (
    <Grid sx={{ p: 5, position: 'relative' }}>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography variant="h2" className="subtitle">
          Actualités
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        {actualityDatas.map(
          (
            {
              cover,
              userProfil,
              userName,
              actuality_date,
              actuality_id,
              actuality_title,
              resume
            },
            index
          ) => (
            <Grid key={index} item xs={12} md={4}>
              <CardActuality
                cover={cover}
                userProfil={userProfil}
                userName={userName}
                actuality_date={actuality_date}
                resume={resume}
                actuality_id={actuality_id}
                actuality_title={actuality_title}
              />
            </Grid>
          )
        )}
      </Grid>
      <Grid
        sx={{
          marginTop: '210px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <UnistafRoundedButton isOutlined={true}>
          Voir toutes les actualitées
        </UnistafRoundedButton>
      </Grid>
    </Grid>
  );
}

export default FrontPageActualities;
