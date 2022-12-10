import React, { useState } from 'react';
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
import iconGoogle from '../../assets/img/google.svg';
import { Link } from 'react-router-dom';
import students from '../../assets/img/students.png'
import { AppDispatch } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'src/redux/services/loginThunk';
import InputReuse from '../reusable/InputReuse';

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

interface iDataLogin {
  data: {
    email: string,
    password: string
  }
}

const Connexion = () => {
  const dispatch: AppDispatch = useDispatch()

  const [values, setValues] = useState({
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

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const arg: iDataLogin = {
      data: {
        email: values.email,
        password: values.password,
      }
    }

    dispatch(loginThunk(arg))
  };

  const handleConnectGoogle = (e) => {
    e.preventDefault();
    console.log('Connect me witch google');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
          <img style={{ width: '90%' }} src={students} alt="Happy students" />
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
                width: '70px',
                height: '70px',
                mx: 'auto',
                borderRadius: '50%',
                border: '2px solid #002984'
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
          <form style={{ width: '70%' }}>
            <Grid
              className="formContainer"
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <FormControl sx={{ m: 1, p: 0 }} variant="outlined">
                <InputReuse
                  htmlFor="outlined-adornment-email"
                  inputLabel="Adresse Email"
                  id="outlined-adornment-email"
                  value={values.email}
                  type="email"
                  handleChangeValues={handleChange('email')}
                  position="end"
                  ariaLabel="email"
                  icon={<AlternateEmail />}
                  label="Adresse email"
                  onClick={null}
                />   
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="outlined">
                <InputReuse
                  htmlFor="outlined-adornment-password"
                  inputLabel="Mot(s) de passe"
                  id="outlined-adornment-password"
                  value={values.password}
                  type={values.showPassword ? 'text' : 'password'}
                  handleChangeValues={handleChange('password')}
                  position="end"
                  ariaLabel="toggle password visibility"
                  icon={values.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                  label="Mot(s) de passe"
                  onClick={handleClickShowPassword}
                />
                
                <Link style={{ textAlign: 'right', marginTop: '0.5rem', color: '#002984' }} to="/password">Mot(s) de passe oublié ? </Link>
                <Button
                  sx={{ mt: 2, p: 1.5 }}
                  variant="contained"
                  onClick={handleSubmit}
                >
                  Connectez-vous
                </Button>
                <Button
                  sx={{ mt: 1, p: 1.5 }}
                  variant="outlined"
                  onClick={handleConnectGoogle}
                >
                  {/* <Google /> */}
                  <img src={iconGoogle} alt="Icon Google" width={'25px'} />
                  <span>Connectez-vous avec Google</span>
                </Button>
              </FormControl>
            </Grid>
          </form>
          <Grid
            sx={{
              position: 'absolute',
              bottom: '0'
            }}
          >
            <p>
              N'avez-vous pas de compte ?
              <Link to="/signup"> Inscrivez-vous ici!</Link>
            </p>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Connexion;
