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
  Save,
  Visibility,
  VisibilityOff
} from '@mui/icons-material';
import iconLogoTrans from '../../assets/img/icon-logo-trans.png';
import iconGoogle from '../../assets/img/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import students from '../../assets/img/students.png'
import { AppDispatch } from 'src/redux/store';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'src/redux/services/loginThunk';
import InputReuse from '../reusable/InputReuse';
import { useForm } from 'react-hook-form';
import { setCurrentUser } from 'src/redux/slices/user.slice';
import { ADMIN_DASHBOARD_NAVIGATION, REGISTER_NAVIGATION } from 'src/navigation_paths';
import { Mail } from '@mui/icons-material';
import UnistafButton from '../reusable/UnistafButton';
import { unistafColors } from 'src/utils/colors';

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
  const navigate = useNavigate()

  const { formState: { errors }, setError } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
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

    dispatch(loginThunk(arg)).then(res => {
      if (res.type === 'user/login/fulfilled') {
        if (res.payload.access_token && res.payload.user.slug) {
          dispatch(setCurrentUser(res.payload))
          return navigate(ADMIN_DASHBOARD_NAVIGATION)
        }
      }
      if (res.type === 'user/login/rejected') {
        // console.log('rejected');
        if (!res.payload.response) {
          console.log('network error');

          // setError('email', { type: 'custom', message: 'Verifier si vous vont identifiants sont corrects' });
          return setError('email', { type: 'custom', message: 'Erreur de connexion internet' });
        }
        console.log(res.payload);
        if (res.payload.response.statusText === "Unauthorized") {
          console.log('suer error');
          return setError('email', { type: 'custom', message: 'Vos identifiants sont incorrectes' });
        }
      }
    })
  };

  const handleConnectGoogle = (e) => {
    e.preventDefault();
    console.log('Connect me witch google');
  };

  return (
    // <Box sx={{ width: '100%', height: '100vh' }} className="login_container">
    //   <Grid
    //     className='left-form'
    //     item
    //     sx={{
    //       bgcolor: '#002984',
    //       color: '#fff',
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center'
    //     }}
    //   >
    //     <img style={{ width: '80%' }} src={students} alt="Happy students" />
    //   </Grid>
    //   <Grid
    //     item
    //     className='right-form'
    //   >
    //     <Grid
    //       className="headerFormContainer"
    //       sx={{
    //         textAlign: 'center',
    //         padding: 1.5
    //       }}
    //     >
    //       <Grid
    //         className="imgItem"
    //         sx={{
    //           width: '70px',
    //           height: '70px',
    //           mx: 'auto',
    //           borderRadius: '50%',
    //           border: '2px solid #002984'
    //         }}
    //       >
    //         <img src={iconLogoTrans} width="60px" alt="Logo UNISTAF" />
    //       </Grid>
    //       <div className="headerFormText">
    //         <h1>Connexion</h1>
    //         <p style={{maxWidth: '350px', margin: 'auto'}}>
    //           Connectez vous pour accéder à des centaines de choix de
    //           filières
    //         </p>
    //       </div>
    //     </Grid>
    //     <form className="formContainer">
    //       <Grid
    //         sx={{
    //           width: '100%',
    //           display: 'flex',
    //           flexDirection: 'column'
    //         }}
    //       >
    //         <FormControl sx={{ m: 1, p: 0 }} variant="outlined">
    //           <InputReuse
    //             error={errors.email?.message ? true : false}
    //             htmlFor="outlined-adornment-email"
    //             inputLabel="Adresse Email"
    //             id="outlined-adornment-email"
    //             value={values.email}
    //             type="email"
    //             handleChangeValues={handleChange('email')}
    //             position="end"
    //             ariaLabel="email"
    //             icon={<Mail />}
    //             label="Adresse email"
    //             onClick={null}
    //           />
    //           <span className="error">{
    //             errors.email?.message
    //           }</span>
    //         </FormControl>
    //         <FormControl sx={{ m: 1 }} variant="outlined">
    //           <InputReuse
    //             error={errors.email?.message ? true : false}
    //             htmlFor="outlined-adornment-password"
    //             inputLabel="Mot(s) de passe"
    //             id="outlined-adornment-password"
    //             value={values.password}
    //             type={values.showPassword ? 'text' : 'password'}
    //             handleChangeValues={handleChange('password')}
    //             position="end"
    //             ariaLabel="toggle password visibility"
    //             icon={values.showPassword ? (
    //               <VisibilityOff />
    //             ) : (
    //               <Visibility />
    //             )}
    //             label="Mot(s) de passe"
    //             onClick={handleClickShowPassword}
    //           />
    //           <span className="error">{
    //             errors.email?.message
    //           }</span>

    //         </FormControl>
    //         <Link style={{ textAlign: 'right', marginTop: '0.5rem', color: unistafColors[1] }} to="/password">Mot(s) de passe oublié ? </Link>
    //         <UnistafButton
    //           bgColor={unistafColors[1]}
    //           disabled={false}
    //           handleSubmit={handleSubmit}
    //           loading={false}
    //         >
    //           Connectez-vous
    //         </UnistafButton>
    //         {/* <Button
    //             sx={{ mt: 2, p: 1.5 }}
    //             variant="contained"
    //             onClick={handleSubmit}
    //           >
    //             Connectez-vous
    //           </Button> */}
    //         <Button
    //           sx={{ mt: 2, ml: 1, px: 5, py: 1.5 }}
    //           variant="outlined"
    //           onClick={handleConnectGoogle}
    //         >
    //           {/* <Google /> */}
    //           <img src={iconGoogle} alt="Icon Google" width={'25px'} />
    //           <span>Connectez-vous avec Google</span>
    //         </Button>
    //       </Grid>
    //     </form>
    //     <Grid
    //       sx={{
    //         position: 'absolute',
    //         bottom: '0'
    //       }}
    //     >
    //       <p>
    //         N'avez-vous pas de compte ?
    //         <Link to={REGISTER_NAVIGATION}> Inscrivez-vous ici!</Link>
    //       </p>
    //     </Grid>
    //   </Grid>

    // </Box>
    <Box className="login_container">
      <div className='left-form'>
        <img style={{ width: '80%' }} src={students} alt="Happy students" />
      </div>
      <div className='right-form'>
        <div
          className="headerFormContainer"
        >
          <div
            className="imgItem"
            style={{
              width: '70px',
              height: '70px',
              margin: 'auto',
              borderRadius: '50%',
              border: '2px solid #002984'
            }}
          >
            <img src={iconLogoTrans} width="60px" alt="Logo UNISTAF" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1 className='h2--title'>Connexion</h1>
            <p style={{ maxWidth: '350px', margin: 'auto', padding: '0, 1rem' }}>
              Connectez vous pour accéder à des centaines de choix de
              filières
            </p>
          </div>
        </div>
        <form className="formContainer">
          <Grid
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <FormControl sx={{ m: 1, p: 0 }} variant="outlined">
              <InputReuse
                error={errors.email?.message ? true : false}
                htmlFor="outlined-adornment-email"
                inputLabel="Adresse Email"
                id="outlined-adornment-email"
                value={values.email}
                type="email"
                handleChangeValues={handleChange('email')}
                position="end"
                ariaLabel="email"
                icon={<Mail />}
                label="Adresse email"
                onClick={null}
              />
              <span className="error">{
                errors.email?.message
              }</span>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined">
              <InputReuse
                error={errors.email?.message ? true : false}
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
              <span className="error">{
                errors.email?.message
              }</span>

            </FormControl>
            <Link style={{ textAlign: 'right', marginTop: '0.5rem', color: unistafColors[1] }} to="/password">Mot(s) de passe oublié ? </Link>
            <UnistafButton
              color='#fff'
              bgColor={unistafColors[1]}
              disabled={false}
              handleSubmit={handleSubmit}
              loading={false}
              icon={<Save />}
            >
              Connectez-vous
            </UnistafButton>
            {/* <Button
                sx={{ mt: 2, p: 1.5 }}
                variant="contained"
                onClick={handleSubmit}
              >
                Connectez-vous
              </Button> */}
            <UnistafButton
            className='google-btn'
              bgColor="#fff"
              color="#000"
              disabled={false}
              handleSubmit={handleSubmit}
              loading={false}
              icon={<img src={iconGoogle} alt="Icon Google" width={'25px'} />}
            >
              Connectez-vous avec Google
            </UnistafButton>
          </Grid>
        </form>
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          N'avez-vous pas de compte ?
          <Link to={REGISTER_NAVIGATION}> Inscrivez-vous ici!</Link>
        </p>
      </div>
    </Box>
  );
};

export default Connexion;
