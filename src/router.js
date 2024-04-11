import { createRouter, createWebHashHistory } from 'vue-router';
import About from '@/pages/aboutPage/about.vue';
import Home from '@/pages/landing/landing.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})
