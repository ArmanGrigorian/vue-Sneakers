import App from './App.vue'
import './main.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import AccountPageVue from './pages/AccountPage.vue'
import FavoritesPageVue from './pages/FavoritesPage.vue'
import HomePageVue from './pages/HomePage.vue'

const app = createApp(App)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePageVue
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesPageVue
  },
  {
    path: '/account',
    name: 'account',
    component: AccountPageVue
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
