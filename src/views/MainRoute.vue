<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <AsideComponent/>
      </el-aside>
      <el-container>
        <el-header style="padding: 0"><HeaderComponent/></el-header>
        <el-main class="main"><router-view/></el-main>

        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {useTabsStore} from "@/stores/tab";

const store = useTabsStore()
import AsideComponent from "@/components/AsideComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import { onBeforeUnmount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { ElMessage, ElNotification } from "element-plus";
</script>
<style lang="sass">

</style>