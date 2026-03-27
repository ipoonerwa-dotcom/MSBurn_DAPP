import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './styles/global.css'

import BlackHole from './views/BlackHole.vue'
import Staking from './views/Staking.vue'
import Referral from './views/Referral.vue'
import Dashboard from './views/Dashboard.vue'

const routes = [
  { path: '/', redirect: '/blackhole' },
  { path: '/blackhole', component: BlackHole, meta: { idx: 0 } },
  { path: '/staking', component: Staking, meta: { idx: 1 } },
  { path: '/referral', component: Referral, meta: { idx: 2 } },
  { path: '/dashboard', component: Dashboard, meta: { idx: 3 } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
