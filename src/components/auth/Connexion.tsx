import React from 'react';
import {
  FormControl,
  styled,
  Grid,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from '@mui/material';
import {
  AlternateEmail,
  Google,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import iconLogoTrans from '../../assets/img/icon-logo-trans.png';
import { Link } from 'react-router-dom';
import students from '../../assets/img/students.png'

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const Connexion = () => {
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false
  });

  const handleChange =
    (prop: keyof State) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: e.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("I'm connected");
  };
  const handleConnectGoogle = (e) => {
    e.preventDefault();
    console.log('Connect me witch google');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            bgcolor: '#002984',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <img style={{width: '90%'}} src={students} alt="Happy student" />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <Grid
            className="headerFormContainer"
            sx={{
              textAlign: 'center'
            }}
          >
            <Grid
              className="imgItem"
              sx={{
                width: '60px',
                height: '60px',
                mx: 'auto',
                borderRadius: '50%',
                bgcolor: '#d3d3d3'
              }}
            >
              <img src={iconLogoTrans} width="60px" alt="Logo UNISTAF" />
            </Grid>
            <div className="headerFormText">
              <h1>Connexion</h1>
              <p>
                Connectez vous pour accéder à des centaines <br /> de choix de
                filière
              </p>
            </div>
          </Grid>
          <Grid
            className="formContainer"
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">
                Adresse Email
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                value={values.email}
                onChange={handleChange('email')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      arial-label="email"
                      onMouseDown={handleMouseDown}
                      edge="end"
                    >
                      <AlternateEmail />
                    </IconButton>
                  </InputAdornment>
                }
                label="Adresse email"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Mot de passe
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDown}
                      edge="end"
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Mot(s) de passe"
              />
              <Link
                to=""
                style={{
                  textAlign: 'right',
                  display: 'inline-block',
                  width: '100%',
                  marginTop: '0.5rem',
                  color: '#5569ff'
                }}
              >
                Mot de passe oublié ?
              </Link>
              <Button type="submit" sx={{ mt: 2 }} variant="contained" onClick={handleSubmit}>
                Connectez-vous
              </Button>

              <Button
                sx={{ mt: 1 }}
                variant="outlined"
                onClick={handleConnectGoogle}
              >
                <Google />
                <span>Connectez-vous avec Google</span>
              </Button>
            </FormControl>
          </Grid>
          <Grid
            sx={{
              position: 'absolute',
              bottom: '0'
            }}
          >
            <p>
              N'avez-vous pas de compte ?
              <Link to="/signup">Inscrivez-vous ici!</Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Connexion;
