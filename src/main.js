import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex'
import './registerServiceWorker'

import '@plugins/muse'
import '@plugins/plugins'
import '@plugins/inject'
import '@plugins/components'
import '@plugins/style'

console.log(router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
