import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import whiteLogo from '../../assets/img/logo-blanc.png';
import { SCHOOL_FIND_PAGE_NAVIGATION, STATIC_HOME_PAGE_NAVIGATION } from 'src/navigation_paths';
import { NavLink } from 'react-router-dom';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    label: 'Acceuil',
    path: STATIC_HOME_PAGE_NAVIGATION
  },
  {
    label: 'Ecole',
    path: SCHOOL_FIND_PAGE_NAVIGATION
  },
  {
    label: 'Formation',
    path: 'test'
  },
  {
    label: 'Actualités',
    path: 'actu'
  }
];

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src={whiteLogo} style={{ height: '80px' }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <NavLink to={item.path} className="nav">
                <ListItemText primary={item.label} sx={{ color: '#fff' }} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: '#0D0DA3 !important', position: 'static' }}
      >
        <Toolbar
          sx={{
            backgroundColor: '#0D0DA3 !important',
            justifyContent: 'space-between',
            position: 'static'
          }}
        >
          <Box>
            <img src={whiteLogo} style={{ height: '80px' }} />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} sx={{ color: '#fff' }}>
                <NavLink className="nav" to={item.path}>{item.label}</NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#0D0DA3 !important'
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
