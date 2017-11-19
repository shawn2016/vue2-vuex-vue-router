import LoginRoute from '@/modules/login/router' // 登陆
import DashboardRoute from '@/modules/dashboard/router' // 登陆
let dynamicRouter = true // 是否调用后台菜单
export default dynamicRouter ? [
  ...LoginRoute
] : [...LoginRoute, ...DashboardRoute]
