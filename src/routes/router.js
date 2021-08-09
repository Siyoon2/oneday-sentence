import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

//import Home from "../views/home/Home";

//import Home from "../views/home/Home";
const Home = () => import(/* webpackChunkName: "group-home" */ '../views/home/Home')

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            components: Home,
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
});