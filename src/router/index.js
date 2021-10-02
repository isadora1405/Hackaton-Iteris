import Vue from 'vue'
import VueRouter from 'vue-router'
import SitesAjuda from '../views/SitesAjuda'
import Inicio from '../views/Inicio.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Inicio',
    component: Inicio
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
