import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import * as Icons from "@element-plus/icons-vue";
import "/api/mockserver";
import "/api/MockData";
//ELMessage使用自动导入插件时需要导入css文件否则样式会缺失
import "element-plus/es/components/message/style/css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons]);
});
