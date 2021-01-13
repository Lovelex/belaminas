import { auth } from '../../plugins/firebase'

export default {
  state: {
    loginError: null,
    isLoginLoading: false
  },
  getters: {
    getLoginError: state => state.loginError,
    getIsLoginLoading: state => state.isLoginLoading,
  },
  actions: {
    async login({ state }, payload) {
      state.isLoginLoading = true
      try {
        await auth
          .signInWithEmailAndPassword(payload.email, payload.password)
        state.loginError = null
        state.isLoginLoading = false
      } catch (e) {
        console.log(e.message)
        state.loginError = e.message
        state.isLoginLoading = false
      }
    },
    async logout({ state }) {
      state.isLoginLoading = true
      try {
        await auth
          .signOut()
        state.loginError = null
        state.isLoginLoading = false
      } catch (e) {
        console.log(e.message)
        state.loginError = e.message
        state.isLoginLoading = false
      }
    }
  }
}