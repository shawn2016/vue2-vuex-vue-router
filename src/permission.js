import router from './routers'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权
import MenuUtils from '@/utils/MenuUtils'

const whiteList = ['/login'] // 不重定向白名单
let data = JSON.parse(window.sessionStorage.getItem('userInfo'))
if (data) {
  let routes = [] // 这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
  MenuUtils(routes, data)
  router.addRoutes(routes)
  window.sessionStorage.removeItem('isLoadNodes')
}
router.beforeEach((to, from, next) => {
  console.log('路由跳转之前')
  let userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'))
  if (userInfo && to.path === '/login') {
    // 这里不使用router进行跳转，是因为，跳转到登录页面的时候，是需要重新登录，获取数据的，这个时候，会再次向router实例里面add路由规则，
    // 而next()跳转过去之后，没有刷新页面，之前的规则还是存在的，但是使用location的话，可以刷新页面，当刷新页面的时候，整个app会重新加载
    // 而我们在刷新之前已经把sessionStorage里的userInfo移除了，所以上面的添加路由也不行执行
    window.sessionStorage.removeItem('userInfo')
    window.sessionStorage.removeItem('isLoadNodes')
    window.location.href = '/'
    return
  }
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      if (store.getters.roles.length === 0) {
        store.dispatch('GetInfo').then(() => { // 拉取用户信息
          next()
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('验证失败,请重新登录')
            next({ path: '/login' })
          })
        })
      } else {
        if (to.path) {
          next()
        } else {
          next({ path: '/404' })
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
