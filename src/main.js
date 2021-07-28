import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import headComponent from "./components/global/headComponent"
import footComponent from "./components/global/footComponent"
import audioComponent from "./components/global/imt-audio"

Vue.component('headComponent', headComponent)
Vue.component('footComponent', footComponent)
Vue.component('audioComponent', audioComponent)

Vue.prototype.$url = 'http://qwy31pcj1.hd-bkt.clouddn.com'
const app = new Vue({
  ...App
})
app.$mount()
