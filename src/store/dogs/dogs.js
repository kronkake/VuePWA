// root state object.
// each Vuex instance is just a single state tree.
const state = {
    urls: [],
    loadingDogs: false
  }
  
  // mutations are operations that actually mutates the state.
  // each mutation handler gets the entire state tree as the
  // first argument, followed by additional payload arguments.
  // mutations must be synchronous and can be recorded by plugins
  // for debugging purposes.
  const mutations = {
    setUrls (state, value) {
        state.urls = value
    },
  }
  
  // actions are functions that cause side effects and can involve
  // asynchronous operations.
  const actions = {
    async setUrls ({ commit }) {
      const response = await fetch('https://dog.ceo/api/breed/labrador/images')
      const dogs = await response.json()
      commit('setUrls', dogs.message)
      return dogs
    }
  }
  
  // getters are functions
  const getters = {
    urls: state => state.urls,
  }
  
  // A Vuex instance is created by combining the state, mutations, actions,
  // and getters.
  export default {
    state,
    getters,
    actions,
    mutations
  }