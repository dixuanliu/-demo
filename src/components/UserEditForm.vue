<template>
  <el-form label-position="top" :model="store.storeform" :rules="store.rules" ref="validForm">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-form-item label="姓名" prop="name"
          ><el-input placeholder="请输入姓名" v-model="store.storeform.name"></el-input
        ></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="年龄" prop="age"
          ><el-input placeholder="请输入年龄" v-model="store.storeform.age"></el-input
        ></el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-form-item label="地址" prop="address"
          ><el-input placeholder="请输入地址" v-model="store.storeform.address"></el-input
        ></el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-form-item label="生日" prop="birthday"
          ><el-date-picker
            v-model="store.storeform.birthday"
            placeholder="请选择出生日期"
            value-format="YYYY-MM-DD"
          ></el-date-picker
        ></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="store.storeform.sex">
            <el-radio label="男">男</el-radio>
            <el-radio label="女">女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="4"></el-col>
      <el-col :span="4"></el-col>
      <el-col :span="4"></el-col>
      <el-col :span="4">
        <el-button
          type="primary"
          style="width: 90%"
          @click="$emit('on_submit')"
          >提交</el-button
        >
      </el-col>
      <el-col :span="4">
        <el-button type="info" style="width: 90%" @click="$emit('on_cancel')"
          >取消</el-button
        >
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { useFormStore } from "@/stores/form";
import { ref,watch } from "vue"
let form = ref({});
let validForm = ref(null)
const store = useFormStore();
defineEmits(["on_submit","on_cancel"]);
defineExpose({validForm})
</script>

<style scoped lang="sass"></style>
