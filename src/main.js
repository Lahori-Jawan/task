// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import apolloProvider from './apolloprovider'

import VueApollo from 'vue-apollo'

// Install the vue plugin
Vue.use(VueApollo)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
