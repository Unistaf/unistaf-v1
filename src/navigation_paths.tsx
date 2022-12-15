import BrightnessLowTwoToneIcon  from '@mui/icons-material/BrightnessLowTwoTone';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
/** ------------------------------------------
 *! AUTHENTICATION NAVIGATION                  |
 * -------------------------------------------
 */
export const REGISTER_NAVIGATION = 'signup'
export const LOGIN_NAVIGATION = '/'

/** ------------------------------------------
 *! ADMIN NAVIGATION                          |
 * -------------------------------------------
 */
 const ADMIN_NAVIGATION = 'a/'
 export const ADMIN_DASHBOARD_NAVIGATION = ADMIN_NAVIGATION + 'dashboard/'
 export const ADMIN_ADD_FACULTY_NAVIGATION = 'add-faculty'

 export const ADMIN_LINKS_NAVIGATION = [
  {
    link: '',
    label: 'Accueil',
    icon: <HomeRoundedIcon />
  },
  {
    link: ADMIN_ADD_FACULTY_NAVIGATION,
    label: 'Facultés',
    icon: <SchoolRoundedIcon />
  }
 ]

/** ------------------------------------------
 *! USER NAVIGATION                          |
 * -------------------------------------------
 */
const USER_NAVIGATION = 'u/'
export const USER_DASHBOARD_NAVIGATION = USER_NAVIGATION + 'dashboard/'