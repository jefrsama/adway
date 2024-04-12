import { createRouter, createWebHistory } from 'vue-router';
import About from '@/pages/aboutPage/about.vue';
import Home from '@/pages/landing/landing.vue';

const routes = [
    {
        path: '/theme/space/dist/',
        name: 'Home',
        component: Home
    },
    {
        path: '/theme/space/dist/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,

});

export default router;
