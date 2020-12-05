import Vue from 'vue'
import App from './App.vue'
import store from './store'

// Bootstrap & Bootstrap-vue
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import "./assets/custom.scss"

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// -------------------------

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
