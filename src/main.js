import Vue from 'vue'
import App from './App.vue'

import router from './routes/router'
import "./plugins/inject-layout" // <-- 요거 지우면 안댐!!

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
