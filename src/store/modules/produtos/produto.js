import { bindItem } from '../../firebase/getDoc'

const collection = 'produtos'

export default {
  namespaced: true,
  state: {
    item: {},
  },
  getters: {
    getItem: state => state.item,
  },
  actions: {
    ...bindItem(collection)
  }
}