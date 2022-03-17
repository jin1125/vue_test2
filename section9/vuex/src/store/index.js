import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: [
      {id: 1, name: 'otani', isVisible: true},
      {id: 2, name: 'daru', isVisible: false},
      {id: 3, name: 'nishikiori', isVisible: true},
    ]
  },
  getters: {
    visibleUsers(state) {
      return state.users.filter(user => user.isVisible)
    },
    getUserById: state => id => {
      return state.users.find(user=>user.id === id)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    addCount(state, payload){
      state.count += payload.value
    }
  },
  actions: {
    incrementAction(context) {
      context.commit('increment')
    },
    addCountAction({commit}, payload) {
      commit('addCount', payload)
    }
  },
  modules: {
  }
})
