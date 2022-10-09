import { Box, Grid } from "@mui/material"
import { borderRadius } from "@mui/system"

const Signup = () => {
  return (
    <Box sx = {{with:'100vw', bgcolor: '#002984'}}>
      <Grid  container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid 
          item xs={12} md={3}
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
          item xs={12} md={9}
          sx = {{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50px 0 0 50px',
            bgcolor: '#F2F5F9'
          }}
        >
          <h1>les champs de saisie</h1>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Signup