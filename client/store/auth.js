import Cookies from 'js-cookie'
import sleep from '~/utils/sleep'

export default {
  state: () => ({
    token: null
  }),

  actions: {
    async login({ dispatch, rootGetters }, params) {
      await sleep(1000)

      const user = rootGetters['profile/hasUser'](params)

      if (user) {
        dispatch('saveAuthToken', user.id)

        // window.location.reload()
      } else {
        throw new Error('Неверный логин пароль')
      }
    },

    logout({ commit }) {
      commit('logout')
    },

    saveAuthToken(_, token) {
      Cookies.set('AUTH_TOKEN_COOKIE', token)
    },

    async getProfile({ commit, state }) {
      const profile = await this.$http.$get(`/user/${state.token}`)

      commit('SET_PROFILE', profile)
    }
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
    }
  },

  getters: {
    hasSession(state) {
      return Boolean(state.token)
    }
  }
}
