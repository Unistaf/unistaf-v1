import { AccountBox, ContactMail, ContactPhone, Flag, PermContactCalendar, PersonPinCircle, School, Visibility, VisibilityOff, Wc,  } from "@mui/icons-material";
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField } from "@mui/material"
import { borderRadius } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { API } from "src/api/api";
import { SIGNUP_PATH } from "src/api/paths";
import iconLogoTrans from '../../assets/img/icon-logo-trans.png'
import '../../styles.css'

interface State {
  firstname: string;
  lastname: string;
  birthdate: Date;
  birthplace: string;
  sexe: string;
  nationalite: string;
  pays_de_residence: string;
  address: string;
  email: string;
  phone: number;
  level: string;
  password: string;
  confirmation: string;
  showPassword: boolean;
}

const Signup = () => {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    birthdate: null,
    birthplace: '',
    sexe: '',
    nationalite: '',
    pays_de_residence: '',
    address: '',
    email: '',
    phone: null,
    level: '',
    password: '',
    confirmation: '',
    showPassword: false
  });

  const handleChangeValues =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    await axios.post(SIGNUP_PATH, values)
    // console.log('Hello je me suis inscrit');
  };

  return (
    <Box sx = {{with:'100vw', bgcolor: '#002984'}}>
      <Grid  container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid 
          item xs={12} sm={4}
          sx = {{
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
          item xs={12} sm={8}
          sx = {{
            py:5,
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
                Inscrivez-vous pour accéder à des centaines de choix de filière
              </p>
            </Grid>
          </Grid>
          <Grid>
            <form>
              <Grid container columnSpacing={{ xs: 0.5, sm: 1, md: 2 }} rowSpacing={{ xs: 0.5, sm: 1, md: 2 }} sx = {{pr: 3, pt: 3}}>
                <Grid item sm = {6} xs = {12}>
                  <FormControl sx={{width: '100%', my: 1}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-firstname">Prénom</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-firstname"
                        value={values.firstname}
                        type = 'text'
                        onChange={handleChangeValues('firstname')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              arial-label = "firstname"
                              onMouseDown={handleMouseDown}
                              edge="end"
                            >
                              <AccountBox />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="firstname"
                      />
                  </FormControl>
                </Grid>
                <Grid item sm = {6} xs = {12}>
                  <FormControl sx={{width: '100%', my: 1}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-nom">Nom</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-nom"
                        value={values.lastname}
                        type = 'text'
                        onChange={handleChangeValues('lastname')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              arial-label = "lastname"
                              onMouseDown={handleMouseDown}
                              edge="end"
                            >
                              <AccountBox />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="nom"
                      />
                  </FormControl>
                </Grid>
                <Grid item xs = {12} sm = {3} md = {5}>
                  <FormControl sx={{ my: 1, width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-date">Date de Naissance</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-date"
                        value={values.birthdate}
                        type = 'date'
                        onChange={handleChangeValues('birthdate')}
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton
                              arial-label = "birthdate"
                              onMouseDown={handleMouseDown}
                              edge="start"
                            >
                              <PermContactCalendar />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="date de naissance"
                      />
                  </FormControl>
                </Grid>
                <Grid item xs = {12} sm = {3} md = {2}>
                  <FormControl sx={{ my: 1, width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-sexe">Sexe</InputLabel>
                    <Select
                      required
                      labelId="select-sexe-label"
                      id="outlined-adornment-sexe"
                        value={values.sexe}
                        type = 'text'
                        onChange={handleChangeValues('sexe')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              arial-label = "sexe"
                              onMouseDown={handleMouseDown}
                              edge="end"
                            >
                              <Wc />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="sexe"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="male">Masculin</MenuItem>
                      <MenuItem value="femelle">Feminin</MenuItem>
                      <MenuItem value="autre">Autre</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs = {12} sm = {6} md = {5}>
                  <FormControl sx={{ my: 1,width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-address">address de résidence</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-address"
                        value={values.address}
                        type = 'text'
                        onChange={handleChangeValues('address')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              arial-label = "nom"
                              onMouseDown={handleMouseDown}
                              edge="end"
                            >
                              <PersonPinCircle />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="address de residence"
                      />
                  </FormControl>
                </Grid>
                <Grid item xs = {12} sm = {6}>
                  <FormControl sx={{  my: 1,width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-email">address Email</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-email"
                        value={values.email}
                        type = 'email'
                        onChange={handleChangeValues('email')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              arial-label = "email"
                              onMouseDown={handleMouseDown}
                              edge="end"
                            >
                              <ContactMail />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="address Email"
                      />
                  </FormControl>
                </Grid>
                <Grid item xs = {12} sm = {6}>
                  <FormControl sx={{  my: 1,width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-tel">Numéro de téléphone</InputLabel>
                      <OutlinedInput
                        required
                        id="outlined-adornment-tel"
                        value={values.phone}
                        type = 'tel'
                        onChange={handleChangeValues('phone')}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              arial-label = "phone"
                              onMouseDown={handleMouseDown}
                              edge="end"
                            >
                              <ContactPhone />
                            </IconButton>
                          </InputAdornment>
                        }
                        label="phone de telephone"
                      />
                  </FormControl>
                </Grid>
                <Grid item xs = {12} sm = {6}>
                  <FormControl sx={{  my: 1,width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Mot(s) de passe</InputLabel>
                    <OutlinedInput
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
                  </FormControl>
                </Grid>
                <Grid item xs = {12} sm = {6}>
                  <FormControl sx={{  my: 1,width: '100%'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-confirmation">Confirmation</InputLabel>
                    <OutlinedInput
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
                  </FormControl>
                </Grid>
                <FormGroup>
                  <FormControlLabel
                    sx = {{height: "100%", my: "auto", ml: 1, mt: 2}}
                    control={<Checkbox />} 
                    label="J'accepte les conditions d'utilisation" 
                  />
                </FormGroup>
                <Button
                    sx = {{mt:2, ml: 1, p: 1.5}}
                    variant="contained"
                    onClick={handleSubmit}
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
