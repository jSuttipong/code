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
import ChackOrder from '@/components/ChackOrder'
import Order from '@/components/Order'
import OrderCreate from '@/components/OrderCreate'
import OrderBill from '@/components/OrderBill'
import CreatePhotobook from '@/components/CreatePhotobook'


Vue.use(Router)
const NotFound = { template: '<p>Page not found</p>' }
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // redirect: 'Home',
      component: Home,
      props: true
    },
    // {
    //   path: '/Home',
    //   name: 'HomeContent',
    //   component: HomeContent,
    //   props: true
    // },
    {
      path: '/Signin',
      name: 'Signin',
      component: Signin,
      props: true
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register,
      props: true
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product,
      props: true
    },
    {
      path: '/Create',
      name: 'Create',
      component: Create,
      props: true
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment,
      props: true
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      props: true
    },
    {
      path: '/ChackOrder:imgData',
      name: 'ChackOrder',
      component: ChackOrder,
      props: true
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      props: true
    },
    {
      path: '/OrderCreate',
      name: 'OrderCreate',
      component: OrderCreate,
      props: true
    },
    {
      path: '/OrderBill',
      name: 'OrderBill',
      component: OrderBill,
      props: true
    },
    {
      path: '/CreatePhotobook',
      name: 'CreatePhotobook',
      component: CreatePhotobook,
      props: true
    },
    { path: '*', redirect: '/' }
    
    
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

