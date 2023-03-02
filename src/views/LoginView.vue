<template>
  <div class="view-cover">
    <div class="login-card">
      <el-card>
        <el-form :model="loginForm" size="large" :rules="rules" ref="validForm">
          <el-form-item label="账号" prop="name">
            <el-input
              type="text"
              v-model="loginForm.name"
              placeholder="输入账号"
              suffix-icon="UserFilled"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              :show-password="true"
              type="text"
              v-model="loginForm.password"
              placeholder="输入密码"
              suffix-icon="Lock"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-row justify="end">
          <el-col :span="4">
            <el-button type="primary" @click="userLogin">登录</el-button>
          </el-col>
          <el-col :span="4">
            <el-button>注册</el-button>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import jsCookie from "js-cookie";
import Mock from "mockjs";
import {useRouter} from "vue-router";
import {Login} from "/api/api";
import { ElMessage } from "element-plus";
import { useLoginStore } from "@/stores/login";
import dateformat from 'dateformat'
const store = useLoginStore()
const validForm = ref();
const router = useRouter()
const loginForm = ref({
  name: "",
  password: "",
});
const menu = reactive([]);
const rules = reactive({
  name: [{ required: true, trigger: "blur", message: "请输入账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入密码" }],
});

function userLogin(){
  validForm.value.validate((valid)=>{
    if (valid) {
      (async () => {
        const result = await Login(loginForm)
        if (result.data.code === 200) {
          jsCookie.set('token', result.data.data.token)
          result.data.data.menu.forEach(item=>{
            store.Menu.push(item);
          });
          store.user.name = loginForm.value.name;
          store.user.permission = result.data.data.permission;
          store.user.last_login_time = dateformat(new Date(),'yyyy-mm-dd HH:MM');
          jsCookie.set('menu', JSON.stringify(store.Menu))
          const menuArray = ref([])
          if (store.Menu){
            store.Menu.forEach(item=>{
              if (item.children){
                item.children = item.children.map(item=>{
                  item.component = () => import(`.${item.url}`);
                  return item
                })
                menuArray.value.push(...item.children)
              }else {
                item.component = ()=>import(`.${item.url}`);
                menuArray.value.push(item)
              }
            })
            console.log(menuArray.value)
            menuArray.value.forEach(item=>{router.addRoute('Main',item)})
          }
          router.push('/home')
        } else {
          ElMessage({ message: "密码或用户名错误", type: "error" })
        }
      })()
    }else {
      ElMessage({message: "请检查输入",type: "error"})
    }
  })


}
</script>

<style scoped lang="sass">
.view-cover
  display: flex
  width: 100vw
  height: 100vh
.login-card
  margin: auto
  width: 30vw
  height: 50vh
</style>
