import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

const axios = require('axios');
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

// event handling between components made easier 
export const bus = new Vue()
Vue.prototype.$bus = bus

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
