import { bindItem } from '../../firebase/getDoc'

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
    ...bindItem(collection, 'entregas'),
    handleUpdate({ state, dispatch }) {
      const updates = {
        ...state.item
      }
      dispatch('updateDoc', { collection, id: 'entregas', updates }, { root: true })
    }
  },
}