import Mock, { Random } from "mockjs";
const list: [object] = [];
const DatePice: [string] = [];
let userManage: [object] = [];
let begin = 20191000;
for (let i = 0; i < 7; i++) {
  begin++;
  DatePice.push(begin.toString());
}
for (let i = 0; i < 100; i++)
  userManage.push(
    Mock.mock({
      id: "@id",
      name: "@cname",
      birthday: '@date("yyyy-MM-dd")',
      "sex|1": ["男", "女"],
      "age|20-100": 40,
      address: "@county(true)",
    })
  );
export default {
  getStatisticalData: (current, size) => {
    for (let i = 0; i < 7; i++) {
      list.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
          魅族: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 200,
      data: {
        orderData: {
          date: Date,
          list: list,
        },
        tableData: [
          {
            name: "oppo",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
          {
            name: "vivo",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
          {
            name: "苹果",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
          {
            name: "魅族",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
          {
            name: "小米",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
          {
            name: "华为",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
          {
            name: "中兴",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
          {
            name: "一加",
            todayBuy: Random.float(100, 1000, 0, 0),
            monthBuy: Random.float(2000, 10000, 0, 0),
            totalBuy: Random.float(2000, 10000, 0, 0),
          },
        ],
        videoData: [
          {
            name: "小米",
            value: Random.float(2000, 5000, 0, 0),
          },
          {
            name: "魅族",
            value: Random.float(2000, 5000, 0, 0),
          },
          {
            name: "苹果",
            value: Random.float(4000, 10000, 0, 0),
          },
          {
            name: "oppo",
            value: Random.float(3000, 5000, 0, 0),
          },
          {
            name: "vivo",
            value: Random.float(3000, 5000, 0, 0),
          },
        ],
        userData: [
          {
            date: "周一",
            new: Random.float(5, 50, 0, 0),
            active: Random.float(200, 1000, 0, 0),
          },
          {
            date: "周二",
            new: Random.float(5, 50, 0, 0),
            active: Random.float(200, 1000, 0, 0),
          },
          {
            date: "周三",
            new: Random.float(5, 50, 0, 0),
            active: Random.float(200, 1000, 0, 0),
          },
          {
            date: "周四",
            new: Random.float(5, 50, 0, 0),
            active: Random.float(200, 1000, 0, 0),
          },
          {
            date: "周五",
            new: Random.float(5, 50, 0, 0),
            active: Random.float(200, 1000, 0, 0),
          },
          {
            date: "周六",
            new: Random.float(5, 50, 0, 0),
            active: Random.float(200, 1000, 0, 0),
          },
          {
            date: "周日",
            new: Random.float(5, 50, 0, 0),
            active: Random.float(200, 1000, 0, 0),
          },
        ],
        listData: [
          {
            value: Random.float(1000, 2000, 0, 0),
            icon: "circle-check-filled",
            color: "#2ec7c9",
            name: "今日支付订单",
          },
          {
            value: Random.float(100, 500, 0, 0),
            icon: "star-filled",
            color: "#ffb980",
            name: "今日收藏订单",
          },
          {
            value: Random.float(1000, 2000, 0, 0),
            icon: "goods",
            color: "#5ab1ef",
            name: "今日未支付订单",
          },
          {
            value: Random.float(4000, 10000, 0, 0),
            icon: "circle-check-filled",
            color: "#2ec7c9",
            name: "本月支付订单",
          },
          {
            value: Random.float(100, 500, 0, 0),
            icon: "star-filled",
            color: "#ffb980",
            name: "本月收藏订单",
          },
          {
            value: Random.float(1000, 2000, 0, 0),
            icon: "goods",
            color: "#5ab1ef",
            name: "本月未支付订单",
          },
        ],
        userManage: userManage.slice((current - 1) * size, current * size),
        userLength: userManage.length,
      },
    };
  },
  addUserData: (data) => {
    userManage.unshift(data);
    return {
      code: 200,
      message: "yes add",
    };
  },
  delUserData: (data) => {
    userManage = userManage.filter((item) => {
      return item.id != data.id;
    });
  },
  editUserData: (data) => {
    userManage.forEach((item) => {
      if (item.id == data.id) {
        Object.keys(item).forEach((key) => {
          item[key] = data[key];
        });
      }
    });
  },
  searchUserData: (query) => {
    const result = [];
    userManage.forEach(item=>{
      Object.keys(item).forEach(key=>{
        if (item[key] == query){
          result.push(item)
        }
      })
    })
    return{
      code:200,
      data:result
    }
  },
};
