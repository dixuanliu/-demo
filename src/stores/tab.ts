import { defineStore } from "pinia";
import { ref } from "vue";

export const useTabsStore = defineStore("tabs", () => {
  const isCollapse = ref(true);

  const tabsList = ref([
    {
      path: "/home",
      name: "home",
      label: "首页",
      icon: "HomeFilled",
      url: "Home/Home",
    },
  ]);
  function collapse() {
    isCollapse.value = !isCollapse.value;
  }
  function selectMenu(val: (typeof tabsList.value)[0]) {
    console.log(val);
    if (val.name != "home") {
      const index = tabsList.value.findIndex((item) => {
        return item.name === val.name;
      });
      if (index === -1) {
        tabsList.value.push(val);
      }
    }
  }
  return { isCollapse, collapse, tabsList, selectMenu };
});
