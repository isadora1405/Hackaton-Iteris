import Vue from 'vue'
import VueRouter from 'vue-router'
import SitesAjuda from '../views/SitesAjuda'
import Inicio from '../views/Inicio.vue'
import QueroAjuda from '../views/QueroAjuda.vue'


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
  },
  {
    path: '/quero-ajuda',
    component: QueroAjuda
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
