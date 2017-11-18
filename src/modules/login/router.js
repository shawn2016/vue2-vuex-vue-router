import _import from '@/utils/routerLazy'
export default [
    {
        path: '/login',
        component: _import('login/login/index'),
        hidden: true
    }
]