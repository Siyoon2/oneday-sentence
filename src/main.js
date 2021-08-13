import Vue from 'vue'
import App from './App.vue'
// router setup
import router from './routes/router'

// layout
import "./plugins/inject-layout" // <-- 요거 지우면 안댐!!

// plugins ,global components
import GlobalComponents from "./plugins/globalComponents"
Vue.use(GlobalComponents);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    //store: store,

    render: h => h(App),
    router
});
