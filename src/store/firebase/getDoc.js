import { db } from '../../plugins/firebase'
import { firestoreAction } from 'vuexfire'

const bindItem = (collection, doc) => ({
  bindItem: firestoreAction(({ bindFirestoreRef, state }, payload) => {
    if(!Object.keys(state.item).length){
      return bindFirestoreRef('item', db.collection(collection).doc(doc || payload.id))
    }
  }),
})

export { bindItem } 