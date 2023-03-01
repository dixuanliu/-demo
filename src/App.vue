<script setup lang="ts">

</script>

<template>
  <router-view/>
</template>

<style lang="sass">
*
  margin: 0
  padding: 0
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
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
