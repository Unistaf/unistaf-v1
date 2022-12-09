import { AccountBox, ContactMail, ContactPhone, Flag, PermContactCalendar, PersonPinCircle, School, Visibility, VisibilityOff, Wc, } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material"
import { borderRadius } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "src/redux/services/registerThunk";
import { AppDispatch } from "src/redux/store";
import iconLogoTrans from '../../assets/img/icon-logo-trans.png'
import '../../styles.css'
import InputRegister from "./InputRegister";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { emailRegex, passwordRegex } from '../../utils/regex';

interface State {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  confirmation: string,
  showPassword: boolean
}

interface iData {
  firstname: string,
  lastname: string,
  email: string,
  password: string
}

interface iDataRegister {
  data: {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    password_confirmation: string
  }
}

interface iResponse {
  [key: string]: any;
}

const Signup = () => {
  const navigate = useNavigate()

  const { formState: { errors }, setError } = useForm({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmation: '',
    }
  });
  const [values, setValues] = useState<State>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmation: '',
    showPassword: false
  });
  const [disabled, setDisabled] = useState(true)

  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    if (emailRegex.test(values.email) && (values.password === values.confirmation)) {
      if (values.firstname.length <= 2) {
        setError('firstname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
        return
      }
      if (values.lastname.length <= 2) {
        setError('lastname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
        return
      }
      setDisabled(false)
    }
  }, [values.firstname, values.lastname, values.email, values.password, values.confirmation])


  const handleChangeValues =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      // console.log(prop);
      if (prop === 'firstname') {
        if (values.firstname.length >= 3) {

        }
      }
      if (prop === 'email') {
        if (!emailRegex.test(event.target.value)) {
          // setError('confirmation', "password must match")
          setError('email', { type: 'custom', message: 'Email non valide' });
        } else {
          setError('email', { type: 'custom', message: '' });
        }
      }

      if (prop === 'confirmation') {
        if (values.password !== event.target.value) {
          // setError('confirmation', "password must match")
          setError('confirmation', { type: 'custom', message: 'Les deux mots de passe doivent correspondre' });
        } else {
          setError('confirmation', { type: 'custom', message: '' });
        }
      }

      if (prop === 'password') {
        let result = passwordRegex.test(event.target.value)
        if (result) {
          setError('password', { type: 'custom', message: '' });

          if (values.confirmation !== event.target.value) {
            // setError('confirmation', "password must match")
            setError('confirmation', { type: 'custom', message: 'Les deux mots de passe doivent correspondre' });
          } else {
            setError('confirmation', { type: 'custom', message: '' });
          }

        }
        else {
          setError('password', { type: 'custom', message: 'Au moins 8 caracteres, une lettre majuscule, minucsule, un nombre, un caractere special' });

        }
      }
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const arg: iDataRegister = {
      data: {
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirmation
      }
    }

    if (!emailRegex.test(values.email)) {
      setError('email', { type: 'custom', message: 'Email non valide' });
    }
    if((values.password !== values.confirmation)){
      return setError('confirmation', { type: 'custom', message: 'Les deux mots de passe doivent correspondre' });
    }
    if (values.firstname.length <= 2) {
      setError('firstname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
      return
    }
    if (values.lastname.length <= 2) {
      setError('lastname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
      return
    }

    // ! email: kajoxo@mailinator.com - lawef@mailinator.com
    // ! pwd: Badji2002++
    dispatch(registerThunk(arg)).then((res: iResponse) => {
      if (res.type === 'user/register/rejected') {
        // console.log(res);
        if (res.payload.response.data) {
          const data = JSON.parse(res.payload.response.data)
          if (data.email) {
            setError('email', { type: 'custom', message: 'Email indisponible' });
            console.log(data.email);
          }
          return
        }
        return
      }
      return navigate('/')
    })

    // console.log('Hello je me suis inscrit');
  };

  return (
    <Box sx={{ with: '100vw', bgcolor: '#002984' }}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid
          item xs={12}
          sm={4}
          sx={{
            height: '100vh',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>Un texte marketing ou design</h1>
        </Grid>
        <Grid
          className="signup"
          item xs={12}
          sm={8}
          sx={{
            py: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // alignItems: 'center',
            borderRadius: '50px 0 0 50px',
            bgcolor: '#F2F5F9'
          }}
        >
          <Grid
            sx={{
              display: 'flex'
            }}
          >
            <Grid
              sx={{
                width: '90px',
                borderRadius: '5%',
                border: '2px solid #002984',
                mx: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img
                src={iconLogoTrans}
                alt="Logo UNISTAF"
                style={{
                  width: '100%',
                  height: 'auto',
                  margin: 'auto auto'
                }}
              />
            </Grid>
            <Grid>
              <h1>Bienvenue !</h1>
              <p>
                Inscrivez-vous pour accéder à des centaines de choix de filières
              </p>
            </Grid>
          </Grid>
          <Grid>
            <form>
              <Grid container columnSpacing={{ xs: 0.5, sm: 1, md: 2 }} rowSpacing={{ xs: 0.5, sm: 1, md: 2 }} sx={{ pr: 3, pt: 3 }}>
                <Grid item sm={6} xs={12}>
                  <InputRegister
                    ariaLabel="firstname" id="outlined-adornment-firstname"
                    htmlFor="outlined-adornment-firstname" handleMouseDown={handleMouseDown}
                    value={values.firstname}
                    handleChangeValues={handleChangeValues('firstname')}
                    type="text"
                    inputLabel="Prénom"
                    label="firstname"
                    position="end"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormControl sx={{ width: '100%', my: 1 }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-nom">Nom</InputLabel>
                    <OutlinedInput
                      error={errors.lastname?.message ? true : false}
                      required
                      id="outlined-adornment-nom"
                      value={values.lastname}
                      type='text'
                      onChange={handleChangeValues('lastname')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            arial-label="lastname"
                            onMouseDown={handleMouseDown}
                            edge="end"
                          >
                            <AccountBox />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="nom"
                    />
                    <span className="error">{
                      errors.lastname?.message
                    }</span>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-email">address Email</InputLabel>
                    <OutlinedInput
                      error={errors.email?.message ? true : false}
                      required
                      id="outlined-adornment-email"
                      value={values.email}
                      type='email'
                      onChange={handleChangeValues('email')}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            arial-label="email"
                            onMouseDown={handleMouseDown}
                            edge="end"
                          >
                            <ContactMail />
                          </IconButton>
                        </InputAdornment>
                      }
                      label="address Email"
                    />
                    <span className="error">{
                      errors.email?.message
                    }</span>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Mot(s) de passe</InputLabel>
                    <OutlinedInput
                      error={errors.password?.message ? true : false}
                      id="outlined-adornment-password"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={handleChangeValues('password')}
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
                    <span className="error">{
                      errors.password?.message
                    }</span>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-confirmation">Confirmation</InputLabel>
                    <OutlinedInput
                      error={errors.confirmation?.message ? true : false}
                      id="outlined-adornment-confirmation"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.confirmation}
                      onChange={handleChangeValues('confirmation')}
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
                      label="confirmation"
                    />
                    <span className="error">{
                      errors.confirmation?.message
                    }</span>
                  </FormControl>
                </Grid>
                <FormGroup>
                  <FormControlLabel
                    sx={{ height: "100%", my: "auto", ml: 1, mt: 2 }}
                    control={<Checkbox />}
                    label="J'accepte les conditions d'utilisation"
                  />
                </FormGroup>
                <Button
                  sx={{ mt: 2, ml: 1, p: 1.5 }}
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={disabled}
                >
                  Inscription
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
