import { createRouter, createWebHistory } from 'vue-router'
import MainRoute from "@/views/MainRoute.vue";
import LoginView from "@/views/LoginView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:MainRoute,
      redirect:'/home',
      name:'Main',
      children:[
      ]
    },
    {
      path:"/login",
      name: "login",
      component:LoginView,
    },
  ]
})


export default router
