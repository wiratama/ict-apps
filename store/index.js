import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sidebar_active: false,
      answer_section1: '',
      answer_section2: '',
      answer_section3: '',
      data_score: [],
      data_score_value: '0',
    },
    getters : {
      getScoreValue (state) {
        return state.data_score_value+'%'
      }
    },
    mutations: {
      shoHideSidebar (state, value) {
        state.sidebar_active = value
      },
      setSetionAnswer (state, section, answer) {
        state.section = answer
      },
      addDataScore (state, answer) {
        state.data_score.push(answer)
      },
      setScoreValue (state, score) {
        state.data_score_value = score
      }
    },
    actions: {
      addScoreValue ({ commit, state }) {
        let _data_score = state.data_score
        let _total_anwer = state.data_score.length
        let _true = _data_score.filter(function(val){
          return val==1
        }).length
        let _total_score = (_true/_total_anwer)*100
        let _commit_score = isNaN(_total_score) ? 0 : _total_score.toFixed(2)
        commit('setScoreValue', _commit_score)
        
      }
    }
  })
}

export default createStore