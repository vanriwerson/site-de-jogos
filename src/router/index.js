import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JogoDaVelha from '../views/JogoDaVelha.vue'
import JanKenPon from '../views/JanKenPon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jogodavelha',
    name: 'JogoDaVelha',
    component: JogoDaVelha
  },
  {
    path: '/jankenpon',
    name: 'JanKenPon',
    component: JanKenPon
  },
  //inserir outros views (telas) aqui
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
