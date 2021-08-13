import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/home/Home";
import Insert from "../views/insert/Insert";

/*const Home = () => import(/!* webpackChunkName: "group-home" *!/ '../views/home/Home')
const Insert = () => import(/!* webpackChunkName: "group-insert" *!/ '../views/insert/Insert')*/

Vue.use(VueRouter);
const router = new VueRouter( {
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/insert',
            component: Insert,
            meta: {
                layout: 'DefaultLayout'
            }
        },
    ],
});

export default router;
/*
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            components: Home,
        },
        {
            path: '/insert',
            components: Insert,
        },
    ],

    scrollBehavior: (to, from ,savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return { selector: to.hash };
        }
        return { x: 0, y: 0 };
    }
});*/
