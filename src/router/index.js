/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeContent from '@/components/HomeContent'
import Signin from '@/components/Signin'
import Register from '@/components/Register'

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

