import { db } from '../../../plugins/firebase'
import { firestoreAction } from 'vuexfire'

const collection = 'regras'

export default {
  namespaced: true,
  state: {
    item: {},
  },
  getters: {
    getItem: state => state.item,
  },
  actions: {
    bindItem: firestoreAction(({ bindFirestoreRef, state }) => {
      if (!Object.keys(state.item).length) {
        return bindFirestoreRef('item', db.collection(collection).doc('trocas'))
      }
    }),
    handleUpdate({ state, dispatch }) {
      const updates = {
        ...state.item
      }
      dispatch('updateDoc', { collection, id: 'trocas', updates }, { root: true })
    }
  },
}