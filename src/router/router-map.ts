import Layout from '@/layout/index.vue'
import { RouteRecordRaw } from 'vue-router'

// 静态路由配置
export const constantRouterMap: RouteRecordRaw[] = [
  { path: '/:pathMatch(.*)', redirect: '/404' }, // 匹配不到路由进入404
  { path: '/login', component: () => import('@/views/login/index.vue') },
  { path: '/404', component: () => import('@/views/error/404.vue') },
  { path: '/401', component: () => import('@/views/error/401.vue') },
  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: { title: '首页' }
      }
    ]
  }
]

// 动态路由配置
// export const asyncRouterMap = [
//   { path: '*', redirect: '/404', hidden: true }
// ]
