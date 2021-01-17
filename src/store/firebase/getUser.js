import { auth } from "../../plugins/firebase"

export default {
  state: {
    user: null
  },
  getters: {
    getUser: state => state.user
  },
  actions: {
    onAuthChange({ state }) {
      auth
        .onAuthStateChanged(user => {
          state.user = user
        })
    }
  }
}