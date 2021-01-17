import { db } from '../../plugins/firebase'
import { firestoreAction } from 'vuexfire'

const bindItems = (collection) => ({
  bindItems: firestoreAction(({ bindFirestoreRef, state }) => {
    if (!state.items.length) {
      return bindFirestoreRef('items', db.collection(collection).orderBy('createdAt', 'desc'))
    }
  }),
})

export { bindItems }