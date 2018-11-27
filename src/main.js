// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
// import HomeContent from '@/component/HomeContent.vue'
import VueSession from 'vue-session'
Vue.use(VueSession)

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// const routes = [
//   { path: '/Home', component: Home},
//   { path: '/HomeContent', component: HomeContent}
// ]
// const router = new VueRouter({
//   routes
// })


// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

// app.listen(8080, () => console.log('Hello world'))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // render: h => h(App)
})
