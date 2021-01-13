import { auth } from "../../plugins/firebase"

export default {
  state: {
    user: null
  },
  getters: {
    getUser: state => state.user
  },
  actions: {
    onAuthChange({state}){
      auth
        .onAuthStateChanged(user => {
          console.log('Auth changed, user: ', user)
          state.user = user
        })
    }
  }
}