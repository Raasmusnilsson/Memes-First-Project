import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Memes from '../views/Memes.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/memes/',
    name: 'Memes',
    component: Memes
  },
  {
    path: '/about/:param?',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
