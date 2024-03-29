import { useContext } from 'react';

import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme
} from '@mui/material';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from 'src/contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import { ICurrenUser } from 'src/utils/interfaces';
import { useSelector } from 'react-redux';
import { iStore } from 'src/redux/store';
import { unistafColors } from 'src/utils/colors';


function Header() {
  const currentUser: ICurrenUser | any = useSelector((state: iStore) => state?.user?.currentUser);
  const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  const HeaderWrapper = styled(Box)(
    ({ theme }) => `
          height: ${theme.header.height};
          color: ${currentUser?.user?.user_type === 'super_admin'  ? 'white' : theme.header.textColor};
          padding: ${theme.spacing(0, 2)};
          right: 0;
          z-index: 6;
          background-color: ${ currentUser?.user?.user_type === 'super_admin' ? alpha(theme.header.background, 0.95) : alpha(theme.header.background, 0.95)};
          backdrop-filter: blur(3px);
          position: fixed;
          justify-content: space-between;
          width: 100%;
          @media (min-width: ${theme.breakpoints.values.lg}px) {
              left: ${theme.sidebar.width};
              width: auto;
          }
  `
  );

  return (
    <HeaderWrapper
      display="flex"
      alignItems="center"
      sx={{
        boxShadow:
          theme.palette.mode === 'dark'
            ? `0 1px 0 ${alpha(
              lighten(theme.colors.primary.main, 0.7),
              0.15
            )}, 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)`
            : `0px 2px 8px -3px ${alpha(
              theme.colors.alpha.black[100],
              0.2
            )}, 0px 5px 22px -4px ${alpha(
              theme.colors.alpha.black[100],
              0.1
            )}`,
      }}
    >
      <Box sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: { lg: 'end', xs: 'space-between' }
      }}
        // display="flex"
        // alignItems="center"
        // justifyContent="space-between"
      >
        <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: 'none', xs: 'inline-block' }
          }}
        >
          <Tooltip arrow title="Basculer le menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            ml: 2,
          }}
          display="flex"
          alignItems="center"
        >
          <HeaderButtons />
          <HeaderUserbox />
        </Box>
      </Box>
    </HeaderWrapper>
  );
}

export default Header;
