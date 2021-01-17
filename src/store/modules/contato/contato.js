import { bindItem } from '../../firebase/getDoc'

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
    ...bindItem(collection, 'contato'),
    handleUpdate({ state, dispatch }) {
      const updates = {
        ...state.item
      }
      dispatch('updateDoc', { collection, id: 'contato', updates }, { root: true })
    }
  },
}