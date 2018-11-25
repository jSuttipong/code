/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeContent from '@/components/HomeContent'

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

