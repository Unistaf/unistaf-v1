import { Box, Grid, Typography } from "@mui/material";
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import { colors } from "src/utils/colors";


interface DomaineProps {
    icon: string;
    formation: string;
  }
  
export function DomaineBox(domaine: DomaineProps) {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Box
          display="flex"
          alignItems="center"
          sx={{
            border: `1px solid ${colors.secondary}`,
            borderRadius: `10px`,
            minHeight: `100px`,
            padding: `0 20px`,
            gap: `20px`
          }}
        >
          <CodeOutlinedIcon
            style={{
              color: `${colors.secondary}`,
              fontSize: '2rem'
            }}
          />
          <Typography
          variant="body1"
            sx={{
              fontSize: '1.5rem',
              color: `${colors.dark}`,
              '@media(max-width: 400px)':{
                fontSize: "1.2rem"
              }
            }}
          >
            Formation<br/>{domaine.formation}
          </Typography>
        </Box>
      </Grid>
    );
  }