import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import * as Icons from "@element-plus/icons-vue";
import "/api/mockserver";
import "/api/MockData";
//ELMessage使用自动导入插件时需要导入css文件否则样式会缺失
import "element-plus/es/components/message/style/css";
import { useLoginStore } from "@/stores/login";
const store = createPinia();

//创建实例
const app = createApp(App);
//创建store
app.use(store);
//由于使用了动态路由，在路由挂载前要防止重新创建实例时动态路由未加载
const loginStore = useLoginStore();
loginStore.addRouter();
//挂载路由
app.use(router);
app.mount("#app");
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
