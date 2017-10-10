import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Doggo from '@/components/Doggo'
import ButtonCounter from '@/components/ButtonCounter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/doggo',
      name: 'doggo',
      component: Doggo
    },
    {
      path: '/counter',
      name: 'counter',
      component: ButtonCounter
    }
  ]
})
