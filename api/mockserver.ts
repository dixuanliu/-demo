import Mock from "mockjs";
import homeApi from "./MockData";
import loginApi from "./Permission";
Mock.mock(/api\/home\/getData/, "post", (options) => {
  const action = JSON.parse(options.body);
  if (action) {
    return homeApi.getStatisticalData(action.begin, action.size);
  } else {
    return homeApi.getStatisticalData(1, 12);
  }
});
Mock.mock(/api\/home\/addUser/, "post", (options) => {
  const data = JSON.parse(options.body);
  homeApi.addUserData(data);
});
Mock.mock(/api\/home\/delUser/, "post", (options) => {
  const data = JSON.parse(options.body);
  homeApi.delUserData(data);
});
Mock.mock(/api\/home\/editUser/, "post", (options) => {
  const data = JSON.parse(options.body);
  homeApi.editUserData(data);
});
Mock.mock(/api\/home\/Search/, "post", (options) => {
  return homeApi.searchUserData(options.body);
});
Mock.mock(/api\/permission\/getMenu/, "post", (options)=>{
  const data = JSON.parse(options.body)._value
  return loginApi.permissionCheck(data)
})