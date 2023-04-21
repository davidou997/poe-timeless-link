import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Search from '../views/SearchView.vue'

const routes = [ //Temporary removal of routes because of unfinished pages
  {
    // path: '/',
    // name: 'home',
    // component: HomeView
  },
  {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // path: '/search',
    path: '/',
    name: 'search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
