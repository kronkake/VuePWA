import Vue from 'vue'
import Vuex from 'vuex'

import counter from './counter/counter'
import dogs from './dogs/dogs'

Vue.use(Vuex)

export default new Vuex.Store({ 
  modules: {
    counter: counter,
    dogs: dogs
  }
})