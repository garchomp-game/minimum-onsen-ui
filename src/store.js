import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    splitter: {
      namespaced: true,
      state: {
        open: false,
        pageTitle: ''
      },
      mutations: {
        toggle (state, shouldOpen) {
          if (typeof shouldOpen === 'boolean') {
            state.open = shouldOpen
          } else {
            state.open = !state.open
          }
        },
        pageTitleInsert (title) {
          this.pageTitle = title
        }
      }
    },
    login: {
      state: {
        token: '',
        loginFlg: false
      },
      mutations: {
        loginRun (state, token) {
          state.token = token
          state.loginFlg = true
        }
      }
    }
  }
})
