import { bindItems } from '../../firebase/getCollection'

import state from '../state'
import getters from '../getters'
import actions from '../actions'

const newItem = () => ({
  id: null,
  createdAt: null,
  updatedAt: null,
  isDestacado: false,
  instagramUrl: "",
  nome: "",
  descricao: "",
  preco: 0,
  desconto: 0,
  quantidade: 0,
  tamanhos: [],
  cores: [],
  imagens: [],
})

const collection = 'produtos'

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
    getItemsByExact: state => (a, b) =>{
      return state.items.filter(item => item[a] === b)
    },
    getItemsByMoreThan: state => (a, b) =>{
      return state.items.filter(item => item[a] > b)
    },
    getFilteredBySearchItems: state => search => {
      const items = state.items;
      if (search) {
        return items.filter((item) => {
          const nomeLowerCase = item.nome.toLowerCase();
          const searchLowerCase = search.toLowerCase();
          return nomeLowerCase.includes(searchLowerCase);
        });
      }
      if (!search) {
        return items
      }
    },
    getItem: state => state.item,

  },
  actions: {
    ...actions,
    ...bindItems(collection),
    fillItem({ state }, payload) {
      state.item = payload;
    },
    resetItem({ state }, payload) {
      state.item = newItem();
    },

    async handleUpload({ state, dispatch, rootGetters }, payload) {
      if (payload.file) {
        await dispatch("upload", {
          path: 'produtos',
          name: payload.file.name,
          file: payload.file,
        }, { root: true });
        if (!rootGetters.getStorageError) {
          state.item.imagens.push(rootGetters.getUrl);
        }
      }
    },
    async handleDelFile({ state, dispatch }, payload) {
      state.item.imagens.splice(payload.i, 1);
      await dispatch("delFile", payload.imagem, { root: true });
      if (state.mode === 'update') {
        await dispatch("updateDoc", { collection, id: state.item.id, updates: { imagens: [...state.item.imagens] } }, { root: true })
      }
    },
    async handleSubmit({ state, dispatch }, payload) {
      await dispatch("addDoc", {
        collection,
        item: {
          ...state.item,
          preco: payload.precoValue
        },
      }, { root: true });

      if (!this.docError) {
        dispatch("closeDialog")
        dispatch('resetItem')
      }
    },
    async handleUpdate({ state, dispatch, rootGetters }, payload) {
      const updates = {
        ...state.item,
      }
      if (payload.precoValue) {
        updates.preco = payload.precoValue
      }
      await dispatch("updateDoc", { collection, id: state.item.id, updates }, { root: true });

      if (!rootGetters.getDocError) {
        dispatch("closeDialog")
        dispatch('resetItem')
      }
    },
  }
}