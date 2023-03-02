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
import AsideComponent from "@/components/AsideComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>
<style lang="sass">

</style>