import { App } from 'Vue'
import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized
} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { constantRouterMap } from './router-map'

NProgress.configure({ showSpinner: false })

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0, left: 0 }), // 页面跳转时 始终滚动到顶部
  routes: constantRouterMap
})
// 白名单
const whiteList = ['/login', '/home', '/404', '/401'] // no redirect whitelist

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log(`before: from:${from.path}, to:${to.path}`)
  NProgress.start()
  if (to.matched.length === 0) { // 当前没有匹配到路由 进入404页面
    next('/404')
  } else {
    if (getToken()) {
      if (to.path === '/login') {
        NProgress.done()
        next()
      } else {
        // if (store.getters.roles.length === 0) {
        //   store.dispatch(userTypes.GET_USER_INFO).then(user => { // 拉取user_info
        //     const roles = [user.role]
        //     // 根据roles权限生成可访问的路由表
        //     store.dispatch(permTypes.GEN_ROUTES, { roles }).then(() => {
        //       router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
        //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        //     })
        //   }).catch((err) => {
        //     console.log(err)
        //     store.dispatch(userTypes.LOGOUT).then(() => {
        //       Message.error('请重新登录')
        //       next({ path: '/login' })
        //     })
        //   })
        // }
        next()
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next({ path: '/login' })
      }
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

// 通过引入app的方式将router注册到vue上
export async function setupRouter (app: App) {
  app.use(router)
  await router.isReady() // 待路由都处理结束之后
}
