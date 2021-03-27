import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Sellers from '@/components/sellers'
import HelpCenter from '@/components/helpcenter'
import AllGoods from '@/components/allgoods'
import AllGoods2 from '@/components/allgoods2'
import AllGoods3 from '@/components/allgoods3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/helpcenter',
      name: 'helpcenter',
      component: HelpCenter
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: Sellers
    },
    {
      path: '/allgoods',
      name: 'allgoods',
      component: AllGoods
    },
    {
      path: '/allgoods2',
      name: 'allgoods2',
      component: AllGoods2
    },
    {
      path: '/allgoods3',
      name: 'allgoods3',
      component: AllGoods3
    }
  ]
})
