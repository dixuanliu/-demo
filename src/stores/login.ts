import {defineStore} from "pinia";
import { reactive } from "vue";
interface MenuDataList {
  children?: MenuDataList[];
  path?: string;
  name?: string;
  label: string;
  icon: string;
  url?: string;
}
export const useLoginStore = defineStore('useLoginStore',()=>{

  const Menu :MenuDataList[]= reactive([]);
  const user = reactive({
    name: "",
    permission: "",
    last_login_time: "",
  })
  return{Menu,user}
})