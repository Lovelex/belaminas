import { db } from '../../../plugins/firebase'
import { firestoreAction } from 'vuexfire'

import state from '../state'
import getters from '../getters'
import actions from '../actions'

const newItem = () => ({
  id: null,
  createdAt: null,
  newMessage: true,
  name: '',
  email: '',
  phone: '',
  message: ''
})

const collection = 'mensagens'

export default {
  namespaced: true,
  state: {
    ...state,
    items: [],
    item: newItem(),
  },
  getters: {
    ...getters,
    getItems: state => state.items,
    getItem: state => state.item,
    getItemLength: state => {
      return state.items.reduce((a, b) => {
        return b.newMessage ? a + 1 : a
      }, 0)
    },
  },
  actions: {
    ...actions,
    bindItems: firestoreAction(({ bindFirestoreRef, state }) => {
      if (!state.items.length) {
        return bindFirestoreRef('items', db.collection(collection).orderBy('createdAt', 'desc'))
      }
    }),
    fillItem({ state }, payload) {
      state.item = payload;
    },
    resetItem({ state }) {
      state.item = newItem();
    },
    async handleSubmit({ state, dispatch }) {
      await dispatch("addDoc", {
        collection,
        item: {
          ...state.item,
        },
      }, { root: true });

      if (!this.docError) {
        dispatch("closeDialog")
        dispatch('resetItem')
      }
    },
  }
}