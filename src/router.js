import Vue from 'vue';
import Router from 'vue-router';
import Products from './views/Products.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/config',
      name: 'config',
      component: () => import('./views/Config.vue')
    }
  ]
})
