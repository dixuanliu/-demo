import Mock from "mockjs";
export default {
  permissionCheck: (data) => {
    console.log(data);
    if (data.name === "admin" && data.password === "admin") {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "HomeFilled",
              url: "/HomeView.vue",
            },
            {
              path: "/mall",
              name: "mall",
              label: "商品管理",
              icon: "TakeawayBox",
              url: "/MallView.vue",
            },
            {
              path: "/user",
              name: "user",
              label: "用户管理",
              icon: "UserFilled",
              url: "/UserView.vue",
            },
            {
              label: "其他",
              icon: "LocationFilled",
              children: [
                {
                  path: "/page1",
                  name: "page1",
                  label: "页面1",
                  icon: "Grid",
                  url: "/OtherPageOne.vue",
                },
                {
                  path: "/page2",
                  name: "page2",
                  label: "页面2",
                  icon: "Grid",
                  url: "/OtherPageTwo.vue",
                },
              ],
            },
          ],
          token: Mock.Random.guid(),
          permission: "管理员",
        },
      };
    } else if (data.name === "xiaoming" && data.password === "123456") {
      return {
        code: 200,
        data: {
          menu: [
            {
              path: "/home",
              name: "home",
              label: "首页",
              icon: "HomeFilled",
              url: "/HomeView.vue",
            },
            {
              path: "/mall",
              name: "mall",
              label: "商品管理",
              icon: "TakeawayBox",
              url: "/MallView.vue",
            },
          ],
          token: Mock.Random.guid(),
          permission: "普通用户"
        },
      };
    } else {
      return {
        code: 400,
        message: "fail",
      };
    }
  },
};
