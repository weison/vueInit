import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
    path: '/vueUse',
    name: 'vueUse',
    meta: {
        title: '测试vueuse',
        keepAlive: true,
        requireAuth: false
        },
    component: () => import('@/pages/vueUse.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
        title: '登录',
        keepAlive: true,
        requireAuth: false
    },
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/btn',
    name: 'Btn',
    meta: {
        title: '测试引入element plus',
        keepAlive: true,
        requireAuth: false
    },
    component: () => import('@/pages/btn.vue')
  },
  {
    path: '/',
    name: 'Index',
    meta: {
        title: '首页',
        keepAlive: true,
        requireAuth: true
        },
    component: () => import('@/pages/index.vue')
  },
]

const router = createRouter({
 history: createWebHistory(),
 routes
});
export default router;