import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sidebar_active: false,
      answer_section1: '',
      answer_section2: '',
      answer_section3: ''
    },
    mutations: {
      shoHideSidebar (state, value) {
        state.sidebar_active = value
      },
      setSetionAnswer (state, section, answer) {
        state.section = answer
      }
    }
  })
}

export default createStore