import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import headComponent from "./components/global/headComponent"
import footComponent from "./components/global/footComponent"

Vue.component('headComponent', headComponent)
Vue.component('footComponent', footComponent)

const app = new Vue({
  ...App
})
app.$mount()
