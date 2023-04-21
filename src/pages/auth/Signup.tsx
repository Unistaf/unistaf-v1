import { AccountBox, ContactMail, ContactPhone, Flag, Mail, PermContactCalendar, PersonPinCircle, Save, School, Visibility, VisibilityOff, Wc, } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material"
import { borderRadius } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { registerThunk } from "src/redux/services/registerThunk";
import { AppDispatch } from "src/redux/store";
import iconLogoTrans from '../../assets/img/logo.png'
import '../../styles.css'
import InputRegister from "../../components/reusable/InputRegister";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { emailRegex, passwordRegex } from '../../utils/regex';
import InputReuse from "../../components/reusable/InputReuse";
import { LOGIN_NAVIGATION } from "src/navigation_paths";
import { LoadingButton } from "@mui/lab";
import { unistafColors } from '../../utils/colors';
import UnistafButton from "../../components/reusable/UnistafButton";
import { Link } from "react-router-dom";

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
  const [loading, setLoading] = useState(false)

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
    if (emailRegex.test(values.email) && passwordRegex.test(values.password) && passwordRegex.test(values.confirmation) && values.password === values.confirmation) {

      if (values.firstname.length <= 2) {
        setDisabled(true)
        setError('firstname', { type: 'custom', message: 'Mettez au moins 3 caracteres' });
        return
      }
      if (values.lastname.length <= 1) {
        setDisabled(true)
        setError('lastname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
        return
      }
      setError('firstname', { type: 'custom', message: '' });
      setError('lastname', { type: 'custom', message: '' });
      setDisabled(false)
    }
  }, [values.firstname, values.lastname, values.email, values.password, values.confirmation])


  const handleChangeValues =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {

      if (prop === 'firstname') {
        if (event.target.value.length <= 2) {
          setDisabled(true)
          setError('firstname', { type: 'custom', message: 'Mettez au moins 3 caracteres' });
        }
        else {
          setError('firstname', { type: 'custom', message: '' });
        }
      }
      if (prop === 'lastname') {
        if (event.target.value.length <= 1) {
          setDisabled(true)
          setError('lastname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
        }
        else {
          setError('lastname', { type: 'custom', message: '' });
        }
      }
      if (prop === 'email') {
        if (!emailRegex.test(event.target.value)) {
          // setError('confirmation', "password must match")
          setDisabled(true)
          setError('email', { type: 'custom', message: 'Email non valide' });
        } else {
          setError('email', { type: 'custom', message: '' });
        }
      }

      if (prop === 'confirmation') {
        if (values.password !== event.target.value) {
          // setError('confirmation', "password must match")
          setDisabled(true)
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
            setDisabled(true)
            setError('confirmation', { type: 'custom', message: 'Les deux mots de passe doivent correspondre' });
          } else {
            setError('confirmation', { type: 'custom', message: '' });
          }

        }
        else {
          setDisabled(true)
          setError('password', { type: 'custom', message: 'Au moins 8 caractères, une lettre majuscule, minuscule, un nombre, un caractère special' });

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
    setLoading(true)
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
      return
    }
    if ((values.password !== values.confirmation)) {
      setLoading(false)
      return setError('confirmation', { type: 'custom', message: 'Les deux mots de passe doivent correspondre' });
    }
    if (values.firstname.length <= 2) {
      setLoading(false)
      setError('firstname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
      return
    }
    if (values.lastname.length <= 1) {
      setLoading(false)
      setError('lastname', { type: 'custom', message: 'Mettez au moins 2 caracteres' });
      return
    }

    // ! email: kajoxo@mailinator.com - lawef@mailinator.com
    // ! pwd: Badji2002++
    dispatch(registerThunk(arg)).then((res: iResponse) => {
      setLoading(false)
      if (res.type === 'user/register/rejected') {
        console.log('network error ', res.payload);
        if (res.payload.response.data) {
          const data = JSON.parse(res.payload.response.data)
          if (data.email) {
            setError('email', { type: 'custom', message: 'Email indisponible' });
          }
          return
        }
        if (!res.payload.response) {

          // setError('email', { type: 'custom', message: 'Verifier si vous vont identifiants sont corrects' });
          return setError('email', { type: 'custom', message: 'Erreur de connexion internet' });
        }
        return
      }
      return navigate(LOGIN_NAVIGATION)
    })
  };

  return (
    <Box sx={{
      width: '100vw',
      py: 5,
      flexDirection: 'column',
      justifyContent: 'center',
      bgcolor: '#F2F5F9',
      maxWidth: 700,
      margin: '2rem auto',
      padding: 2,
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    }}>
      <div style={{
        width: '90px',
        borderRadius: '5%',
        border: '2px solid #002984',
        textAlign: 'center',
      }}>
        <img
          src={iconLogoTrans}
          alt="Logo UNISTAF"
          style={{
            width: '100%',
            height: 'auto',
            margin: 'auto auto'
          }}
        />
      </div>
      <h1>Bienvenue !</h1>
      <p>
        Inscrivez-vous pour accéder à des centaines de choix de filières
      </p>
      <form>
        <Grid item sm={6} xs={12}>
          <FormControl sx={{ width: '100%', my: 1 }} variant="outlined">
            <InputReuse
              error={errors.firstname?.message ? true : false}
              htmlFor="outlined-adornment-firstname"
              inputLabel="Prénom"
              id="outlined-adornment-firstname"
              value={values.firstname}
              type="text"
              handleChangeValues={handleChangeValues('firstname')}
              position="end"
              ariaLabel="firstname"
              icon={<AccountBox />}
              label="firstname"
              onClick={null}
            />
            <span className="error">{
              errors.firstname?.message
            }</span>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl sx={{ width: '100%', my: 1 }} variant="outlined">
            <InputReuse
              error={errors.lastname?.message ? true : false}
              htmlFor="outlined-adornment-nom"
              inputLabel="Nom"
              id="outlined-adornment-nom"
              value={values.lastname}
              type="text"
              handleChangeValues={handleChangeValues('lastname')}
              position="end"
              ariaLabel="lastname"
              icon={<AccountBox />}
              label="nom"
              onClick={null}
            />
            <span className="error">{
              errors.lastname?.message
            }</span>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
            <InputReuse
              error={errors.email?.message ? true : false}
              htmlFor="outlined-adornment-email"
              inputLabel="Addresse Email"
              id="outlined-adornment-email"
              value={values.email}
              type="email"
              handleChangeValues={handleChangeValues('email')}
              position="end"
              ariaLabel="email"
              icon={<Mail />}
              label="Addresse Email"
              onClick={null}
            />
            <span className="error">{
              errors.email?.message
            }</span>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
            <InputReuse
              error={errors.password?.message ? true : false}
              htmlFor="outlined-adornment-password"
              inputLabel="Mot(s) de passe"
              id="outlined-adornment-password"
              value={values.password}
              type={values.showPassword ? 'text' : 'password'}
              handleChangeValues={handleChangeValues('password')}
              position="end"
              ariaLabel="toggle password visibility"
              icon={values.showPassword ? <VisibilityOff /> : <Visibility />}
              label="Mot(s) de passe"
              onClick={handleClickShowPassword}
            />
            <span className="error">{
              errors.password?.message
            }</span>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
            <InputReuse
              error={errors.confirmation?.message ? true : false}
              htmlFor="outlined-adornment-confirmation"
              inputLabel="Confirmer"
              id="outlined-adornment-confirmation"
              value={values.confirmation}
              type={values.showPassword ? 'text' : 'password'}
              handleChangeValues={handleChangeValues('confirmation')}
              position="end"
              ariaLabel="toggle password visibility"
              icon={values.showPassword ? <VisibilityOff /> : <Visibility />}
              label="confirmation"
              onClick={handleClickShowPassword}
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
        <UnistafButton
          className='btn--font-size'
          color="#fff"
          bgColor={unistafColors[1]}
          disabled={disabled}
          handleSubmit={handleSubmit}
          loading={loading}
          icon={<Save />}
        >
          Inscription
        </UnistafButton>
        {/* <LoadingButton
          sx={{ mt: 2, ml: 1, px: 5, py: 1.5, backgroundColor: unisafColors[1] }}
            size="small"
            disabled={false}
            onClick={handleSubmit}
            loading={loading}
            loadingPosition="end"
            variant="contained"
          >
            Inscription
          </LoadingButton> */}

      </form>
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        Vous avez deja un compte ?
        <Link to={LOGIN_NAVIGATION}> Connectez-vous ici</Link>
      </p>
    </Box>
    // </Box>
  );
};

export default Signup;
