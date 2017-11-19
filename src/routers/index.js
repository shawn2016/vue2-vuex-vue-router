import Vue from 'vue'
import Router from 'vue-router'
import routerLazy from '@/utils/routerLazy'
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import constantRouterMap from '@/modules/router'
Vue.use(Router)
/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will not redirct in the levelbar
* noDropdown : if `noDropdown:true` will not has submenu in the sidebar
* meta : `{ role: ['admin'] }`  will control the page role
**/
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
    path: '/404',
    component: routerLazy('404'),
    hidden: true
  }, {
    path: '*',
    redirect: '/404',
    hidden: true
  },
  ...constantRouterMap]
})

