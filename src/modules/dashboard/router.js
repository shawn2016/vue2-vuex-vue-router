import _import from '@/utils/routerLazy'
import Layout from '@/modules/layout/Layout'
const LoginRoute = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: '首页',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: _import('dashboard/dashboard/index')
        }]
    },

    {
        path: '/example',
        component: Layout,
        redirect: 'noredirect',
        name: '首页',
        icon: 'zujian',
        children: [
            {
                path: 'index',
                name: '表单',
                icon: 'zonghe',
                component: _import('page/form')
            }
        ]
    },
    {
        path: '/table',
        component: Layout,
        redirect: '/table/index',
        icon: 'tubiao',
        noDropdown: true,
        children: [{
            path: 'index',
            name: 'Table',
            component: _import('table/table/index'),
            meta: { role: ['admin'] }
        }]
    },

   
]
export default LoginRoute