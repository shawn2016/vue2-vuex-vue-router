import routerLazy from '@/utils/routerLazy'
export default [
  {
    path: '/login',
    component: routerLazy('login/login/index'),
    hidden: true
  }
]