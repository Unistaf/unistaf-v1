import { API } from "./api";

/**
 *+-----------------------------------------------------------+
 *!      LOGIN PATH                                           |
 *+-----------------------------------------------------------+
 */
const AUTH_PREFIX = '/auth'
export const REGISTER_PATH = API + AUTH_PREFIX + '/register'
export const LOGIN_PATH = API + AUTH_PREFIX + '/login'
export const LOGOUT_PATH = API + AUTH_PREFIX + '/logout'
export const REFRESH_PATH = API + AUTH_PREFIX + '/refresh'

/**
 *+-----------------------------------------------------------+
 *!      SUPER ADMIN PATHS                                    |
 *+-----------------------------------------------------------+
 */
export const CREATE_SCHOOL_API_PATH = API + '/schools'
export const GET_SCHOOLS_API_PATH = API + '/schools'
/**
 *+-----------------------------------------------------------+
 * !     ADMINS PATHS                                         |
 *+-----------------------------------------------------------+
 */
export const CREATE_ADMIN_PATH = API + '/admins'
export const GET_ADMINS_PATH = API + '/admins'
export const DELETE_ADMIN_PATH = API + '/admins' // + {id}
