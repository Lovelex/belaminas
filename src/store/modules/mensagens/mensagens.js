import { bindItems } from '../../firebase/getCollection'
import { db } from '../../../plugins/firebase'

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
    ...bindItems(collection),
    fillItem({ state }, payload) {
      state.item = payload;
    },
    resetItem({ state }) {
      state.item = newItem();
    },
    async setNewMessagesToFalse() {
      const collectionRef = await db.collection(collection)
      const docsWhereNewMessages = await collectionRef.where('newMessage', '==', true)
      const getDocsWhereNewMessages = await docsWhereNewMessages.get()

      if(!getDocsWhereNewMessages.empty) {
        getDocsWhereNewMessages.forEach(doc => {
          collectionRef.doc(doc.id).update({ newMessage: false })
        })
      }
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