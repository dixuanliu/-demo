import { createRouter, createWebHistory } from 'vue-router'
import Homeview from "@/views/HomeView.vue";
import MainRoute from "@/views/MainRoute.vue";
import UserView from "@/views/UserView.vue";
import OtherPageOne from "@/views/OtherPageOne.vue";
import OtherPageTwo from "@/views/OtherPageTwo.vue";
import MallView from "@/views/MallView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:MainRoute,
      redirect:'/home',
      children:[
        {
          path:'home',
          component:Homeview
        },
        {
          path:'user',
          component:UserView
        },
        {
          path:'page1',
          component:OtherPageOne
        },
        {
          path:'page2',
          component:OtherPageTwo
        },
        {
          path:'mall',
          component:MallView
        }
      ]
    }
  ]
})

export default router
