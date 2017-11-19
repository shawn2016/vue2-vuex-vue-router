/**
 * login
 */
import moduleName from '@/utils/getModulesName'
const modules = moduleName('login/login')
export const SET_TOKEN = modules + 'SET_TOKEN'
export const SET_NAME = modules + 'SET_NAME'
export const SET_AVATAR = modules + 'SET_AVATAR'
export const SET_ROLES = modules + 'SET_ROLES'
export const GET_MENU = modules + 'GET_MENU'