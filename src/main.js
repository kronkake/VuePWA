// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import VueMaterial from 'vue-material'

import counter from './store/counter/counter' 

import router from './router'
import App from './App'

import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'pink',
  background: 'white'
})

Vue.config.productionTip = false

new Vue ({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App }
})


