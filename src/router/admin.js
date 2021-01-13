import { auth } from '../plugins/firebase'

import Admin from '@/views/admin/Admin'
import Home from '@/views/admin/Home'
import Produtos from '@/views/admin/Produtos'
import MidiasSociais from '@/views/admin/MidiasSociais'
import Trocas from '@/views/admin/Trocas'
import Entregas from '@/views/admin/Entregas'
import Contato from '@/views/admin/Contato'
import Mensagens from '@/views/admin/Mensagens'

const isUserAuth = (from, to, next) => {
  const user = auth.currentUser
  user
    ? next()
    : next({ name: 'Login' })
}

export default {
  beforeEnter: isUserAuth,
  path: '/admin',
  component: Admin,
  children: [
    {
      path: '',
      name: 'Admin',
      component: Home,
      label: 'Início',
      redirect: { name: 'adminProdutos' }
    },
    {
      path: 'produtos',
      name: 'adminProdutos',
      component: Produtos,
      label: 'Produtos'
    },
    
    {
      path: 'trocas',
      name: 'AdminTrocas',
      component: Trocas,
      label: 'Trocas'
    },
    {
      path: 'entregas',
      name: 'AdminEntregas',
      component: Entregas,
      label: 'Entregas'
    },
    {
      path: 'contato',
      name: 'AdminContato',
      component: Contato,
      label: 'Contato'
    },
    {
      path: 'midias-sociais',
      name: 'AdminMidiasSociais',
      component: MidiasSociais,
      label: 'Mídias Sociais'
    },
    {
      path: 'mensagens',
      name: 'AdminMensagens',
      component: Mensagens,
      label: 'Mensagens'
    },
  ]
}