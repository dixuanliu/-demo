import { createApp, toRaw } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";


import * as Icons from "@element-plus/icons-vue";
import "/api/mockserver";
import "/api/MockData";
//ELMessage使用自动导入插件时需要导入css文件否则样式会缺失
import "element-plus/es/components/message/style/css";
// @ts-ignore
import jsCookie from "js-cookie";
import { ElMessage } from "element-plus";


const store = createPinia();
const app = createApp(App);

app.use(store);
app.use(router);
router.beforeEach((to, from, next)=>{
  const token = jsCookie.get('token')
  if (!token && to.name !=='login'){
    ElMessage(
      {message:"请登录",type:"warning"}
    )
    next({name:'login'})
  }else if (token && to.name === 'login'){
    next({name:'home'})
  }else {
    next()
  }
})
app.mount("#app");
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
