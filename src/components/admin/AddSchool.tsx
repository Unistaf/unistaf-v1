import { MotionPhotosAuto, AddPhotoAlternate, AddToPhotos, Label } from '@mui/icons-material';
import { Box, Button, Checkbox, Fab, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import React from 'react';

function AddSchool() {
  return (
    <Box sx = {{pt: 2}}>
        <Typography variant="h1" component="h2" sx = {{p:0, mx:1}}>
            Ajoutez une école :
        </Typography>
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={4} >
                    <FormControl
                        sx={{width: '100%'}}
                        variant="outlined"
                        >
                        <InputLabel htmlFor="outlined-adornment-nameSchool">
                            Nom de l'école
                        </InputLabel>
                        <OutlinedInput
                        required
                        id="outlined-adornment-nameSchool"
                        type="text"
                        label="nomDeLécole"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <FormControl
                        sx={{ width: '100%'}}
                        variant="outlined"
                        >
                        <InputLabel htmlFor="outlined-adornment-schoolAccronyme">
                            L'accronyme
                        </InputLabel>
                        <OutlinedInput
                        required
                        id="outlined-adornment-schoolAccronyme"
                        type="text"
                        label="l'accronyme"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <FormControl
                        sx={{width: '100%'}}
                        variant="outlined"
                        >
                        <InputLabel htmlFor="outlined-adornment-slogant">
                            Slogant
                        </InputLabel>
                        <OutlinedInput
                        required
                        id="outlined-adornment-slogant"
                        type="text"
                        label="slogant"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <TextField
                        id="outlined-multiline-static"
                        label="A propos de l'école"
                        multiline
                        rows={10}
                        sx={{width: '100%'}}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <TextField
                        id="outlined-multiline-static"
                        label="Les avantages proposés"
                        multiline
                        rows={10}
                        sx={{width: '100%'}}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={4} >
                    <TextField
                        id="outlined-multiline-static"
                        label="Conditions générales d'accès"
                        multiline
                        rows={10}
                        sx={{width: '100%'}}
                    />
                </Grid>
                <Grid container item spacing = {2} xs={12} md={6} lg={12}>
                <Grid item xs={12} lg={4}>
                    <FormControl
                        sx={{width: '100%'}}
                        variant="outlined"
                        >
                        <InputLabel htmlFor="outlined-adornment-localisation">
                            Localisation
                        </InputLabel>
                        <OutlinedInput
                        required
                        id="outlined-adornment-localisation"
                        type="link"
                        label="localisation"
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={4} >
                    <FormControl sx={{width: '100%'}} component="fieldset" variant="standard">
                        <FormLabel component="legend">Habilitées par:</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox name="Habilitation" />
                                }
                                label="ANAQ-SUP"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} lg={4}>
                    <FormControl sx={{width: '100%'}} component="fieldset" variant="standard">
                        <FormLabel component="legend">Membre de:</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                <Checkbox name="menbre" />
                                }
                                label="AUF"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl
                        sx={{width: '100%', textAlign: 'center'}}
                        >
                        <label htmlFor="upload-logo">
                            <input
                                style={{ display: "none" }}
                                id="upload-logo"
                                name="upload-logo"
                                type="file"
                            />
                            <Fab 
                                variant="extended"
                                component = "span"
                                aria-label = "add"
                                color = "primary"
                            >
                                <MotionPhotosAuto sx={{mr: 1 }}/>
                                Ajouter le logo
                            </Fab>
                        </label>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl
                        sx={{width: '100%', textAlign: 'center'}}
                        >
                        <label htmlFor="upload-logo">
                            <input
                                style={{ display: "none" }}
                                id="upload-logo"
                                name="upload-logo"
                                type="file"
                            />
                            <Fab 
                                variant="extended"
                                component = "span"
                                aria-label = "add"
                                color = "primary"
                            >
                                <AddPhotoAlternate sx={{mr: 1 }}/>
                                Ajouter l'image de l'école
                            </Fab>
                        </label>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={4}
                    sx={{width: '100%', textAlign: 'center'}}
                >
                    <Fab 
                        variant="extended"
                        component = "span"
                        aria-label = "add"
                        color = "primary"
                    >
                        <AddToPhotos sx={{mr: 1 }}/>
                        Ajouter les facultées
                    </Fab>
                </Grid>
                <Grid
                    sx = {{
                        width: "100%",
                        textAlign: 'center',
                        pt: 3
                    }}
                >
                    <Button sx={{ m: 2, py: 1.5, minWidth: '150px' }} variant="contained" color = 'error' >Annuler</Button>
                    <Button sx={{ m: 2, py: 1.5, minWidth: '150px' }} variant="contained" color = 'success' >Valider</Button>
                </Grid>
            </Grid>
        </form>
    </Box>
  );
}

export default AddSchool;
