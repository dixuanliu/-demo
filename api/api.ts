import axios from "axios";
import Mock from "mockjs";
export async function getUser(action){
  const data = await axios.post("/api/home/getData",action)
  return data.data.data
}

export async function addUser(data){
  data.id = Mock.Random.id()
  await axios.post("api/home/addUser",data)
}

export async function delUser(data){
  await axios.post("api/home/delUser",data)
}

export async function editUser(data){
  await axios.post("api/home/editUser",data)
}

export async function Search(query){
  const data = await axios.post("api/home/Search", query);
  return data
}