import Main from '../views/main/Main.vue'
import Home from '../views/main/Home.vue'
import Contato from '../views/main/Contato.vue'
import Entregas from '../views/main/Entregas.vue'
import Trocas from '../views/main/Trocas.vue'
import Produtos from '../views/main/Produtos.vue'
import Produto from '../views/main/Produto.vue'
import NotFound from '../views/main/NotFound.vue'

export default {
  path: '/',
  component: Main,
  children: [
    {
      path: '',
      name: 'Main',
      component: Home,
      label: 'Início',
    },
    {
      path: 'produtos',
      name: 'Produtos',
      component: Produtos,
      label: 'Produtos',
    },

    {
      path: 'entregas',
      name: 'Entregas',
      component: Entregas,
      label: 'Entregas',
    },
    {
      path: 'trocas',
      name: 'Trocas',
      component: Trocas,
      label: 'Trocas',
    },
    {
      path: 'produtos/:id',
      name: 'Produto',
      component: Produto,
      label: 'Produto',
    },
    {
      path: 'contato',
      name: 'Contato',
      component: Contato,
      label: 'Contato',
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
}