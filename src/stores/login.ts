import { defineStore } from "pinia";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { reactive } from "vue";
import router from "@/router";
import jsCookie from "js-cookie";
import type { RouteRecordRaw } from "vue-router";
interface MenuDataList {
  component?: () => {};
  children?: MenuDataList[];
  path?: string;
  name?: string;
  label: string;
  icon: string;
  url?: string;
}
export const useLoginStore = defineStore("useLoginStore", () => {
  let Menu: MenuDataList[] = reactive([]);
  const user = reactive({
    name: "",
    permission: "",
    last_login_time: "",
  });

  function addRouter() {
    if (!jsCookie.get("menu")) {
      return;
    }
    Menu = JSON.parse(<string>jsCookie.get("menu"));
    const menuArray: MenuDataList[] = [];
    Menu.forEach((item: MenuDataList) => {
      if (item.children) {
        item.children = item.children.map((item: MenuDataList) => {
          item.component = () => import(`../views${item.url}`);
          return item;
        });
        menuArray.push(...item.children);
      } else {
        item.component = () => import(`../views${item.url}`);
        menuArray.push(item);
      }
    });
    console.log(menuArray);
    menuArray.forEach((item: MenuDataList) => {
      return router.addRoute("Main", <RouteRecordRaw>item);
    });
  }
  return { Menu, user, addRouter };
});
