// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import store from './store'
import App from './App'
import VueChatScroll from 'vue-chat-scroll'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(VueOnsen)
Vue.use(VueChatScroll)
const axiosBase = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: 'Bearer ' + localStorage.LgbtProjectToken
  }
})
/* eslint-disable no-new */
// `myOption` カスタムオプションにハンドラを注入する
Vue.mixin({
  data: function () {
    return {
      axios: axiosBase
    }
  }
})
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})
