import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

// Firebase
import useLogin from './firebase/useLogin'
import useDoc from './firebase/useDoc'
import useStorage from './firebase/useStorage'
import getUser from './firebase/getUser'

// Modules
import produtos from './modules/produtos/produtos'
import produto from './modules/produtos/produto'
import trocas from './modules/trocas/trocas'
import entregas from './modules/entregas/entregas'
import midiasSociais from './modules/midiasSociais/midiasSociais'
import mensagens from './modules/mensagens/mensagens'
import contato from './modules/contato/contato'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: vuexfireMutations,
  modules: {
    useLogin,
    getUser,
    useDoc,
    useStorage,
    produtos,
    produto,
    entregas,
    trocas,
    midiasSociais,
    mensagens,
    contato
  }
})
