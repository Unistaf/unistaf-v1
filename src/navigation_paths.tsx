import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { SchoolRounded, SchoolSharp } from '@mui/icons-material';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';

/** ------------------------------------------
 *! STATIC HOMEPAGE                          |
 * -------------------------------------------
 */
export const STATIC_HOME_PAGE_NAVIGATION = '/'
export const SCHOOL_FIND_PAGE_NAVIGATION = '/trouver-mon-ecole'
export const COURSES_FIND_PAGE_NAVIGATION = '/trouver-ma-formation'


/** ------------------------------------------
 *! AUTHENTICATION NAVIGATION                |
 * -------------------------------------------
 */
export const REGISTER_NAVIGATION = '/signup'
export const LOGIN_NAVIGATION = '/login'

/** ------------------------------------------
 *! SUPER-ADMIN NAVIGATION                    |
 * -------------------------------------------
 */
export const SUPER_ADMIN_DASHBOARD_NAVIGATION = '/dashboard'
export const SUPER_ADMIN_CREATE_SCHOOL_NAVIGATION = 'add-school'

export const SUPER_ADMIN_LINKS_NAVIGATION = [
  {
    link: '',
    label: 'Accueil',
    icon: <HomeRoundedIcon />
  },
  // {
  //   link: ADMIN_ADD_FACULTY_NAVIGATION,
  //   label: 'Facultés',
  //   icon: <SchoolRoundedIcon />
  // }
]

/** ------------------------------------------
 *! ADMIN NAVIGATION                         |
 * -------------------------------------------
 */
const ADMIN_NAVIGATION = '/a/'
export const ADMIN_DASHBOARD_NAVIGATION = ADMIN_NAVIGATION + 'dashboard/'
export const ADMIN_FACULTIES_NAVIGATION = ADMIN_NAVIGATION + 'faculties/'
export const ADMIN_DIPLOMES_NAVIGATION = ADMIN_NAVIGATION + 'diplomes/'
export const ADMIN_ADD_DIPLOMES_NAVIGATION = ADMIN_DIPLOMES_NAVIGATION + 'add/'
export const ADMIN_DIPLOME_DETAILS_NAVIGATION = ADMIN_NAVIGATION + 'diplomes'  // + {id_diplome}+/details
export const ADMIN_DIPLOME_EDIT_NAVIGATION = ADMIN_NAVIGATION + 'diplomes'  // + {id_diplome}+/edit
export const ADMIN_ADD_DIPLOMES_URL = 'add/'
export const ADMIN_SCHOOL_NAVIGATION = ADMIN_NAVIGATION + 'school/'
//  export const ADMIN_ADD_FACULTY_NAVIGATION = 'add-faculty'

export const ADMIN_LINKS_NAVIGATION = [
  {
    link: ADMIN_DASHBOARD_NAVIGATION,
    label: 'Accueil',
    icon: <HomeRoundedIcon />
  },
  {
    link: ADMIN_SCHOOL_NAVIGATION,
    label: 'Mon école',
    icon: <AccountBalanceRoundedIcon />
  },
  {
    link: ADMIN_FACULTIES_NAVIGATION,
    label: 'Facultés',
    icon: <SchoolRoundedIcon />
  },
  {
    link: ADMIN_DIPLOMES_NAVIGATION,
    label: 'Diplomes',
    icon: <SchoolSharp />
  },
]

/** ------------------------------------------
 *! USER NAVIGATION                          |
 * -------------------------------------------
 */
const USER_NAVIGATION = 'u/'
export const USER_DASHBOARD_NAVIGATION = USER_NAVIGATION + 'dashboard/'