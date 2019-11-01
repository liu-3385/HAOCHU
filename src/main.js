import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "./common/css/reset.css"
import "./common/css/font.css"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
