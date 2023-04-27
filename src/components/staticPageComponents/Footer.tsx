import React, { useState } from 'react';
import Section from './reussable/Section';
import { colors } from 'src/utils/colors';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { REGISTER_NAVIGATION } from 'src/navigation_paths';
import { LOGIN_NAVIGATION } from 'src/navigation_paths';

function Footer() {
  const [newsletterInputValue, setNewsletterInputValue] = useState<string>('');
  const navigate = useNavigate();
  return (
    <Section colors={colors.secondary}>
      <Grid container spacing={3} style={{ color: `${colors.primary}` }}>
        <Grid item xs={12} sm={5} p={3}>
          <Typography variant="h3" color={colors.primary}>Recevez Toutes Nos Nouvelles</Typography>
          <Typography variant="body1">
            Tous les mois dans votre boite mail, des faits et chiffres, et des
            conseils qui vous inspirent.
          </Typography>
          <form>
            <TextField
              fullWidth={true}
              id="filled-basic"
              required={true}
              autoFocus={false}
              color="primary"
              label="Adresse email"
              variant="filled"
              sx={{
                background: `${colors.primary}`,
                borderRadius: '4px'
              }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              sx={{
                color: `${colors.grayWhite}`,
                borderRadius: "4px",
                borderWidth: '2px'
              }}
            >
              M'abonner à la newsletter
            </Button>
          </form>
        </Grid>
        <Grid item container xs={12} sm={5}>
          <Grid item xs={6}>
            <Typography variant='h5' sx={{textTransform: 'uppercase'}}>aller à</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h5' sx={{textTransform: 'uppercase'}}>à propos d'unistaf</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2}>
            <Typography variant='h5' sx={{textTransform: 'uppercase'}}>mon compte</Typography>
            <Button onClick={()=>navigate(LOGIN_NAVIGATION)} variant="text" sx={{pl:0}}>Se connecter</Button><br />
            <Button onClick={()=>navigate(REGISTER_NAVIGATION)} variant="text" sx={{pl:0}}>S'inscrire</Button>
        </Grid>
      </Grid>
      <hr />
    </Section>
  );
}

export default Footer;
