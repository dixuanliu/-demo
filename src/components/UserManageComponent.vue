<template>
  <el-row>
    <el-col :span="24">
      <div class="add-button">
        <el-button icon="Plus" type="primary" @click="Action(1)"
          >增加用户
        </el-button>
        <el-dialog v-model="store.Eldialog">
          <UserEditForm @on_submit="onSubmit" />
        </el-dialog>
        <el-input
          placeholder="Please input"
          class="searchinput"
          v-model="query"
        >
          <template #prepend>
            <el-button icon="Search" @click="querySearch" />
          </template>
        </el-input>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div class="user-table">
        <el-table :data="query?search:userData" height="100%" border>
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="age" label="年龄"></el-table-column>
          <el-table-column prop="birthday" label="出生日期"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作">
            <template v-slot="scope">
              <el-button @click="Action(2, scope.row)">编辑</el-button>
              <el-popconfirm
                title="确定删除吗？"
                @confirm="Action(3, scope.row)"
              >
                <template #reference>
                  <el-button type="danger">删除</el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-pagination
        :total="total"
        :page-size="pageSize"
        v-model:current-page="currentPage"
      ></el-pagination>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { addUser, getUser, delUser, editUser, Search } from "/api/api";
import UserEditForm from "@/components/UserEditForm.vue";
import { useFormStore } from "@/stores/form";
import { ElMessage } from "element-plus";
const pageSize = 12;
let total = ref(0);
let userData = ref([]);
let currentPage = ref(1);
let functype = ref(0);
let funcRow = ref();
const store = useFormStore();
const query = ref();
const search = ref([]);
function Action(type, row) {
  if (type === 1) {
    store.Eldialog = true;
    functype.value = type;
  }
  if (type === 2) {
    store.Eldialog = true;
    functype.value = type;
    funcRow.value = row;
    store.storeform = JSON.parse(JSON.stringify(row));
  }
  if (type === 3) {
    (async () => {
      await delUser(row);
      const data = await getUser();
      userData.value = data.userManage;
      total.value = data.userLength;
    })();
    ElMessage({ message: "已删除", type: "warning" });
    query.value = ""
  }
}

function onSubmit() {
  store.Eldialog = false;
  currentPage.value = 1;
  if (functype.value === 1) {
    (async () => {
      await addUser(store.storeform);
      userData.value = (
        await getUser({ begin: currentPage.value, size: pageSize })
      ).userManage;
      total.value = (await getUser()).userLength;
    })();
    ElMessage({ message: "添加成功", type: "success" });
    Object.keys(store.storeform).forEach((key) => {
      store.storeform[key] = "";
    });
    query.value = ""
  }
  if (functype.value === 2) {
    (async () => {
      await editUser(store.storeform);
      userData.value = (await getUser()).userManage;
      total.value = (await getUser()).userLength;
    })();
    ElMessage({ message: "修改成功", type: "success" });
    Object.keys(store.storeform).forEach((key) => {
      store.storeform[key] = "";
    });
    query.value = ""
  }
}
function querySearch() {
  (async () => {
    search.value = (await Search(query.value)).data.data
  })();
}
onMounted(() => {
  (async () => {
    const data = await getUser({ begin: currentPage.value, size: pageSize });
    userData.value = data.userManage;
    total.value = data.userLength;
  })();
  currentPage.value = 1;
});

watch(
  () => currentPage.value,
  (newVal, oldVal) => {
    (async () => {
      userData.value = (
        await getUser({ begin: newVal, size: pageSize })
      ).userManage;
    })();
  }
);
watch(()=>query.value,(newval,oldval)=>{
  if (newval!=oldval) {
    querySearch()
    total.value = search.value.length
  }
  if (newval == ''){
    (async () => {
      await editUser(store.storeform);
      userData.value = (await getUser()).userManage;
      total.value = (await getUser()).userLength;
    })();
  }
})
</script>

<style scoped lang="sass">
.add-button
  min-width: 800px
  display: flex
  flex-direction: row
  justify-content: space-between
  .searchinput
    width: 200px
.user-table
  width: 100%
  margin-top: 20px
.popout
  position: absolute
</style>
