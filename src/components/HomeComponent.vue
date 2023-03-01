<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted, Ref, ref } from "vue";
import axios from "axios";
import { SeriesOption } from "echarts";
const echart: any = ref(null);
const echartTwo: any = ref(null);
const echartThree: any = ref(null);
let tabledata = ref();
let carddata = ref();
let videodata = ref();
let orderdata = ref();
let userdata = ref();
axios.post('api/home/getData').then(res=>{
  console.log(res)
})

onMounted(() => {
  (async () => {
    tabledata.value = (
      await axios.post("api/home/getData")
    ).data.data.tableData;
    carddata.value = (await axios.post("api/home/getData")).data.data.listData;
    videodata.value = (
      await axios.post("api/home/getData")
    ).data.data.videoData;
    orderdata.value = (
      await axios.post("api/home/getData")
    ).data.data.orderData;
    userdata.value = (await axios.post("api/home/getData")).data.data.userData;
    const echart_one = echarts.init(echart.value);
    const xAxis: string[] = Object.keys(orderdata.value.list[0]);
    const series: SeriesOption[] = [];
    xAxis.forEach((key) => {
      series.push({
        name: key,
        data: orderdata.value.list.map((item: { [key: string]: string }) => {
          return item[key];
        }),
        type: "line",
      });
    });
    const option = {
      xAxis: {
        data: xAxis,
      },
      yAxis: {},
      series: series,
      legend: {
        data: xAxis,
      },
      tooltip: {
        trigger: "axis",
        confine: true,
      },
      grid: {
        x: 50,
        y: 40,
        x2: 50,
        y2: 40,
      },
    };
    echart_one.setOption(option);
    echarts.init(echartTwo.value).setOption({
      legend: {
        textStyle: {
          color: "#333",
        },
      },
      grid: {
        left: "20%"
      },
      yAxis: {},
      xAxis: {
        type: "category",
        data: userdata.value.map((item: { [key: string]: string }) => {
          return item.date;
        }),
        axisLine: {
          lineStyle: {
            color: "#17b3a3",
          },
        },
      },
      axisLabel: {
        interval: 0,
        color: "#333",
      },
      series: [
        {
          name: "新增用户",
          data: userdata.value.map((item: { [key: string]: string }) => {
            return item.new;
          }),
          type: "bar",
        },
        {
          name: "活跃用户",
          data: userdata.value.map((item: { [key: string]: string }) => {
            return item.active;
          }),
          type: "bar",
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
    });
    echarts.init(echartThree.value).setOption({
      tooltip:{
        trigger: "item",
      },

      series: [
        {
          data: videodata.value,
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: true,
          },
        },
      ],
    });
  })();
});
</script>

<template>
  <el-row>
    <el-col :span="8" :sm="24" :lg="8" :md="8" style="padding: 10px">
      <el-card shadow="hover" style="margin-bottom: 10px">
        <div class="user">
          <el-avatar style="width: 100px; height: 100px" fit="scale-down">
            <img src="/profile.jpeg" alt="" />
          </el-avatar>
          <div class="userinfo">
            <p class="name">Access</p>
            <p class="access">管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p class="last-login-time">上次登录时间<span>2022-2-24</span></p>
          <p class="last-login-location">上次登录地址<span>Chengdu</span></p>
        </div>
      </el-card>
      <el-card shadow="hover">
        <el-table stripe border :data="tabledata">
          <el-table-column prop="name" label="品牌"></el-table-column>
          <el-table-column prop="todayBuy" label="日购买量"></el-table-column>
          <el-table-column prop="monthBuy" label="月购买量"></el-table-column>
          <el-table-column prop="totalBuy" label="总购买量"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" :sm="24" :lg="16" :md="16" style="padding: 10px">
      <div class="right-col">
        <el-card
          v-for="item in carddata"
          :key="item._id"
          shadow="hover"
          body-style="display:flex;padding:0;place-items:center;"
        >
          <el-icon class="right-icon" :style="{ backgroundColor: item.color }"
          ><component :is="item.icon"
          /></el-icon>
          <div class="right-value">
            <span>¥{{ item.value }}</span>
            <span>{{ item.name }}</span>
          </div>
        </el-card>
      </div>
      <div>
        <el-card style="margin-top: 10px">
          <div ref="echart" class="echart-1"></div>
        </el-card>
        <div style="display: flex; width: 100%" class="echartDown">
          <el-card style="width: 50% ; margin: 10px 10px 0 0">
            <div ref="echartTwo" class="echartTwo"></div>
          </el-card>
          <el-card style="width: 50%;margin: 10px 0 0 0">
            <div ref="echartThree" class="echatThree"></div>
          </el-card>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style scoped lang="sass">
.user
  display: flex
  margin-bottom: 20px
  padding-bottom: 20px
  border-bottom: 1px solid gainsboro
  align-items: center
  .userinfo
    margin-left: 20px
    .name
      font-size: 32px
    .access
      font-size: 10px
      color: rgba(0, 0, 0, 0.3)
.login-info
  color: gainsboro
  font-size: 10px
  p
    span
      margin-left: 60px
.right-col
  display: grid
  grid-template-rows: 1fr 1fr
  grid-template-columns: 1fr 1fr 1fr
  grid-gap: 10px
.right-icon
  width: 80px
  height: 80px
  :nth-child(1)
    width: 40px
    height: 40px
    color: white
.right-value
  margin-left: 20px
  display: flex
  flex-direction: column
  place-items: flex-start
  :nth-child(1)
    font-size: 30px
    margin-bottom: 10px
  :nth-child(2)
    font-size: 14px
    color: #999
.echart-1
  height: 200px
  margin-top: 10px
.echartTwo
  height: 300px
  width: 100%
.echatThree
  height: 300px
  width: 100%
</style>
