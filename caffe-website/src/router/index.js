import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutView from '../views/AboutView.vue' // "Hakkımızda" (Eski Hero sayfan)
import CoffeesView from '../views/CoffeesView.vue'
import Contact from '../views/Contact.vue' // DİKKAT: Dosya adın Contact.vue
import EquipmentView from '../views/EquipmentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/coffees', name: 'coffees', component: CoffeesView },
    { path: '/equipment', name: 'equipment', component: EquipmentView },
    { path: '/contact', name: 'contact', component: Contact }
  ]
})

export default router