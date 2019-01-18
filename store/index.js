import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sidebar_active: false
    },
    mutations: {
      shoHideSidebar (state, value) {
        state.sidebar_active = value
      }
    }
  })
}

export default createStore