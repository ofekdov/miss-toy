import { createRouter, createWebHashHistory } from 'vue-router'
import ToysIndex from '../views/ToysIndex.vue'
import AboutView from '../views/AboutView.vue'
import ToyDetails from '../components/ToyDetails.vue'
import ToyEdit from '../components/ToyEdit.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect:'/toys'
    },
    {
      path: '/toys',
      name: 'toys',
      component: ToysIndex,
      children: [
        {
          path: 'edit/:toyId?',
          component: ToyEdit,
        },
        {
          path: 'details/:toyId',
          component: ToyDetails,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
