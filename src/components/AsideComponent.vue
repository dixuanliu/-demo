<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color=""
    text-color="#1C1C1C"
    :collapse="store.isCollapse"
  >
    <el-menu-item
      v-if="!store.isCollapse"
      style="justify-content: center"
      disabled
    >
      <h3>后台管理系统</h3>
    </el-menu-item>
    <el-menu-item v-else style="justify-content: center" disabled>
      <h3>后台</h3>
    </el-menu-item>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in NoChildren"
      :key="item.name"
      :index="item.path"
    >
      <el-icon><component :is="item.icon" /></el-icon>
      <template #title>
        <span>{{ item.label }}</span>
      </template>
    </el-menu-item>
    <el-sub-menu
      v-for="item in HasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template #title>
        <el-icon><component :is="item.icon" /></el-icon>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item
        @click="clickMenu(child)"
        v-for="child in item.children"
        :key="child.name"
        :index="child.path"
      >
        <template #title>
          <el-icon><component :is="child.icon" /></el-icon>
          <span>{{ child.label }}</span>
        </template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useTabsStore } from "@/stores/tab";
const store = useTabsStore();
interface MenuDataList {
  children?: MenuDataList[];
  path?: string;
  name?: string;
  label: string;
  icon: string;
  url?: string;
}
const MenuData: MenuDataList[] = reactive([
  {
    path: "/home",
    name: "home",
    label: "首页",
    icon: "HomeFilled",
    url: "Home/Home",
  },
  {
    path: "/mall",
    name: "mall",
    label: "商品管理",
    icon: "TakeawayBox",
    url: "MallManage/MallManage",
  },
  {
    path: "/user",
    name: "user",
    label: "用户管理",
    icon: "UserFilled",
    url: "UserManage/UserManage",
  },
  {
    label: "其他",
    icon: "LocationFilled",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "页面1",
        icon: "Grid",
        url: "Other/PageOne",
      },
      {
        path: "/page2",
        name: "page2",
        label: "页面2",
        icon: "Grid",
        url: "Other/PageTwo",
      },
    ],
  },
]);
const router = useRouter();
let HasChildren = computed(() => {
  return MenuData.filter((value) => {
    return value.children;
  });
}).value;
let NoChildren = computed(() => {
  return MenuData.filter((value) => {
    return !value.children;
  });
}).value;

function clickMenu(item: typeof store.tabsList[0]) {
  router.push(item.path);
  store.selectMenu(item)
}
</script>

<style scoped lang="sass">

.el-menu-vertical-demo:not(.el-menu--collapse)
  width: 200px
.el-menu
  height: 100vh
.el-menu-item.is-disabled
  color: #1C1C1C !important
  cursor: default !important
  opacity: 100 !important
</style>
