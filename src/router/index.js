/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeContent from '@/components/HomeContent'
import Signin from '@/components/Signin'
import Register from '@/components/Register'
import Product from '@/components/Product'
import Create from '@/components/Create'
import Payment from '@/components/Payment'
import Layout from '@/components/Layout'

Vue.use(Router)
const NotFound = { template: '<p>Page not found</p>' }
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'HomeContent',
      component: HomeContent
    },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout
    }
    
  ]
})
// const routes = routerOptions.map(route => {
//   return {
//     path: route.path,
//     component: () => import(`@/components/${route.component}.vue`),
//     meta: route.meta
//   }
// })
// const routes = [
//   { path: '/Home', component: Home},
//   { path: '/HomeContent', component: HomeContent}
// ]
// const router = new VueRouter({
//   routes
// })

