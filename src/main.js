import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueTelInput from 'vue-tel-input'
import 'vue2-animate/dist/vue2-animate.min.css'
import './filters'
import store from './store'
import './registerServiceWorker'

Vue.use(BootstrapVue)
Vue.use(VueTelInput)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
