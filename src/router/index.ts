import { createRouter, createWebHistory } from 'vue-router'
import Homeview from "@/views/HomeView.vue";
import MainRoute from "@/views/MainRoute.vue";
import UserView from "@/views/UserView.vue";
import OtherPageOne from "@/views/OtherPageOne.vue";
import OtherPageTwo from "@/views/OtherPageTwo.vue";
import MallView from "@/views/MallView.vue";
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
    }
  ]
})

export default router
