import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/vueUse',
        name: 'vueUse',
        meta: {
            title: '测试vueuse',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/VueUse.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/Login.vue'),
    },
    {
        path: '/btn',
        name: 'Btn',
        meta: {
            title: '测试引入element plus',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/BtnPage.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/Index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
