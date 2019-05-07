import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            redirect: '/home'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: () => import('./views/Home.vue'),
            meta: {
                title: 'Home – Movie Hat',
            }
        },
        {
            path: '/login',
            component: () => import('./views/Login.vue'),
            meta: {
                title: 'Movie Hat Login',
            }
        },
        {
            path: '/about',
            meta: {
                title: 'About Movie Hat',
                requiresAuth: true
            },
            component: () => import('./views/About.vue'),
        },
        {
            path: '/genius',
            meta: {
                title: 'Movie Hat Genius',
                // requiresAuth: true
            },
            component: () => import('./views/Genius.vue'),
        },
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
    if (requiresAuth ) next('login');
    else if (!requiresAuth) next();
    else next();

    // page title
    document.title = to.meta.title;

});

export default router;
