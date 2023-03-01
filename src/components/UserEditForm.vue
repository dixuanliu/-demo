<template>
  <el-form label-position="top" :model="form" :rules="store.rules">
    <el-row :gutter="10">
      <el-col :span="12">
        <el-form-item label="姓名" prop="name"
          ><el-input placeholder="请输入姓名" v-model="form.name"></el-input
        ></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="年龄" prop="age"
          ><el-input placeholder="请输入年龄" v-model="form.age"></el-input
        ></el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="24">
        <el-form-item label="地址" prop="address"
          ><el-input placeholder="请输入地址" v-model="form.address"></el-input
        ></el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <el-form-item label="生日" prop="birthday"
          ><el-date-picker
            v-model="form.birthday"
            placeholder="请选择出生日期"
            value-format="YYYY-MM-DD"
          ></el-date-picker
        ></el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
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
        <el-button type="info" style="width: 90%" @click="onCancel"
          >取消</el-button
        >
      </el-col>
    </el-row>
  </el-form>
</template>

<script setup>
import { useFormStore } from "@/stores/form";
import { ref,watch } from "vue"
let form = ref({})
const store = useFormStore();
form.value = store.storeform
defineEmits(["on_submit"]);
function onCancel() {
  Object.keys(store.storeform).forEach(key=>{store.storeform[key] = ''})
  store.Eldialog = false;
}
watch(()=>store.storeform,(newval,oldval)=>{
  form.value = newval
})
</script>

<style scoped lang="sass"></style>
