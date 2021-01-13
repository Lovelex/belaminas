import { db } from '../../../plugins/firebase'
import { firestoreAction } from 'vuexfire'

const collection = 'contato'

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
      if(!Object.keys(state.item).length) {
        return bindFirestoreRef('item', db.collection(collection).doc('contato'))
      }
    }),
    handleUpdate({ state, dispatch }) {
      const updates = {
        ...state.item
      }
      dispatch('updateDoc', { collection, id: 'contato', updates }, { root: true })
    }
  },
}