// import { createWebHistory, createRouter } from 'vue-router';
import { createWebHashHistory, createRouter } from 'vue-router';

import Main from '../pages/Main.vue';
import About from '../pages/About.vue';

const routes = [
 { path: '/', component: Main },
 { path: '/about', component: About },
];

const router = createRouter({
 history: createWebHashHistory(),
 routes,
});

export default router;
