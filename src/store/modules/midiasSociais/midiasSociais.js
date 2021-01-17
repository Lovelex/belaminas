import { db } from '../../../plugins/firebase'
import { firestoreAction } from 'vuexfire'
import { bindItems } from '../../firebase/getCollection'

import state from '../state'
import getters from '../getters'
import actions from '../actions'

const newItem = () => ({
  id: null,
  createdAt: null,
  updatedAt: null,
  href: '',
  icon: 'mdi-facebook',
})

const collection = 'midias'

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
  },
  actions: {
    ...actions,
    ...bindItems(collection),
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
    async handleUpdate({ state, dispatch, rootGetters }) {
      const updates = {
        ...state.item,
      }
      await dispatch("updateDoc", { collection, id: state.item.id, updates }, { root: true });
      if (!rootGetters.getDocError) {
        dispatch("closeDialog")
        dispatch('resetItem')
      }
    },
  }
}