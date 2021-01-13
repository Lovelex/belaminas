import { db } from '../../plugins/firebase'

export default {
  state: {
    docError: null,
    docIsLoading: false
  },
  getters: {
    getDocError: state => state.docError
  },
  actions: {
    async addDoc({ state }, payload) {
      state.docIsLoading = true
      const collectionRef = db.collection(payload.collection)
      const docRef = collectionRef.doc()

      try {
        await docRef.set({
          ...payload.item,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          id: docRef.id,
        })
        state.docError = null
        state.docIsLoading = false
      } catch (e) {
        state.docError = e.message
        state.docIsLoading = false
        console.log(e.message)
      }

    },
    async updateDoc({ state }, payload) {
      state.docIsLoading = true
      const collectionRef = db.collection(payload.collection)
      const docRef = collectionRef.doc(payload.id)
      console.log(payload)
      try {
        await docRef
          .update({
            ...payload.updates,
            updatedAt: Date.now(),
          })
        state.docError = null
        state.docIsLoading = false
      } catch (e) {
        console.log(e.message)
        state.docError = e.message
        state.docIsLoading = false
      }

    },
    async delDoc({ state }, payload) {
      if (confirm('Deseja remover este item?')) {
        state.docIsLoading = true
        const collectionRef = db.collection(payload.collection)
        const docRef = collectionRef.doc(payload.id)

        try {
          await docRef.delete()
          state.docError = null
          state.docIsLoading = false
        } catch (e) {
          console.log(e.message)
          state.docError = e.message
          state.docIsLoading = false
        }
      }
    }
  }
}