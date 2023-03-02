<template>
  <div class="header">
    <div class="left">
      <el-button icon="menu" @click = 'store.collapse()'>
      </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item  v-for="item in store.tabsList" :key="item.name" :to="item.path">
            {{item.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown trigger="click">
        <el-avatar :size="'default'" :fit="'cover'">
          <img src="/profile.jpeg" alt="">
        </el-avatar>
        <template #dropdown>
          <el-dropdown-item>个人</el-dropdown-item>
          <el-dropdown-item @click="exit">退出</el-dropdown-item>
        </template>
      </el-dropdown>

    </div>
  </div>
</template>

<script setup>
import {useTabsStore} from "@/stores/tab";
import jsCookie from "js-cookie";
import {useRouter} from "vue-router";
import { useLoginStore } from "@/stores/login";
const Route = defineProps(['Route'])
const store = useTabsStore()
const router = useRouter()
const loginstore = useLoginStore()
function exit(){
  jsCookie.remove('token')
  jsCookie.remove('menu')
  loginstore.Menu = [];
  router.push('/login')
}
</script>

<style scoped lang=sass>
.header
  background-color: #409EFF
  height: 60px
  display: flex
  padding: 0 20px
  align-items: center
  justify-content: space-between
  .left
    display: flex
    justify-content: left
    align-items: center
    .el-breadcrumb
      margin-left: 10px
      .el-breadcrumb__item
        .el-breadcrumb__inner.is-link
          color: white
          font-weight: normal
          cursor: pointer
    span
      color: white
</style>