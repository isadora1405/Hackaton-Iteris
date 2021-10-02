import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SitesAjuda from '../views/SitesAjuda'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/sites-ajuda',
    component: SitesAjuda
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
