import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// router setup
import router from './routes/router'

// layout
import "./plugins/inject-layout" // <-- 요거 지우면 안댐!!

// plugins ,global components
import GlobalComponents from "./plugins/globalComponents"
import ApiServiceProvider from "@/service/ApiServiceProvider";
Vue.use(GlobalComponents);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    //store: store,
    provide: {
        sentenceService: ApiServiceProvider.getSentenceService(),
    },
    render: h => h(App),
    router
});
