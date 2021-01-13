import { db } from '../../../plugins/firebase'
import { firestoreAction } from 'vuexfire'

const collection = 'produtos'

export default {
  namespaced: true,
  state: {
    item: {},
  },
  getters: {
    getItem: state => state.item,
  },
  actions: {
    bindItem: firestoreAction(({ bindFirestoreRef }, payload) => {
      return bindFirestoreRef('item', db.collection(collection).doc(payload.id))
    }),
  }
}